import { createContext, useState, useCallback, useContext, useRef, useEffect } from 'react';
import { translateBatch } from '../services/translateApi';

const CACHE_KEY = 'prolance_tr_en';

function loadCache() {
  try {
    return JSON.parse(localStorage.getItem(CACHE_KEY)) || {};
  } catch {
    return {};
  }
}

function saveCache(cache) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  } catch { /* quota exceeded */ }
}

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('lang') || 'tr');
  const [cache, setCache] = useState(loadCache);
  const [translating, setTranslating] = useState(false);
  const missing = useRef(new Set());
  const flushScheduled = useRef(false);

  useEffect(() => {
    localStorage.setItem('lang', lang);
  }, [lang]);

  const flush = useCallback(() => {
    flushScheduled.current = false;
    const texts = [...missing.current];
    missing.current = new Set();
    if (texts.length === 0) return;

    const apiKey = import.meta.env.VITE_TRANSLATE_API_KEY;
    if (!apiKey) {
      console.warn('Translation API key not found. Add VITE_TRANSLATE_API_KEY to .env.local');
      return;
    }

    setTranslating(true);
    translateBatch(texts, 'en')
      .then((results) => {
        if (Object.keys(results).length > 0) {
          setCache((prev) => {
            const merged = { ...prev, ...results };
            saveCache(merged);
            return merged;
          });
        }
      })
      .catch((err) => {
        console.error('Translation failed:', err);
      })
      .finally(() => setTranslating(false));
  }, []);

  const scheduleFlush = useCallback(() => {
    if (!flushScheduled.current) {
      flushScheduled.current = true;
      Promise.resolve().then(() => setTimeout(flush, 60));
    }
  }, [flush]);

  const t = useCallback(
    (text) => {
      if (!text || lang === 'tr') return text;
      if (cache[text]) return cache[text];
      missing.current.add(text);
      scheduleFlush();
      return text;
    },
    [lang, cache, scheduleFlush]
  );

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'tr' ? 'en' : 'tr'));
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t, translating }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
