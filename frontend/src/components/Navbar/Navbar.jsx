import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });
  const location = useLocation();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-inner">
          <Link to="/" className="navbar-logo">
            <div className="navbar-logo-icon">
              <span className="material-icons">shield</span>
            </div>
            <span className="navbar-logo-text">
              Prolance<span className="navbar-logo-accent">.ai</span>
            </span>
          </Link>

          <div className="navbar-links">
            <Link to="/products" className={`navbar-link ${isActive('/products') ? 'active' : ''}`}>
              Ürünler
            </Link>
            <Link to="/pricing" className={`navbar-link ${isActive('/pricing') ? 'active' : ''}`}>
              Fiyatlandırma
            </Link>
            <Link to="/about" className={`navbar-link ${isActive('/about') ? 'active' : ''}`}>
              Hakkımızda
            </Link>
            <Link to="/help" className={`navbar-link ${isActive('/help') ? 'active' : ''}`}>
              Yardım Merkezi
            </Link>
          </div>

          <div className="navbar-right">
            <button
              className="theme-toggle"
              onClick={() => setDark(!dark)}
              aria-label="Tema değiştir"
            >
              <span className="material-icons">
                {dark ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <Link to="/contact" className="navbar-cta">Başlayın</Link>
          </div>

          <div className="navbar-mobile-right">
            <button
              className="theme-toggle"
              onClick={() => setDark(!dark)}
              aria-label="Tema değiştir"
            >
              <span className="material-icons">
                {dark ? 'light_mode' : 'dark_mode'}
              </span>
            </button>
            <button
              className="navbar-mobile-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span className="material-icons">
                {mobileOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="navbar-mobile-menu">
            <Link to="/products" className={`navbar-mobile-link ${isActive('/products') ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
              Ürünler
            </Link>
            <Link to="/pricing" className={`navbar-mobile-link ${isActive('/pricing') ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
              Fiyatlandırma
            </Link>
            <Link to="/about" className={`navbar-mobile-link ${isActive('/about') ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
              Hakkımızda
            </Link>
            <Link to="/help" className={`navbar-mobile-link ${isActive('/help') ? 'active' : ''}`} onClick={() => setMobileOpen(false)}>
              Yardım Merkezi
            </Link>
            <Link to="/contact" className="navbar-mobile-cta" onClick={() => setMobileOpen(false)}>
              Başlayın
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
