const API_KEY = import.meta.env.VITE_TRANSLATE_API_KEY;
const API_URL = 'https://translation.googleapis.com/language/translate/v2';

export async function translateBatch(texts, targetLang = 'en') {
  if (!API_KEY || texts.length === 0) return {};

  const chunks = [];
  for (let i = 0; i < texts.length; i += 100) {
    chunks.push(texts.slice(i, i + 100));
  }

  const results = {};

  for (const chunk of chunks) {
    try {
      const res = await fetch(`${API_URL}?key=${API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          q: chunk,
          source: 'tr',
          target: targetLang,
          format: 'text',
        }),
      });

      if (!res.ok) {
        console.error('Translation API error:', res.status);
        break;
      }

      const data = await res.json();
      data.data.translations.forEach((t, i) => {
        results[chunk[i]] = t.translatedText;
      });
    } catch (err) {
      console.error('Translation fetch error:', err);
      break;
    }
  }

  return results;
}
