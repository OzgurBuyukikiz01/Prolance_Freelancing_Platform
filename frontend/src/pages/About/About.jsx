import { Link } from 'react-router-dom';
import './About.css';

const teamMembers = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO ve Kurucu Ortak',
    bio: 'Adil çalışma koşullarına tutkuyla bağlı eski fintech yöneticisi.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjjwySaWnYWzsCVavC6XUFnN-ypdFARS_FPQG13Aleoqvs20Yw53C0tyEbfRq3NiFpkX4iqlffniM4Ir6raL5drjtHdp2chotGmjV6KgBdbvlBC90sJYbyAqW5ss6eZt-yO3bIR7WHaOSGUz1oIkq-p_hwFXSFHIEMkGIZJXi_Q8uscv16xcl33rmmy3VuFP-ibE8Kitq4hBy2HHl5LsXP7RHbS142eKvK9h2xoYzTEOS3WOgQpSGs-4N4gOAYWyN3OrPvCU0ho6OP',
  },
  {
    name: 'David Chen',
    role: 'CTO ve Baş Mühendis',
    bio: 'Güvenli ödeme altyapısı üzerine odaklanan full-stack mühendis.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQfsH4MpmZB5uT8D1YiyinAWes43JVw0ByO5uUxTng_Eheg09pfoafydzvJwoUKtgUH7y-30HsrbSKPwzArwemU5vyfqumtjo_peAiTPCiofxv2Keyd5bAW9EH0_h68pRL86QfEckVS1qU3ecDcaXnx7ZEwaXCQHAQMCRvMBfWw3XCedIYDU4boodbwExGO532EJIVxaey-TCNdSITctJ7t5uhViuZQv_KiBko6-xno8AXqT4QHKbFuMPO2EG3wJO4X8i5PiT9jhnd',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Ürün Müdürü',
    bio: 'Hizmet profesyonelleri ve müşteriler için kusursuz deneyimler tasarlıyor.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOLGFGBi4Yz40t-eGl52LdqMTaqyvMIBQzJVWtlB4sv4AwTV2zjv8Q5yMV5FXPK34M9X5UAJ5D8uxo9d7E620oVsgJBmLsZfUOC_EpQyImfKTdSIJ4fXVJB6kKzArJpWGhkaaGmjSRGrfvnqywBRhmL9-ClVNa02D87AH6cs5MSjHEVWDJIELItw00yp3sFoVs3Hk2UBQFy6NUUCW2KaDYmHIDgVHzGMb6GlzHpx01kKz1z9luP5KH5KC2DtuCEGfC1SFN-pEgAXoC',
  },
  {
    name: 'Marcus Johnson',
    role: 'Topluluk Lideri',
    bio: 'Platform ile kullanıcılar arasında köprü kuruyor.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCENb5CM94yK5d4eH2IgpSuX_CPZc9wxcU-eNmFjrxRfhpre_CEUWhv67bn1Dov8Juf9XDLTmSfafwZ--gbBST_FSsHKSB3PO2c3jE31MD0nhBQWzqYrDakhkS5RksAkS0-amr52QuDV7ti-OEd_bNrqxMFh36FW5vmrtSpAa5kh5mqJ5OYicDYTX-FRx_oOk_gM1Iay5HNpjWC5sV-vYxet2eKDxOPcUh-7N1lhiPngOK6BlNymSt1aR7XjaZu1GmKwpmGt1lWubKc',
  },
];

function About() {
  return (
    <div className="about">
      <section className="about-hero">
        <div className="about-hero-bg"></div>
        <div className="about-hero-content">
          <span className="about-hero-badge">Hizmet Çalışmasını Yeniden Tanımlıyoruz</span>
          <h1 className="about-hero-title">
            Her İşlemde <br className="about-hero-br" />
            <span className="about-hero-highlight">
              <span className="about-hero-highlight-text">Güven</span>
              <span className="about-hero-highlight-bar"></span>
            </span>
          </h1>
          <p className="about-hero-desc">
            Profesyonellerin ve müşterilerin güvenle buluştuğu bir pazar yeri inşa ediyoruz —
            güvenli escrow ödemeleri ve doğrulanmış iş tamamlaması ile destekleniyor.
          </p>

          <div className="about-hero-image-wrapper">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVjN7pbxWpTd8c2xiWbcV_NDPH9fKFJRBHXdHVEKSHILULrul0coxnyFrsD20OKTBGNyw6e903jMF5mPeWLeFeAtSy-u5X7ll2e05PMhOkrmc_BkYaB4UuWGmXClabo4wlLz0ZSYkbPzKyxnk2WrXpkYOurX96odE6OnhABrOH6HYZZpyiE4_9ZPerhkR0HftUOS3EQezi87Vm8QR9YQ2Oej60Chg4B1kJa0YDzHHakLVY43adUCwd3CE_aUBGOtcpqP0baUaIgFoV"
              alt="İş birliği yapan profesyoneller ekibi"
              className="about-hero-image"
            />
            <div className="about-hero-image-overlay">
              <p>Profesyonelleri müşterilerle güvenle buluşturuyoruz</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-mission">
        <div className="about-mission-container">
          <div className="about-mission-header">
            <h2 className="about-mission-title">Misyonumuz</h2>
            <p className="about-mission-desc">
              Profesyonel hizmet bulma ve ödemenin güvenli, şeffaf ve herkes için sorunsuz olduğu bir pazar yeri oluşturmak.
            </p>
          </div>

          <div className="about-mission-cards">
            <div className="mission-card">
              <div className="mission-card-icon mission-card-icon-filled">
                <span className="material-icons">account_balance_wallet</span>
              </div>
              <h3 className="mission-card-title">Güvenli Escrow Ödemeler</h3>
              <p className="mission-card-desc">
                Müşteri ödemeleri iş tamamlanıp fotoğraf ve video kanıtıyla doğrulanana kadar güvenle tutulur. Artık ödeme anlaşmazlığı veya güven sorunu yok.
              </p>
            </div>

            <div className="mission-card">
              <div className="mission-card-icon">
                <span className="material-icons">swap_horiz</span>
              </div>
              <h3 className="mission-card-title">Çift Yönlü Keşif</h3>
              <p className="mission-card-desc">
                Profesyoneller hizmet ilanı açıp müşterilere doğrudan ulaşır. Müşteriler iş türü ve bütçeye göre arama yaparak doğru kişiyi bulur.
              </p>
            </div>

            <div className="mission-card">
              <div className="mission-card-icon">
                <span className="material-icons">handshake</span>
              </div>
              <h3 className="mission-card-title">Şeffaf ve Adil</h3>
              <p className="mission-card-desc">
                Uygulama içi teklif pazarlığı her şeyi platformda tutar. Her iki taraf da para el değiştirmeden önce fiyat ve takvim üzerinde anlaşır.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="about-story-container">
          <div className="about-story-card">
            <div className="about-story-blob"></div>
            <div className="about-story-grid">
              <div className="about-story-text">
                <h2 className="about-story-title">Hizmet İşlerinde Güven Sorununu Çözüyoruz</h2>
                <div className="about-story-paragraphs">
                  <p>
                    Prolance, kurucularımızın güvenilir hizmet profesyoneli bulmanın ne kadar zor olduğunu ve garanti olmadan peşin ödeme yapmanın ne kadar riskli olduğunu bizzat deneyimlemesiyle başladı.
                  </p>
                  <p>
                    Ödemelerin escrow ile korunduğu, işlerin fotoğraf ve video kanıtıyla doğrulandığı ve hem profesyonellerin hem müşterilerin tüm süreç boyunca gönül rahatlığına sahip olduğu bir platform inşa ettik.
                  </p>
                </div>

                <div className="about-stats">
                  <div className="about-stat">
                    <div className="about-stat-value">Escrow</div>
                    <div className="about-stat-label">Korumalı Ödemeler</div>
                  </div>
                  <div className="about-stat">
                    <div className="about-stat-value">Foto+Video</div>
                    <div className="about-stat-label">İş Doğrulama</div>
                  </div>
                  <div className="about-stat">
                    <div className="about-stat-value">24 Saat</div>
                    <div className="about-stat-label">Onay Süresi</div>
                  </div>
                </div>
              </div>

              <div className="about-story-image-wrapper">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCloAhJs_d-YRiAw8AMc16_s4i8ug-c2rnA42E7cn4nZgl4dV223S6IPpztk9BzZZgMub_IUx0Ld2y61L_XGIujAt0WeE7FV5HXC-2fQeSSuImWHLRGDLvk7I7CK1oJScZedmA8_usyzZEQGyosI2shLzpqUwlBVuUwdQQIJKGZ5pIxMyB7vsCDcfsHOht7K2ZjGOgXdPjc7T-IBrTyQXPqB6lOahoPKYB1NFagZaVPhuVW3uRi8VgT7quiwxWV6GwxiyKDv2AxYoJr"
                  alt="El sıkışan iki kişi"
                  className="about-story-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-team">
        <div className="about-team-container">
          <div className="about-team-header">
            <h2 className="about-team-title">Ekibimizle Tanışın</h2>
            <p className="about-team-desc">Prolance&apos;ın arkasındaki isimler.</p>
          </div>
          <div className="about-team-grid">
            {teamMembers.map((member) => (
              <div key={member.name} className="team-member">
                <div className="team-member-avatar-wrapper">
                  <div className="team-member-ring"></div>
                  <img src={member.img} alt={member.name} className="team-member-avatar" />
                </div>
                <h3 className="team-member-name">{member.name}</h3>
                <p className="team-member-role">{member.role}</p>
                <p className="team-member-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-cta-bg">
          <div className="about-cta-blob about-cta-blob-tl"></div>
          <div className="about-cta-blob about-cta-blob-center"></div>
          <div className="about-cta-blob about-cta-blob-br"></div>
        </div>
        <div className="about-cta-content">
          <h2 className="about-cta-title">Başlamaya Hazır mısınız?</h2>
          <p className="about-cta-desc">
            İster hizmet sunan bir profesyonel olun ister yardım arayan bir müşteri —
            Prolance yanınızda.
          </p>
          <div className="about-cta-actions">
            <Link to="/contact" className="about-cta-btn-primary">İletişime Geçin</Link>
            <Link to="/careers" className="about-cta-btn-secondary">Açık Pozisyonlar</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
