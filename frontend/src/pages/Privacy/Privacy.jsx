import './Privacy.css';

function Privacy() {
  return (
    <div className="legal-page">
      <section className="legal-hero">
        <div className="legal-hero-content">
          <span className="legal-badge">'Yasal'</span>
          <h1 className="legal-title">'Gizlilik Politikası'</h1>
          <p className="legal-meta">'Son güncelleme: 1 Şubat 2026'</p>
        </div>
      </section>
      <section className="legal-content">
        <div className="legal-container">
          <div className="legal-body">
            <div className="legal-section">
              <h2>'1. Topladığımız Bilgiler'</h2>
              <p>
'Prolance olarak, bir hesap oluşturduğunuzda veya hizmetlerimizi kullandığınızda doğrudan sağladığınız bilgileri toplarız: adınız, e-posta adresiniz, ödeme bilgileriniz ve profil detaylarınız. Ayrıca çerezler ve benzer teknolojiler aracılığıyla cihazınız ve kullanım alışkanlıklarınız hakkında otomatik olarak belirli bilgiler toplarız.'              </p>
            </div>
            <div className="legal-section">
              <h2>'2. Bilgilerinizi Nasıl Kullanıyoruz'</h2>
              <p>'Toplanan bilgileri şu amaçlarla kullanırız:'</p>
              <ul>
                <li>'Platformumuzu ve hizmetlerimizi sunmak, sürdürmek ve iyileştirmek'</li>
                <li>'Escrow işlemlerini gerçekleştirmek ve ilgili bildirimleri göndermek'</li>
                <li>'Gönderilen fotoğraf ve video kanıtları üzerinden tamamlanan işi doğrulamak'</li>
                <li>'Dolandırıcılık veya yetkisiz faaliyetleri tespit etmek, araştırmak ve önlemek'</li>
                <li>'Profesyoneller ve müşteriler arasındaki teklif ve randevu sistemini kolaylaştırmak'</li>
                <li>'Ürünler, hizmetler ve etkinlikler hakkında sizinle iletişim kurmak'</li>
                <li>'Yasal yükümlülüklere uymak'</li>
              </ul>
            </div>
            <div className="legal-section">
              <h2>'3. İş Doğrulama ve Kanıtlar'</h2>
              <p>
'Escrow sürecimizin bir parçası olarak, profesyoneller tamamlanan işin fotoğraf ve video kanıtlarını yükler. Bu kanıtlar yalnızca anlaşılan işin tamamlandığını doğrulamak için kullanılır. Kanıtlar anlaşmazlık çözümü amacıyla saklanır ve işlem tamamen kapandıktan ve geçerli anlaşmazlık süresi dolduktan sonra silinir.'              </p>
            </div>
            <div className="legal-section">
              <h2>4. Veri Paylaşımı</h2>
              <p>
                Kişisel bilgilerinizi satmayız. Platformumuzu işletmemize, ödemeleri işlememize
                ve kullanımı analiz etmemize yardımcı olan güvenilir üçüncü taraf hizmet
                sağlayıcılarıyla bilgilerinizi paylaşabiliriz. Tüm üçüncü taraflar katı
                gizlilik sözleşmeleriyle bağlıdır.
              </p>
            </div>
            <div className="legal-section">
              <h2>5. Bize Ulaşın</h2>
              <p>
                Bu Gizlilik Politikası hakkında sorularınız varsa lütfen{' '}
                <a href="mailto:privacy@prolance.ai">privacy@prolance.ai</a> adresinden bize ulaşın.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Privacy;
