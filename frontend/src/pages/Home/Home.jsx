import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home home-entry">
      <section className="hero">
        <div className="hero-bg-gradient"></div>
        <div className="hero-bg-blob hero-bg-blob-right"></div>
        <div className="hero-bg-blob hero-bg-blob-left"></div>

        <div className="hero-container">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="hero-badge-dot animate-pulse"></span>
              Güvenli Escrow Sistemi
            </div>

            <h1 className="hero-title">
              Usta Bul, Randevu Al, <br />
              <span className="hero-title-gradient">Güvenle Öde.</span>
            </h1>

            <p className="hero-description">
              <span className="hero-highlight">Prolance</span> sizi güvenilir profesyonellerle
              uygulama içi teklif sistemiyle buluşturur. Ödemeler escrow&apos;da tutulur ve
              sadece doğrulanmış iş tamamlaması sonrası serbest bırakılır — iki tarafı da korur.
            </p>

            <div className="hero-actions">
              <Link to="/contact" className="btn-primary">
                Hemen Başla
                <span className="material-icons btn-icon">arrow_forward</span>
              </Link>
              <Link to="/about" className="btn-secondary">
                <span className="material-icons btn-icon-left">play_circle_filled</span>
                Daha Fazla Bilgi
              </Link>
            </div>
          </div>

          <div className="hero-mockup-wrapper">
            <div className="hero-mockup-decor"></div>
            <div className="hero-mockup">
              <div className="mockup-header">
                <div className="mockup-dots">
                  <div className="mockup-dot dot-red"></div>
                  <div className="mockup-dot dot-amber"></div>
                  <div className="mockup-dot dot-green"></div>
                </div>
                <div className="mockup-filename">prolance_escrow</div>
              </div>

              <div className="mockup-body">
                <div className="mockup-success animate-fade-in-up">
                  <div className="shield-wrapper">
                    <div className="shield-glow"></div>
                    <div className="shield-icon">
                      <span className="material-icons shield-check">verified_user</span>
                    </div>
                    <div className="shield-badge">
                      <div className="shield-badge-inner">
                        <span className="material-icons shield-badge-check">check</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="mockup-title">İş Doğrulandı</h3>
                  <p className="mockup-subtitle">
                    Fotoğraf ve video kanıtları incelendi. Ödeme ustaya aktarıldı.
                  </p>

                  <div className="mockup-steps">
                    <div className="mockup-step">
                      <span className="mockup-step-label">
                        <span className="material-icons mockup-step-icon">photo_camera</span>
                        Fotoğraf Kanıtı
                      </span>
                      <span className="mockup-step-value">Doğrulandı</span>
                    </div>
                    <div className="mockup-step">
                      <span className="mockup-step-label">
                        <span className="material-icons mockup-step-icon">videocam</span>
                        Video Kanıtı
                      </span>
                      <span className="mockup-step-value">Doğrulandı</span>
                    </div>
                  </div>

                  <div className="mockup-progress">
                    <div className="mockup-progress-bar"></div>
                  </div>
                  <div className="mockup-status">Ödeme Aktarıldı</div>
                </div>
              </div>
            </div>

            <div className="hero-floating-tooltip animate-bounce-slow">
              <div className="tooltip-avatar">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHPRJ1p5X7qnE6BXmAH35hPp7A_cKDohpbC_bv8mrsOCjxzIZSVDHtQBc-C0tjt6Z6OwppIllETDzNRJYpoPKeJci4Of-9bVfDC_1F6aLU97c-L-mTUkz92wHqTSxnoHbOk_Q9jTwApX5__DS5UgB53fT1YSV72JAzC5U0tJ4PTc0wNqWXD4HJEatPDRXLrBfXNZ4BHPnZ4xdJSpZmHXp8JNHYyvYY8WjWfiQnLU2KrEoFblyj84iyBsWhF7vnRSWnQHfzSaRzf5Kc"
                  alt="Doğrulanmış Profesyonel"
                />
              </div>
              <div>
                <div className="tooltip-name">Ahmet Y.</div>
                <div className="tooltip-status">
                  <span className="tooltip-status-dot"></span> Ödeme Alındı
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-section">
        <div className="trust-container">
          <h2 className="trust-title">Profesyoneller ve Müşteriler İçin</h2>
          <div className="trust-grid">
            <div className="trust-item">
              <img className="trust-avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdhaxS13cMMITXYKdfu8TPqmlaSBFC8hZVuayvfdxTo9IgNvpgIAWIH30hl8HtOO2SvrRZtdXu2d8ogIDKe5FpWUSakXcwddvmpx9BkdTtNJnp_brr2lJzJc29pSowlXWEiA0qc1IJ8vUtSIZEOSJbqdQp39xBPgBgP3MbAimEpITqfQtmKT3jmKX6JN77aHwZX04cmbHHzmD_ueCH3mBFbNz86-0msZimYlFTh1PiaNOgRm-G18lMdfBPtk0gKGOWOcfyPBuyomvz" alt="Profesyonel" />
              <div className="trust-tooltip">Hizmet Uzmanı</div>
            </div>
            <div className="trust-item">
              <div className="trust-icon-circle"><span className="material-icons trust-icon">handyman</span></div>
              <div className="trust-tooltip">Ustalar</div>
            </div>
            <div className="trust-item">
              <img className="trust-avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqEw9BLyg3uUCg6s6RLFYxseTNcgiN5fWkyelZTjGwDR6_iMjunHGVr2p31c56BeUy8_xl2AiDon_cWRmTV8bBaSWtVFRpMYxVSht9zVhD-8tnrq5RyuIhgrp1FpKQbS1Jr7Ww0nRxmrn8X3XRzdVq6_AgguLZFkbGQpcStUUUcIyjGNmd0s-mKICq9H41ItF-Zo6o-Fhv-YQy9UbRPnVRBheSsi4atgh9vRXFjSVUFqbVDdYjiS0WRCJ89oTRygdrmfkitXaPcnyX" alt="Müşteri" />
              <div className="trust-tooltip">Mutlu Müşteri</div>
            </div>
            <div className="trust-item">
              <div className="trust-icon-circle"><span className="material-icons trust-icon">store</span></div>
              <div className="trust-tooltip">Küçük İşletmeler</div>
            </div>
            <div className="trust-item">
              <img className="trust-avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpjU_w6HmSG9SkSM6DC6kYKGKOm3GWDhgoblyntjB0HJm9BxTQFcqXQXGofPozaO5qUFF0bWYEJfvZ9r9gGuDgDuzPDPIvgcXqVrXPhHtbu--jq5HFyJElQuIcDfHf-6CdrzI0SlLosyzT8Id_VgLl2yo0FHChyvypfXl6cblMVWyxnLkGwuKkOA_T447z1oO4MFqn0zwmU8-w3alq5NQ4EbeaWe3LBUdV5RpkO9eA_fhB7GqwK1uW0b-M6y49_pmNZt9G3cc4dXEx" alt="Serbest Çalışan" />
              <div className="trust-tooltip">Serbest Çalışan</div>
            </div>
            <div className="trust-item">
              <div className="trust-icon-circle"><span className="material-icons trust-icon">verified_user</span></div>
              <div className="trust-tooltip">Doğrulanmış</div>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-section">
        <div className="brand-bg-blob"></div>
        <div className="brand-container">
          <div className="brand-header">
            <h2 className="brand-label">Nasıl Çalışır?</h2>
            <h3 className="brand-title">Basit, Güvenli ve Şeffaf</h3>
            <p className="brand-description">
              Doğru profesyoneli bulmaktan doğrulanmış iş tamamlamasına kadar —
              her adım güvenli escrow sistemimizle korunur.
            </p>
          </div>

          <div className="brand-cards">
            <div className="brand-card">
              <div className="brand-card-visual">
                <div className="brand-icon-main">
                  <svg width="128" height="128" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <circle cx="12" cy="12" r="7" opacity="0.5" strokeDasharray="2 2" />
                  </svg>
                  <div className="orbit-icon orbit-top"><span className="material-icons">search</span></div>
                  <div className="orbit-icon orbit-bl"><span className="material-icons">handshake</span></div>
                  <div className="orbit-icon orbit-br"><span className="material-icons">schedule</span></div>
                </div>
              </div>
              <div className="brand-card-info">
                <h4 className="brand-card-title">Bul ve Anlaş</h4>
                <p className="brand-card-desc">
                  İlanları inceleyin veya iş etiketleri ve bütçeye göre arama yapın.
                  Uygulama içi teklif sistemiyle profesyonellerle iletişime geçin — iki taraf da anlaşana kadar pazarlık yapın.
                </p>
                <div className="brand-card-formats">
                  <span className="brand-format-tag">TEKLİF</span>
                  <span className="brand-format-tag">RANDEVU</span>
                </div>
              </div>
            </div>

            <div className="brand-card brand-card-premium">
              <div className="brand-card-visual brand-card-visual-dark">
                <div className="brand-gold-glow"></div>
                <div className="brand-icon-gold">
                  <svg width="128" height="128" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="url(#goldGradient)" />
                    <defs>
                      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#FCD34D', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#D97706', stopOpacity: 1 }} />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="brand-gold-overlay">
                    <span className="material-icons brand-handshake-icon">account_balance_wallet</span>
                  </div>
                  <div className="orbit-icon-gold orbit-top"><span className="material-icons">lock</span></div>
                  <div className="orbit-icon-gold orbit-bl"><span className="material-icons">photo_camera</span></div>
                  <div className="orbit-icon-gold orbit-br"><span className="material-icons">check_circle</span></div>
                </div>
              </div>
              <div className="brand-card-info">
                <h4 className="brand-card-title">Öde ve Doğrula</h4>
                <p className="brand-card-desc">
                  Ödemeniz güvenli şekilde escrow&apos;da tutulur. İş tamamlandığında
                  profesyonel fotoğraf ve video kanıtı gönderir. Doğrulama ve onay sonrası ödeme aktarılır.
                </p>
                <div className="brand-card-formats">
                  <span className="brand-format-tag">ESCROW</span>
                  <span className="brand-format-tag">DOĞRULA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
