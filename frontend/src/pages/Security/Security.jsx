import { Link } from 'react-router-dom';
import './Security.css';

const features = [
  {
    icon: 'account_balance_wallet',
    title: 'Güvenli Escrow',
    desc: 'Müşteri ödemeleri güvenle escrow\'da tutulur ve iş tamamlanıp doğrulandıktan sonra profesyonele aktarılır.',
  },
  {
    icon: 'photo_camera',
    title: 'Fotoğraf ve Video Doğrulama',
    desc: 'Profesyoneller tamamlanan işin fotoğraf ve video kanıtını gönderir. Ekibimiz ödeme aktarılmadan önce kanıtları inceler.',
  },
  {
    icon: 'schedule',
    title: '24 Saatlik Onay Süresi',
    desc: 'Müşteriler tamamlanan işi incelemek ve ödemeyi onaylamak veya itiraz etmek için 24 saate sahiptir. İşlem yapılmazsa otomatik onay devreye girer.',
  },
  {
    icon: 'forum',
    title: 'Platform İçi İletişim',
    desc: 'Tüm pazarlıklar uygulama içi teklif sistemimiz üzerinden gerçekleşir, anlaşmaları şeffaf ve izlenebilir tutar.',
  },
  {
    icon: 'gavel',
    title: 'Adil Anlaşmazlık Çözümü',
    desc: 'Anlaşmazlık durumunda destek ekibimiz kanıtları ve iletişim geçmişini inceleyerek her iki taraf için adil bir çözüm sağlar.',
  },
  {
    icon: 'lock',
    title: 'Güvenli Altyapı',
    desc: 'Tüm iletişim ve ödeme verileri endüstri standardı şifreleme ile korunur. Kişisel ve finansal bilgileriniz güvende kalır.',
  },
];

function Security() {
  return (
    <div className="security">
      <section className="security-hero">
        <div className="security-hero-blob"></div>
        <div className="security-hero-content">
          <span className="security-badge">
            <span className="material-icons security-badge-icon">shield</span> Güven ve Güvenlik
          </span>
          <h1 className="security-title">
            Her İşlem
            <br />
            <span className="security-title-accent">Koruma Altında</span>
          </h1>
          <p className="security-desc">
            Güvenli escrow ödemelerinden doğrulanmış iş tamamlamasına kadar — her adımda
            profesyonelleri ve müşterileri koruyoruz.
          </p>
        </div>
      </section>
      <section className="security-features">
        <div className="security-container">
          <div className="security-features-grid">
            {features.map((feat) => (
              <div key={feat.title} className="security-feature-card">
                <div className="security-feature-icon">
                  <span className="material-icons">{feat.icon}</span>
                </div>
                <h3 className="security-feature-title">{feat.title}</h3>
                <p className="security-feature-desc">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="security-cta-section">
        <div className="security-container">
          <div className="security-cta-card">
            <h2>Güvenlik hakkında sorularınız mı var?</h2>
            <p>Ekibimiz yardımcı olmak için burada. İstediğiniz zaman bize ulaşın.</p>
            <Link to="/contact" className="security-cta-btn">
              Bize Ulaşın <span className="material-icons">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Security;
