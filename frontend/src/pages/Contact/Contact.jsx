import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');
  const maxLength = 1000;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="contact-hero-content">
          <span className="contact-badge">İletişim</span>
          <h1 className="contact-title">Bizimle İletişime Geçin</h1>
          <p className="contact-desc">Sorularınız, önerileriniz veya iş birliği talepleriniz için bize ulaşın.</p>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-container">
          <div className="contact-grid">
            <div className="contact-form-wrapper">
              <h2 className="contact-form-title">Bize mesaj gönderin</h2>
              {submitted ? (
                <div className="contact-success">
                  <span className="material-icons contact-success-icon">check_circle</span>
                  <h3>Mesajınız Gönderildi!</h3>
                  <p>Bizimle iletişime geçtiğiniz için teşekkürler. 24 saat içinde size dönüş yapacağız.</p>
                  <button className="contact-reset-btn" onClick={() => setSubmitted(false)}>Başka Mesaj Gönder</button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form-row">
                    <div className="contact-field">
                      <label className="contact-label">Ad</label>
                      <input className="contact-input" type="text" placeholder="Adınız" required />
                    </div>
                    <div className="contact-field">
                      <label className="contact-label">Soyad</label>
                      <input className="contact-input" type="text" placeholder="Soyadınız" required />
                    </div>
                  </div>
                  <div className="contact-field">
                    <label className="contact-label">E-posta</label>
                    <input className="contact-input" type="email" placeholder="ornek@email.com" required />
                  </div>
                  <div className="contact-field">
                    <label className="contact-label">Konu</label>
                    <select className="contact-input" name="subject" required>
                      <option value="general">Genel Soru</option>
                      <option value="partnership">İş Birliği</option>
                      <option value="support">Teknik Destek</option>
                      <option value="other">Diğer</option>
                    </select>
                  </div>
                  <div className="contact-field contact-field-textarea">
                    <label className="contact-label">Mesaj</label>
                    <textarea
                      className="contact-textarea"
                      rows="5"
                      placeholder="Mesajınızı yazın..."
                      required
                      maxLength={maxLength}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <div className="contact-textarea-bar">
                      <div className="contact-textarea-counter">
                        <span>{message.length}</span> / {maxLength}
                      </div>
                      <div className="contact-textarea-bar-line">
                        <div
                          className="contact-textarea-bar-fill"
                          style={{ width: `${(message.length / maxLength) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className="contact-submit">
                    Mesaj Gönder
                    <span className="material-icons contact-submit-icon">send</span>
                  </button>
                </form>
              )}
            </div>

            <div className="contact-info">
              <div className="contact-info-card">
                <div className="contact-info-icon"><span className="material-icons">mail_outline</span></div>
                <h4>E-posta</h4>
                <p>info@prolance.ai</p>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon"><span className="material-icons">schedule</span></div>
                <h4>Yanıt Süresi</h4>
                <p>Genellikle 24 saat içinde</p>
              </div>
              <div className="contact-info-card">
                <div className="contact-info-icon"><span className="material-icons">chat_bubble_outline</span></div>
                <h4>Canlı Destek</h4>
                <p>Yakında aktif olacak</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
