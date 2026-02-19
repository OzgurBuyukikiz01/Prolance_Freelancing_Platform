import { Link } from 'react-router-dom';
import './Products.css';

function Products() {
  return (
    <div className="products">
      <header className="products-hero">
        <div className="products-hero-blob products-hero-blob-right"></div>
        <div className="products-hero-blob products-hero-blob-left"></div>

        <div className="products-hero-content">
          <span className="products-hero-badge">
            <span className="products-hero-badge-dot animate-pulse"></span>
            Platform
          </span>
          <h1 className="products-hero-title">
            Çift Yönlü Pazar Yeri,
            <br />
            <span className="products-hero-title-gradient">Korumalı Ödemeler.</span>
          </h1>
          <p className="products-hero-desc">
            İster müşteri arayan bir profesyonel olun, ister doğru ustayı arayan bir müşteri —
            Prolance her iki taraf için de kolay, güvenli ve şeffaf.
          </p>
        </div>
      </header>

      <section className="products-grid-section">
        <div className="products-grid-container">
          <div className="products-grid">
            {/* Pazar Yeri */}
            <div className="product-card">
              <div className="product-card-icon">
                <span className="material-icons-outlined">storefront</span>
              </div>
              <h3 className="product-card-title">Çift Yönlü Pazar Yeri</h3>
              <p className="product-card-desc">
                Profesyoneller hizmet ilanları açarak müşterilere ulaşır. Müşteriler iş etiketleri
                ve bütçeye göre arama yaparak doğru ustayı bulur. İki taraf da birbirini kolayca bulur.
              </p>
              <div className="product-card-bottom">
                <ul className="product-features">
                  <li>
                    <span className="material-icons-outlined product-check">check_circle</span>
İlan oluşturma veya etiket ve bütçeye göre arama                  </li>
                  <li>
                    <span className="material-icons-outlined product-check">check_circle</span>
Uygulama içi teklif ve pazarlık sistemi                  </li>
                </ul>
                <Link to="/contact" className="product-btn-outline">
Daha Fazla                  <span className="material-icons-outlined product-btn-arrow">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Güvenli Escrow */}
            <div className="product-card product-card-featured">
              <div className="product-featured-badge">Temel Özellik</div>
              <div className="product-card-icon product-card-icon-gold">
                <span className="material-icons-outlined">account_balance_wallet</span>
              </div>
              <h3 className="product-card-title">Güvenli Escrow</h3>
              <p className="product-card-desc">
Ödemeler iş tamamlanana kadar güvenle tutulur. Profesyoneller tamamlanan işin{' '}
fotoğraf ve video kanıtını gönderir. Ödeme yalnızca doğrulama ve müşteri onayı sonrası aktarılır.              </p>
              <div className="product-card-bottom">
                <div className="product-stats-box">
                  <div className="product-stats-header">
                    <span className="material-icons-outlined">verified_user</span>
                    <span>Nasıl Çalışır?</span>
                  </div>
                  <div className="product-stats-value">4 Adım</div>
                  <div className="product-stats-label">Teklif → Ödeme → Doğrulama → Aktarım</div>
                </div>
                <Link to="/contact" className="product-btn-primary">
Hemen Başla                  <span className="material-icons-outlined product-btn-arrow">shield</span>
                </Link>
              </div>
            </div>

            {/* Akıllı Randevu */}
            <div className="product-card">
              <div className="product-card-icon product-card-icon-dark">
                <span className="material-icons-outlined">calendar_month</span>
              </div>
              <h3 className="product-card-title">Akıllı Randevu</h3>
              <p className="product-card-desc">
Profesyoneller kendi müsaitlik durumlarını belirler — zaman dilimleri, mola aralıkları{' '}
ve çalışma saatleri. Müşteriler uygun tarih ve saati seçip güvenli ödemeye geçer.              </p>
              <div className="product-card-bottom">
                <ul className="product-features">
                  <li>
                    <span className="material-icons-outlined product-check product-check-muted">check_circle</span>
Profesyonelin belirlediği esnek takvim                  </li>
                  <li>
                    <span className="material-icons-outlined product-check product-check-muted">check_circle</span>
Özelleştirilebilir aralıklar (30 dk, 1 saat vb.)                  </li>
                </ul>
                <Link to="/contact" className="product-btn-dark">
İletişime Geç                  <span className="material-icons-outlined product-btn-arrow">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="products-trust">
        <div className="products-trust-container">
          <div className="products-trust-grid">
            <div className="products-trust-text">
              <h2 className="products-trust-title">
Her işlem için                <br />
                <span className="products-trust-title-accent">uçtan uca koruma</span>.
              </h2>
              <p className="products-trust-desc">
İlk tekliften son ödeme aktarımına kadar — her adım platform üzerinde gerçekleşir.{' '}
Uygulama dışı anlaşma yok, ödeme riski yok. Sadece doğrulanmış iş ve güvenli işlemler.              </p>
              <div className="products-trust-avatars">
                <div className="products-avatar-stack">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuC96oM-xoY_cCdp6wttc4-Rxl_DzSSUBc_ZyGSDEwpbwFpPU0Ybkl7PZ8fici8Q4Tg62NDX088OdtZcI9IrR9ljSRenQNAVoj_bI0dqE8eKI3Y0tZL7XmExS-WNbVmwkzPdNYT1lWEeZNit3jkL5VRdt7FFyldL55zFhhQmTxHYoIAaBU-NMLAeZRReQ-6_aL8oWeCIM2m90MLvy4n_4kHUFnmq7Jg9ZkJfR0-yuuQMArP76eYyrLOGW3JbtyAzA6o67x-j-O56Ppmt" alt="Profesyonel" className="products-stack-avatar" />
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBozGekY4cKrP4GeTwLjjGm2LqobD-ku6tOXt3Ka7G6Tb7x_6Jn50KWAVYGvuy30DJFe57wNe86rLRET0AAZNJVaM-BL6TptD2imzw9Fys5nyZWD1TshHbhfbZmI656d_dui0WVfZ8Hy3c456i7Dq_yKaBQcFFdRdeBfgr6pr-jl59zhOfVsmQR7rortd3fcixY-Tw6mqvKzQkbcainiVyhWLexVVb5ydXPUE9_36VS_QOYocqIOXzgsqgnekb3PJ2boXwPalhjisle" alt="Müşteri" className="products-stack-avatar" />
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMgwaq7PHtaW7i0azMK3nh12a2U58D2RWcXxqnAnDZ2jdPyEI3jwyo5o5HgTLSdgA_kIoyH8yt7dyNHmbR7T3qaEaq2OR9EDma4Yy4gyQKRtkWzGPlWZ2dom1ladK9MpV8CfVOXYsLKdr0rtn9Z19ev5am3-kFOXgdRa8c8aR0y9td-kLNdnJr0M4s3iLI5zoLTZXSOLX4pZcyWDW2zjfGiuIRzwrXQLPbBUAaEHgaa6rrVzRWdLKRmIb1I7FY2p1dmAgegsuOVyL8" alt="Profesyonel" className="products-stack-avatar" />
                  <div className="products-stack-count">+</div>
                </div>
                <div className="products-trust-label">
                  <p className="products-trust-label-bold">Topluluğa katılın</p>
                  <p className="products-trust-label-sub">Profesyoneller ve müşteriler</p>
                </div>
              </div>
            </div>

            <div className="products-dashboard-wrapper">
              <div className="products-dashboard-bg"></div>
              <div className="products-dashboard">
                <div className="products-dashboard-header">
                  <div className="products-dashboard-dots">
                    <div className="mockup-dot dot-red"></div>
                    <div className="mockup-dot dot-amber"></div>
                    <div className="mockup-dot dot-green"></div>
                  </div>
                  <div className="products-dashboard-url">app.prolance.com</div>
                </div>
                <div className="products-dashboard-body">
                  <div className="dashboard-row">
                    <div className="dashboard-row-left">
                      <div className="dashboard-row-icon dashboard-row-icon-primary">
                        <span className="material-icons-outlined">verified_user</span>
                      </div>
                      <div>
                        <div className="dashboard-row-title">İş Doğrulandı ve Onaylandı</div>
                        <div className="dashboard-row-sub">Fotoğraf ve video kanıtları incelendi</div>
                      </div>
                    </div>
                    <div className="dashboard-row-amount">Ödeme Aktarıldı</div>
                  </div>
                  <div className="dashboard-row dashboard-row-faded">
                    <div className="dashboard-row-left">
                      <div className="dashboard-row-icon">
                        <span className="material-icons-outlined">schedule</span>
                      </div>
                      <div>
                        <div className="dashboard-row-title">Tesisatçı Hizmeti — 20 Şubat</div>
                        <div className="dashboard-row-sub">Randevu: 14:00 – 15:00</div>
                      </div>
                    </div>
                    <div className="dashboard-row-status">Yaklaşan</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
