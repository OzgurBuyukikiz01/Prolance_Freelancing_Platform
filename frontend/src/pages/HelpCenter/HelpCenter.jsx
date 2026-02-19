import { useState } from 'react';
import { Link } from 'react-router-dom';
import './HelpCenter.css';

const faqData = [
  // ===== Genel =====
  {
    id: 1,
    category: 'Genel',
    question: 'Prolance nedir?',
    answer:
      'Prolance, hizmet profesyonellerini müşterilerle buluşturan güvenli bir pazar yeridir. Ustalar ve işletmeler ilan açarak müşterilere ulaşabilir; müşteriler ise iş etiketleri ve bütçeye göre arama yaparak ihtiyaçlarına uygun profesyoneli bulabilir. Tüm ödemeler escrow sistemiyle korunur.',
  },
  {
    id: 2,
    category: 'Genel',
    question: 'Platformu kullanmak için ne gerekiyor?',
    answer:
      'Bir e-posta adresi ve telefon numarasıyla ücretsiz hesap oluşturabilirsiniz. Profesyonel olarak hizmet vermek istiyorsanız profil bilgilerinizi ve hizmet alanlarınızı doldurmanız yeterlidir. Müşteri olarak ise hemen usta aramaya başlayabilirsiniz.',
  },
  {
    id: 3,
    category: 'Genel',
    question: 'Prolance\'ı kimler kullanabilir?',
    answer:
      'Bireysel profesyoneller, şahıs şirketleri, küçük işletmeler ve hizmet arayan tüm müşteriler kullanabilir. Tesisatçıdan grafik tasarımcıya, boyacıdan yazılımcıya kadar geniş bir yelpazede hizmet verilebilir.',
  },
  {
    id: 4,
    category: 'Genel',
    question: 'Hesap oluşturmak ücretli mi?',
    answer:
      'Hayır, hesap oluşturmak tamamen ücretsizdir. Starter planda herhangi bir abonelik ücreti yoktur — yalnızca işlem gerçekleştirdiğinizde %2 + ₺20 komisyon uygulanır. Daha avantajlı koşullar için Pro veya Deluxe planlarımızı inceleyebilirsiniz.',
  },
  {
    id: 5,
    category: 'Genel',
    question: 'Mobil uygulama var mı?',
    answer:
      'Mobil uygulamamız şu anda geliştirme aşamasındadır. Lansman sonrası iOS ve Android için kullanıma sunulacaktır. Şu an web tarayıcı üzerinden mobil uyumlu şekilde platformu kullanabilirsiniz.',
  },

  // ===== Ödemeler =====
  {
    id: 6,
    category: 'Ödemeler',
    question: 'Güvenli ödeme (escrow) sistemi nasıl çalışıyor?',
    answer:
      'Uygulama içi teklif sistemiyle fiyat konusunda anlaştığınızda ödemeniz escrow\'da tutulur — profesyonele hemen gönderilmez. İş tamamlandıktan sonra profesyonel fotoğraf ve video kanıtı gönderir. Ekibimiz kanıtları doğrulayıp siz de onayladıktan sonra ödeme profesyonele aktarılır.',
  },
  {
    id: 7,
    category: 'Ödemeler',
    question: 'Platform ücretleri nedir?',
    answer:
      'Ücretsiz Starter planında işlem başına %2 + ₺20 komisyon alınır. Pro plan (aylık ₺99 veya yıllık ₺999) bu komisyonu kaldırır — sadece ödeme aracının kesintisini ödersiniz. Deluxe plan (aylık ₺199 veya yıllık ₺1.899) Pro\'nun tüm avantajlarına ek olarak indirim kuponları ve daha fazla öne çıkarma sunar.',
  },
  {
    id: 8,
    category: 'Ödemeler',
    question: 'Ödeme yaptıktan sonra iptal edebilir miyim?',
    answer:
      'İş başlamadan önce ödemeyi iptal edip tam iade alabilirsiniz. İş başladıktan sonra iptal talebi açarsanız duruma göre destek ekibimiz değerlendirme yapar. İş tamamlandıktan sonra ise 24 saatlik onay süreniz içinde iade talebi açabilirsiniz.',
  },
  {
    id: 9,
    category: 'Ödemeler',
    question: 'İade süreci ne kadar sürüyor?',
    answer:
      'İade onaylandıktan sonra ödeme aracının işlem süresine bağlı olarak genellikle 3-7 iş günü içinde tutarınız iade edilir. İade durumunu uygulama üzerinden takip edebilirsiniz.',
  },
  {
    id: 10,
    category: 'Ödemeler',
    question: 'Hangi ödeme yöntemlerini kabul ediyorsunuz?',
    answer:
      'Kredi kartı, banka kartı ve banka havalesi ile ödeme yapabilirsiniz. Desteklenen ödeme yöntemleri ödeme adımında size gösterilecektir.',
  },
  {
    id: 11,
    category: 'Ödemeler',
    question: 'Escrow\'da tutulan param güvende mi?',
    answer:
      'Evet. Escrow\'daki tutarlar güvenli ödeme altyapımız üzerinden korunur ve hiçbir şekilde profesyonele veya üçüncü tarafa aktarılmaz — ta ki iş doğrulanıp siz onay verene kadar. 24 saat içinde onay veya iade açmazsanız otomatik onay devreye girer.',
  },
  {
    id: 12,
    category: 'Ödemeler',
    question: 'Otomatik onay ne demek?',
    answer:
      'İş tamamlandıktan ve kanıtlar gönderildikten sonra müşterinin 24 saati vardır. Bu sürede onay vermez veya iade talebi açmazsanız sistem otomatik olarak ödemeyi onaylar ve para profesyonele aktarılır. Bu sistem her iki tarafın da sürecin uzamasından etkilenmemesini sağlar.',
  },

  // ===== Randevu =====
  {
    id: 13,
    category: 'Randevu',
    question: 'Bir profesyonele nasıl randevu alırım?',
    answer:
      'Teklif sistemiyle fiyatta anlaştıktan sonra profesyonelin müsait zaman dilimlerini görürsünüz — takvimlerini ve mola aralıklarını kendileri belirler. Size uygun tarih ve saati seçip ödemeye geçersiniz. Ödeme sonrası tutar escrow\'da tutulur.',
  },
  {
    id: 14,
    category: 'Randevu',
    question: 'Randevumu iptal edebilir miyim?',
    answer:
      'Evet, randevu saatinden makul bir süre önce iptal edebilirsiniz. İptal politikası profesyonelin belirlediği koşullara göre değişebilir. Erken iptal durumunda genellikle tam iade yapılır.',
  },
  {
    id: 15,
    category: 'Randevu',
    question: 'Randevu saatini değiştirebilir miyim?',
    answer:
      'Profesyonelin müsaitlik durumuna bağlı olarak randevunuzu yeniden planlayabilirsiniz. Değişiklik talebi profesyonele bildirilir ve onayı alındıktan sonra yeni saat geçerli olur.',
  },
  {
    id: 16,
    category: 'Randevu',
    question: 'Profesyonel randevuya gelmezse ne olur?',
    answer:
      'Profesyonel randevuya gelmezse veya işi yapmadan ayrılırsa escrow\'daki ödemeniz korunmaya devam eder. Destek ekibimize durumu bildirmeniz yeterlidir — inceleme sonrası tam iade yapılır ve profesyonelin değerlendirmesi buna göre güncellenir.',
  },
  {
    id: 17,
    category: 'Randevu',
    question: 'Acil bir iş için aynı gün randevu alabilir miyim?',
    answer:
      'Profesyonelin o günkü müsaitlik durumuna bağlıdır. Takviminde uygun saat varsa aynı gün randevu alabilirsiniz. Acil iş filtreleri ileride eklenecek özellikler arasındadır.',
  },

  // ===== Profesyoneller İçin =====
  {
    id: 18,
    category: 'Profesyoneller İçin',
    question: 'Profesyonel olarak nasıl kayıt olurum?',
    answer:
      'Ücretsiz hesap oluşturduktan sonra profilinizi tamamlayın, hizmet alanlarınızı seçin ve müsaitlik takviminizi ayarlayın. Ardından ilan oluşturarak müşterilere ulaşmaya başlayabilirsiniz.',
  },
  {
    id: 19,
    category: 'Profesyoneller İçin',
    question: 'Teklif sistemi nasıl çalışıyor?',
    answer:
      'Müşteri size bir teklif gönderir, siz kabul edebilir veya karşıt teklif ile pazarlık yapabilirsiniz. Bu süreç iki taraf da anlaşana kadar devam eder. Tüm iletişim platform üzerinde tutularak her iki tarafın güvenliği sağlanır.',
  },
  {
    id: 20,
    category: 'Profesyoneller İçin',
    question: 'Müsaitlik takvimimi nasıl ayarlarım?',
    answer:
      'Profil ayarlarınızdan çalışma günlerinizi, saat aralıklarınızı ve işler arası mola sürelerinizi belirleyebilirsiniz. İster 30 dakikalık ister 1 saatlik aralıklar tanımlayabilirsiniz — tamamen sizin insiyatifinizdedir.',
  },
  {
    id: 21,
    category: 'Profesyoneller İçin',
    question: 'Tamamlanan işi nasıl belgelerim?',
    answer:
      'İş bittikten sonra tamamlanan işin fotoğraf ve video kanıtını uygulama üzerinden yüklersiniz. Bu kanıtlar ekibimiz tarafından incelenir. Doğrulama ve müşteri onayı sonrası ödemeniz aktarılır.',
  },
  {
    id: 22,
    category: 'Profesyoneller İçin',
    question: 'Kazancımı ne zaman çekebilirim?',
    answer:
      'Müşteri onayı veya 24 saatlik otomatik onay sonrası kazancınız bakiyenize eklenir. Bakiyenizi istediğiniz zaman banka hesabınıza çekebilirsiniz. Çekim süresi ödeme aracına bağlı olarak 1-3 iş günü sürebilir.',
  },
  {
    id: 23,
    category: 'Profesyoneller İçin',
    question: 'Birden fazla hizmet kategorisinde ilan açabilir miyim?',
    answer:
      'Evet, uzmanlık alanlarınıza göre birden fazla kategoride ilan oluşturabilirsiniz. Her ilan için ayrı fiyatlandırma ve açıklama tanımlayabilirsiniz.',
  },
  {
    id: 24,
    category: 'Profesyoneller İçin',
    question: 'İlan öne çıkarma nasıl çalışıyor?',
    answer:
      'Pro üyeler haftada 1, Deluxe üyeler haftada 3 kez ilanlarını 24 saatliğine öne çıkarabilir. Öne çıkan ilanlar arama sonuçlarında üst sıralarda gösterilir ve daha fazla müşteriye ulaşmanızı sağlar.',
  },

  // ===== Güvenlik =====
  {
    id: 25,
    category: 'Güvenlik',
    question: 'Kişisel bilgilerim güvende mi?',
    answer:
      'Evet. Tüm kişisel ve finansal verileriniz endüstri standardı şifreleme ile korunur. Bilgilerinizi üçüncü taraflarla satmayız. Detaylar için Gizlilik Politikamızı inceleyebilirsiniz.',
  },
  {
    id: 26,
    category: 'Güvenlik',
    question: 'Platform dışında ödeme yapmam istense ne yapmalıyım?',
    answer:
      'Kesinlikle platform dışı ödeme yapmayın. Prolance\'ın escrow koruması yalnızca uygulama üzerinden yapılan ödemeler için geçerlidir. Platform dışına çıkmanız istendiyse bu durumu destek ekibimize bildirin.',
  },
  {
    id: 27,
    category: 'Güvenlik',
    question: 'İşle ilgili bir sorun olursa ne olur?',
    answer:
      'İş tamamlandıktan sonra 24 saat içinde iade talebi açabilirsiniz. Destek ekibimiz fotoğraf ve video kanıtlarını, iletişim geçmişini ve teklif detaylarını inceleyerek adil bir çözüme ulaşır.',
  },
  {
    id: 28,
    category: 'Güvenlik',
    question: 'Sahte veya güvenilmez profilleri nasıl tespit ediyorsunuz?',
    answer:
      'Kullanıcı kayıtlarını ve profil bilgilerini doğrulama sürecinden geçiriyoruz. Şüpheli davranışlar tespit edildiğinde hesaplar incelemeye alınır. Ayrıca kullanıcı değerlendirme ve yorum sistemi de güvenilirlik konusunda şeffaflık sağlar.',
  },
  {
    id: 29,
    category: 'Güvenlik',
    question: 'Dolandırıcılığa karşı nasıl korunuyorum?',
    answer:
      'Escrow sistemi en büyük korumadır — paranız iş doğrulanana kadar güvende tutulur. Buna ek olarak tüm anlaşmalar platform üzerinde kayıt altında tutulur, fotoğraf ve video kanıt sistemiyle iş doğrulanır ve anlaşmazlık durumunda destek ekibimiz devreye girer.',
  },
];

const categories = ['Tümü', 'Genel', 'Ödemeler', 'Randevu', 'Profesyoneller İçin', 'Güvenlik'];

function HelpCenter() {
  const [activeCategory, setActiveCategory] = useState('Tümü');
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const filteredFaqs = activeCategory === 'Tümü'
    ? faqData
    : faqData.filter((faq) => faq.category === activeCategory);

  return (
    <div className="help-center">
      <div className="help-hero">
        <div className="help-hero-blob help-hero-blob-right"></div>
        <div className="help-hero-blob help-hero-blob-left"></div>
        <div className="help-hero-content">
          <div className="help-hero-badge">
            <span>Prolance Yardım Merkezi</span>
          </div>
          <h1 className="help-hero-title">
            Size nasıl <span className="help-hero-title-accent">yardımcı</span> olabiliriz?
          </h1>
          <p className="help-hero-desc">
            Ödemeler, randevu, escrow koruması ve platform kullanımı hakkında cevaplar bulun.
          </p>
        </div>
      </div>

      <div className="help-content">
        <div className="help-grid">
          <div className="help-main">
            <div className="help-tabs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`help-tab ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => { setActiveCategory(cat); setOpenFaq(null); }}
                >
                  {cat}
                  {cat !== 'Tümü' && (
                    <span className="help-tab-count">
                      {faqData.filter((f) => f.category === cat).length}
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="faq-list">
              <h2 className="faq-list-title">
                <span className="faq-title-accent"></span>
                {activeCategory === 'Tümü' ? 'Tüm Sorular' : activeCategory}
                <span className="faq-count">{filteredFaqs.length} soru</span>
              </h2>

              {filteredFaqs.map((faq) => (
                <div key={faq.id} className={`faq-item ${openFaq === faq.id ? 'open' : ''}`}>
                  <button className="faq-question" onClick={() => toggleFaq(faq.id)}>
                    <div className="faq-question-left">
                      <span className="faq-category-dot" data-category={faq.category}></span>
                      <h3 className="faq-question-text">{faq.question}</h3>
                    </div>
                    <span className={`material-icons faq-arrow ${openFaq === faq.id ? 'rotated' : ''}`}>
                      expand_more
                    </span>
                  </button>
                  {openFaq === faq.id && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="help-quick-links">
              <Link to="/terms" className="help-quick-link">
                <div className="help-quick-link-icon">
                  <span className="material-icons">gavel</span>
                </div>
                <h4 className="help-quick-link-title">Politikalar ve Koşullar</h4>
                <p className="help-quick-link-desc">Kullanıcı sözleşmelerimiz hakkında detaylı bilgi.</p>
              </Link>
              <Link to="/security" className="help-quick-link">
                <div className="help-quick-link-icon">
                  <span className="material-icons">shield</span>
                </div>
                <h4 className="help-quick-link-title">Ödeme Güvenliği</h4>
                <p className="help-quick-link-desc">Escrow sistemimizin her işlemi nasıl koruduğunu öğrenin.</p>
              </Link>
            </div>
          </div>

          <div className="help-sidebar">
            <div className="help-sidebar-sticky">
              <div className="support-card">
                <div className="support-card-blob"></div>
                <div className="support-card-inner">
                  <div className="support-avatar-wrapper">
                    <div className="support-avatar-ring">
                      <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCL5w81wZxSslG968o4aSkkyg0xC1q71jJ1TcZ5S7gpXIvIdm9nWNW-Zgkb7cK0M96mxiaVLZSCXPDBB4djs2BkMf2c40XQ-4obYWDTcOA6WSyVtxDOY8--3xf8_H_0zRJIC9Q-pyXsG4PkjmFYEC6y6_LVDUtLBCpwprBtraMngdnCBnASFB6iUvX8jbdNuY1u-QsxjibDkKlKefYEspzPLji6JXyLxjoQCuVArgg5IgvhbvoWx8cvwz0nIpbdzblu3DXrfbCwF7fV"
                        alt="Destek ekibi"
                        className="support-avatar"
                      />
                    </div>
                  </div>
                  <h3 className="support-title">Hâlâ yardıma mı ihtiyacınız var?</h3>
                  <p className="support-desc">
                    Destek ekibimiz platform hakkındaki tüm sorularınızda yardımcı olmak için burada.
                  </p>
                  <Link to="/contact" className="support-btn-primary">Bize Ulaşın</Link>
                  <Link to="/contact" className="support-btn-secondary">
                    <span className="material-icons support-btn-icon">mail_outline</span>
                    E-posta Desteği
                  </Link>
                  <div className="support-status">
                    <span className="support-status-dot animate-pulse"></span>
                    <span>Genellikle birkaç saat içinde yanıt veririz</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpCenter;
