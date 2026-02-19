import '../Privacy/Privacy.css';

function Terms() {
  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="legal-hero-content">
          <span className="legal-badge">Yasal</span>
          <h1 className="legal-title">Kullanım Koşulları</h1>
          <p className="legal-meta">Son güncelleme: 1 Şubat 2026</p>
        </div>
      </section>
      <section className="legal-content">
        <div className="legal-container">
          <div className="legal-body">
            <div className="legal-section">
              <h2>1. Koşulların Kabulü</h2>
              <p>
                Prolance platformuna erişerek veya kullanarak bu Kullanım Koşullarına bağlı
                olmayı kabul edersiniz. Tüm koşulları kabul etmiyorsanız hizmetlerimize
                erişemez veya kullanamazsınız.
              </p>
            </div>
            <div className="legal-section">
              <h2>'2. Platform Hizmetleri'</h2>
              <p>
'Prolance, hizmet profesyonellerini müşterilerle buluşturan çift yönlü bir pazar yeri sunar. Profesyoneller hizmet ilanları açabilir, müşteriler ise iş etiketleri ve bütçe filtreleri kullanarak profesyonel arayabilir. Uygulama içi teklif sistemiyle iletişimi ve escrow ile güvenli ödemeleri kolaylaştırırız. Profesyoneller ve müşteriler arasındaki hizmet sözleşmelerinin tarafı değiliz, aracı olarak hareket ederiz.'              </p>
            </div>
            <div className="legal-section">
              <h2>'3. Teklif ve Pazarlık Sistemi'</h2>
              <p>
'Tüm fiyat pazarlıkları, teklif sistemimiz kullanılarak platform içinde gerçekleşmelidir. Müşteriler profesyonellere teklif gönderir, profesyoneller kabul edebilir veya karşıt teklif gönderebilir. Pazarlıkları veya ödemeleri platform dışına taşımak yasaktır ve Prolance tarafından sağlanan tüm korumaları geçersiz kılar.'              </p>
            </div>
            <div className="legal-section">
              <h2>4. Ödemeler ve Escrow</h2>
              <p>
                Platformdaki tüm ödemeler güvenli escrow sistemimiz üzerinden işlenir.
                Müşteri ve profesyonel fiyat ve takvim üzerinde anlaştıktan sonra müşteri
                ödemeyi yapar ve tutar escrow&apos;da tutulur. Ödeme profesyonele ancak iş
                tamamlandıktan, kanıt gönderildikten (fotoğraf ve video) ve müşteri
                sonucu onayladıktan sonra aktarılır.
              </p>
              <ul>
                <li>Starter hesaplar: İşlem başına %2 + ₺20 platform komisyonu</li>
                <li>Pro ve Deluxe hesaplar: Platform komisyonu yok — yalnızca ödeme aracı işlem kesintisi uygulanır</li>
                <li>Pro (aylık ₺99) ve Deluxe (aylık ₺199) planlar için abonelik ücreti uygulanır</li>
                <li>Müşteriler iş tamamlandıktan sonra onay veya iade talebi açmak için 24 saate sahiptir</li>
                <li>24 saat içinde işlem yapılmazsa otomatik onay gerçekleşir ve ödeme aktarılır</li>
              </ul>
            </div>
            <div className="legal-section">
              <h2>5. İş Doğrulama</h2>
              <p>
                Hizmet tamamlandığında profesyonel, tamamlanan işin fotoğraf ve video kanıtını
                göndermek zorundadır. Bu kanıt, işin anlaşılan kapsama uygun olduğunu doğrulamak
                için incelenir. Bu süreç her iki tarafı da anlaşmazlıklardan korur ve adil
                işlemler sağlar.
              </p>
            </div>
            <div className="legal-section">
              <h2>'6. Anlaşmazlık Çözümü'</h2>
              <p>
'Anlaşmazlık durumunda destek ekibimiz gönderilen kanıtları, iletişim geçmişini ve teklif detaylarını inceler. Kararlar her iki tarafa da bildirilir ve 14 gün içinde itiraz edilmediği sürece bağlayıcıdır.'              </p>
            </div>
            <div className="legal-section">
              <h2>'7. İletişim'</h2>
              <p>
'Bu Koşullar hakkında sorularınız için lütfen'{' '}
                <a href="mailto:legal@prolance.ai">legal@prolance.ai</a>{' '}
'adresinden bize ulaşın.'              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Terms;
