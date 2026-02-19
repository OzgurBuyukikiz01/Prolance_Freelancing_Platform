import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css';

function Pricing() {
  const [yearly, setYearly] = useState(false);

  const plans = [
    {
      tier: 'starter',
      name: 'Starter',
      price: 'Free',
      period: '',
      yearlyPrice: null,
      description: 'Tüm temel özelliklere erişin. Herhangi bir abonelik ücreti yok — sadece işlem başına komisyon.',
      commission: '%2 + ₺20 işlem komisyonu',
      features: [
        'Usta arama ve ilan oluşturma',
        'Uygulama içi teklif ve pazarlık',
        'Güvenli escrow ödeme koruması',
        'Fotoğraf & video iş doğrulama',
        'Randevu ve saat seçimi',
        'Topluluk desteği',
      ],
      cta: 'Ücretsiz Başla',
      featured: false,
      badge: null,
    },
    {
      tier: 'pro',
      name: 'Pro',
      price: '₺99',
      period: '/ay',
      yearlyPrice: '₺999',
      yearlyPeriod: '/yıl',
      yearlySaving: '₺189 tasarruf',
      description: 'Komisyon yok, öne çıkarma bonusu ve Pro rozeti ile fark yaratın.',
      commission: 'Komisyon yok — sadece ödeme aracı kesintisi',
      features: [
        'Starter\'daki tüm özellikler',
        'İşlem komisyonu yok (%2 + ₺20 kalkar)',
        'Haftalık 1 adet 24 saatlik ilan öne çıkarma',
        'Profilde Pro rozeti (mavi-beyaz ikon)',
      ],
      cta: 'Pro\'ya Geç',
      featured: true,
      badge: 'pro',
    },
    {
      tier: 'deluxe',
      name: 'Deluxe',
      price: '₺199',
      period: '/ay',
      yearlyPrice: '₺1.899',
      yearlyPeriod: '/yıl',
      yearlySaving: '₺489 tasarruf',
      description: 'Maksimum ayrıcalık: daha fazla öne çıkarma, indirim kuponları ve VIP destek.',
      commission: 'Komisyon yok — sadece ödeme aracı kesintisi',
      features: [
        'Pro\'daki tüm özellikler',
        'Haftalık 3 adet 24 saatlik ilan öne çıkarma',
        'Her 5 alışverişte ₺200 indirim kuponu',
        'Canlı destek sıra önceliği',
        'Profilde Deluxe rozeti (altın ikon)',
      ],
      cta: 'Deluxe\'a Geç',
      featured: false,
      badge: 'deluxe',
    },
  ];

  return (
    <div className="pricing">
      <section className="pricing-hero">
        <div className="pricing-hero-blob pricing-hero-blob-1"></div>
        <div className="pricing-hero-blob pricing-hero-blob-2"></div>
        <div className="pricing-hero-content">
          <span className="pricing-badge">Fiyatlandırma</span>
          <h1 className="pricing-title">
            İhtiyacına Uygun Plan,
            <br />
            <span className="pricing-title-accent">Net Fiyatlar.</span>
          </h1>
          <p className="pricing-desc">
            Ücretsiz başlayın, büyüdükçe yükseltin. Tüm planlarda güvenli escrow ödeme koruması standart olarak dahildir.
          </p>

          <div className="pricing-toggle-wrapper">
            <span className={`pricing-toggle-label ${!yearly ? 'active' : ''}`}>Aylık</span>
            <button
              className={`pricing-toggle ${yearly ? 'yearly' : ''}`}
              onClick={() => setYearly(!yearly)}
              aria-label="Aylık/Yıllık geçiş"
            >
              <div className="pricing-toggle-knob"></div>
            </button>
            <span className={`pricing-toggle-label ${yearly ? 'active' : ''}`}>
              Yıllık
              <span className="pricing-toggle-save">Tasarruf</span>
            </span>
          </div>
        </div>
      </section>

      <section className="pricing-cards-section">
        <div className="pricing-cards-container">
          <div className="pricing-cards">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`pricing-card ${plan.featured ? 'pricing-card-featured' : ''} ${plan.tier === 'deluxe' ? 'pricing-card-deluxe' : ''}`}
              >
                {plan.featured && <div className="pricing-popular-badge">En Popüler</div>}
                {plan.tier === 'deluxe' && <div className="pricing-popular-badge pricing-deluxe-badge">Premium</div>}

                <div className="pricing-card-header">
                  {plan.badge === 'pro' && (
                    <div className="pricing-badge-icon pricing-badge-pro">
                      <span className="material-icons">verified</span>
                    </div>
                  )}
                  {plan.badge === 'deluxe' && (
                    <div className="pricing-badge-icon pricing-badge-deluxe">
                      <span className="material-icons">workspace_premium</span>
                    </div>
                  )}
                  <h3 className="pricing-card-name">{plan.name}</h3>
                </div>

                <div className="pricing-card-price">
                  {plan.yearlyPrice && yearly ? (
                    <>
                      <span className="pricing-amount">{plan.yearlyPrice}</span>
                      <span className="pricing-period">{plan.yearlyPeriod}</span>
                    </>
                  ) : (
                    <>
                      <span className="pricing-amount">{plan.price}</span>
                      {plan.period && <span className="pricing-period">{plan.period}</span>}
                    </>
                  )}
                </div>

                {plan.yearlySaving && yearly && (
                  <div className="pricing-saving">{plan.yearlySaving}</div>
                )}

                <p className="pricing-card-desc">{plan.description}</p>

                <div className={`pricing-commission ${plan.tier === 'starter' ? 'pricing-commission-warn' : 'pricing-commission-ok'}`}>
                  <span className="material-icons pricing-commission-icon">
                    {plan.tier === 'starter' ? 'info' : 'check_circle'}
                  </span>
                  {plan.commission}
                </div>

                <ul className="pricing-features">
                  {plan.features.map((feat) => (
                    <li key={feat}>
                      <span className="material-icons pricing-check">check</span>
                      {feat}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`pricing-cta ${
                    plan.featured ? 'pricing-cta-primary' :
                    plan.tier === 'deluxe' ? 'pricing-cta-deluxe' :
                    'pricing-cta-outline'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing-faq-section">
        <div className="pricing-faq-container">
          <h2 className="pricing-faq-title">Sık Sorulan Sorular</h2>
          <div className="pricing-faq-grid">
            <div className="pricing-faq-item">
              <h4>İşlem komisyonu tam olarak ne?</h4>
              <p>
                Starter planda her ödeme tutarının %2&apos;si + ₺20 sabit ücret olarak platform
                kullanım bedeli alınır. Pro ve Deluxe planlarda bu komisyon tamamen kalkar,
                yalnızca ödeme aracının standart işlem kesintisi uygulanır.
              </p>
            </div>
            <div className="pricing-faq-item">
              <h4>İlan öne çıkarma nasıl çalışıyor?</h4>
              <p>
                Pro üyeler haftada 1, Deluxe üyeler haftada 3 kez &quot;işçi arıyorum&quot;
                ilanlarını 24 saatliğine öne çıkarabilir. Öne çıkan ilanlar arama sonuçlarında
                üst sıralarda gösterilir.
              </p>
            </div>
            <div className="pricing-faq-item">
              <h4>₺200 indirim kuponu nasıl kazanılır?</h4>
              <p>
                Deluxe üyeler her 5 başarılı alışveriş tamamladığında otomatik olarak ₺200
                değerinde indirim kuponu kazanır. Kupon bir sonraki alışverişte kullanılabilir.
              </p>
            </div>
            <div className="pricing-faq-item">
              <h4>Planlar arası geçiş yapabilir miyim?</h4>
              <p>
                Evet, istediğiniz zaman planınızı yükseltebilir veya düşürebilirsiniz. Yıllık
                plandan aylığa geçişlerde kalan süre için kıst hesaplaması yapılır.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
