import { Link } from 'react-router-dom';
import './Careers.css';

const openings = [
  { id: 1, title: 'Kıdemli Frontend Mühendisi', department: 'Mühendislik', location: 'Uzaktan', type: 'Tam Zamanlı' },
  { id: 2, title: 'Backend Mühendisi', department: 'Mühendislik', location: 'Uzaktan', type: 'Tam Zamanlı' },
  { id: 3, title: 'Ürün Tasarımcısı', department: 'Tasarım', location: 'Uzaktan', type: 'Tam Zamanlı' },
  { id: 4, title: 'Güven ve Güvenlik Uzmanı', department: 'Operasyon', location: 'İstanbul', type: 'Tam Zamanlı' },
];

const perks = [
  { icon: 'public', title: 'Uzaktan Çalışma', desc: 'Dünyanın her yerinden çalışabilirsiniz.' },
  { icon: 'favorite', title: 'Sağlık ve Refah', desc: 'Kapsamlı sağlık sigortası.' },
  { icon: 'school', title: 'Eğitim Bütçesi', desc: 'Kurslar ve konferanslar için yıllık bütçe.' },
  { icon: 'beach_access', title: 'Esnek İzin', desc: 'Sonuca odaklıyız, saatlere değil.' },
];

function Careers() {
  return (
    <div className="careers">
      <section className="careers-hero">
        <div className="careers-hero-content">
          <span className="careers-badge">Ekibimize Katılın</span>
          <h1 className="careers-title">Hizmet Sektörünün<br /><span className="careers-title-accent">Geleceğini İnşa Edin</span></h1>
          <p className="careers-desc">Profesyonel hizmetleri bulmanın ve ödemenin güvenli ve adil olmasını sağlamak için çalışan tutkulu bir ekibe katılın.</p>
        </div>
      </section>
      <section className="careers-perks">
        <div className="careers-container">
          <h2 className="careers-section-title">Neden Prolance?</h2>
          <div className="careers-perks-grid">
            {perks.map((perk) => (
              <div key={perk.title} className="careers-perk-card">
                <div className="careers-perk-icon"><span className="material-icons">{perk.icon}</span></div>
                <h3 className="careers-perk-title">{perk.title}</h3>
                <p className="careers-perk-desc">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="careers-openings">
        <div className="careers-container">
          <h2 className="careers-section-title">Açık Pozisyonlar</h2>
          <div className="careers-openings-list">
            {openings.map((job) => (
              <div key={job.id} className="careers-job-card">
                <div className="careers-job-info">
                  <h3 className="careers-job-title">{job.title}</h3>
                  <div className="careers-job-meta">
                    <span className="careers-job-tag">{job.department}</span>
                    <span className="careers-job-tag">{job.location}</span>
                    <span className="careers-job-tag">{job.type}</span>
                  </div>
                </div>
                <Link to="/contact" className="careers-apply-btn">Başvur <span className="material-icons careers-apply-arrow">arrow_forward</span></Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Careers;
