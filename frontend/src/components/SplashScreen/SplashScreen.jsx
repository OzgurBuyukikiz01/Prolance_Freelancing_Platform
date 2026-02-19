import { useState, useEffect } from 'react';
import './SplashScreen.css';

function SplashScreen({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1600);
    const removeTimer = setTimeout(() => onFinish(), 2100);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [onFinish]);

  return (
    <div className={`splash ${fadeOut ? 'fade-out' : ''}`}>
      <div className="splash-logo-wrapper">
        <div className="splash-ring"></div>
        <div className="splash-ring splash-ring-outer"></div>
        <div className="splash-logo-box">
          <span className="material-icons">shield</span>
        </div>
      </div>
      <div className="splash-brand">
        <span className="splash-brand-name">Prolance</span>
        <span className="splash-brand-name splash-brand-accent">.ai</span>
      </div>
      <div className="splash-bar-track">
        <div className="splash-bar-fill"></div>
      </div>
    </div>
  );
}

export default SplashScreen;
