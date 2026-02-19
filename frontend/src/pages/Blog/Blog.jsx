import './Blog.css';

const posts = [
  {
    id: 1,
    category: 'Platform',
    title: 'Güvenli Escrow Her İşlemin İki Tarafını Nasıl Koruyor?',
    excerpt: 'Escrow sistemimizin ödemeleri nasıl güvenle tuttuğunu ve fotoğraf-video kanıtıyla doğrulanmış iş tamamlaması sonrası aktardığını öğrenin.',
    date: '10 Şubat 2026',
    readTime: '5 dk okuma',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDVjN7pbxWpTd8c2xiWbcV_NDPH9fKFJRBHXdHVEKSHILULrul0coxnyFrsD20OKTBGNyw6e903jMF5mPeWLeFeAtSy-u5X7ll2e05PMhOkrmc_BkYaB4UuWGmXClabo4wlLz0ZSYkbPzKyxnk2WrXpkYOurX96odE6OnhABrOH6HYZZpyiE4_9ZPerhkR0HftUOS3EQezi87Vm8QR9YQ2Oej60Chg4B1kJa0YDzHHakLVY43adUCwd3CE_aUBGOtcpqP0baUaIgFoV',
  },
  {
    id: 2,
    category: 'İpuçları',
    title: 'Profesyonel Olarak Teklif Sisteminden En İyi Şekilde Yararlanma',
    excerpt: 'Rekabetçi fiyat belirleme ile karşıt teklifleri yönetmeye kadar — uygulama içi pazarlık sistemimizle daha fazla anlaşma kapatmanıza yardımcı olacak ipuçları.',
    date: '3 Şubat 2026',
    readTime: '7 dk okuma',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCloAhJs_d-YRiAw8AMc16_s4i8ug-c2rnA42E7cn4nZgl4dV223S6IPpztk9BzZZgMub_IUx0Ld2y61L_XGIujAt0WeE7FV5HXC-2fQeSSuImWHLRGDLvk7I7CK1oJScZedmA8_usyzZEQGyosI2shLzpqUwlBVuUwdQQIJKGZ5pIxMyB7vsCDcfsHOht7K2ZjGOgXdPjc7T-IBrTyQXPqB6lOahoPKYB1NFagZaVPhuVW3uRi8VgT7quiwxWV6GwxiyKDv2AxYoJr',
  },
  {
    id: 3,
    category: 'Şirket Haberleri',
    title: 'Prolance ile Tanışın — Hizmet Bulmanın ve Ödemenin Güvenli Yolu',
    excerpt: 'Prolance\'ı hizmet işlerindeki güven sorununu çözmek için inşa ettik. İşte çift yönlü pazar yerimizi ve escrow sistemimizi farklı kılan şey.',
    date: '25 Ocak 2026',
    readTime: '4 dk okuma',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHPRJ1p5X7qnE6BXmAH35hPp7A_cKDohpbC_bv8mrsOCjxzIZSVDHtQBc-C0tjt6Z6OwppIllETDzNRJYpoPKeJci4Of-9bVfDC_1F6aLU97c-L-mTUkz92wHqTSxnoHbOk_Q9jTwApX5__DS5UgB53fT1YSV72JAzC5U0tJ4PTc0wNqWXD4HJEatPDRXLrBfXNZ4BHPnZ4xdJSpZmHXp8JNHYyvYY8WjWfiQnLU2KrEoFblyj84iyBsWhF7vnRSWnQHfzSaRzf5Kc',
  },
];

function Blog() {
  return (
    <div className="blog">
      <section className="blog-hero">
        <div className="blog-hero-content">
          <span className="blog-badge">Prolance Blog</span>
          <h1 className="blog-title">Haberler, Güncellemeler ve İpuçları</h1>
          <p className="blog-desc">
            Güvenli ödemeler, platform ipuçları ve ürün güncellemeleri hakkında en son bilgiler.
          </p>
        </div>
      </section>
      <section className="blog-grid-section">
        <div className="blog-container">
          <div className="blog-grid">
            {posts.map((post) => (
              <article key={post.id} className="blog-card">
                <div className="blog-card-img">
                  <img src={post.img} alt={post.title} />
                </div>
                <div className="blog-card-body">
                  <span className="blog-card-category">post.category</span>
                  <h3 className="blog-card-title">post.title</h3>
                  <p className="blog-card-excerpt">post.excerpt</p>
                  <div className="blog-card-meta">
                    <span>post.date</span>
                    <span className="blog-card-dot"></span>
                    <span>post.readTime</span>
                  </div>
                </div>
              </article>
            )          </div>
        </div>
      </section>
    </div>
  );
}

export default Blog;
