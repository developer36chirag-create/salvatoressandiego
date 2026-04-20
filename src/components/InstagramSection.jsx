import './InstagramSection.css';

const INSTA_IMGS = [
  'https://images.unsplash.com/photo-1574966739987-65dd0f5be0c3?w=400&q=80&auto=format',
  'https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=400&q=80&auto=format',
  'https://images.unsplash.com/photo-1579631542720-3a87824fff86?w=400&q=80&auto=format',
  'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80&auto=format',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&q=80&auto=format',
];

export default function InstagramSection({ btnVariant = 'outline-ink' }) {
  return (
    <section className="instagram-section">
      <div className="wrap">
        <div className="insta-header r">
          <a
            href="https://www.instagram.com/salvatores_sd/"
            target="_blank"
            rel="noreferrer"
            className="insta-handle-link"
          >
            @salvatores_sd
          </a>
          <div className="eyebrow" style={{ justifyContent: 'center', marginBottom: '.75rem' }}>
            <span style={{ flex: '0 0 28px', height: '1px', background: 'var(--terra)', display: 'block' }} />
            Follow Us
            <span style={{ flex: '0 0 28px', height: '1px', background: 'var(--terra)', display: 'block' }} />
          </div>
          <h2 className="heading-lg" style={{ textAlign: 'center' }}>On Instagram</h2>
          <p style={{ fontFamily: 'var(--display)', fontStyle: 'italic', color: 'var(--mist)', marginTop: '.5rem', fontSize: '.95rem', textAlign: 'center' }}>
            HH 🍹 Mon–Fri 4–7pm · Sat &amp; Sun ☀️ Brunch 10am–3pm
          </p>
        </div>
      </div>

      <div className="insta-mosaic r">
        {INSTA_IMGS.map((src, i) => (
          <div className="insta-cell" key={i}>
            <img src={src} alt="" loading="lazy" />
            <div className="insta-over"><span className="insta-icon">♡</span></div>
          </div>
        ))}
      </div>

      <div className="insta-cta r">
        <a
          href="https://www.instagram.com/salvatores_sd/"
          target="_blank"
          rel="noreferrer"
          className="btn btn-outline-ink black-btn"
        >
          Follow on Instagram
        </a>
      </div>
    </section>
  );
}