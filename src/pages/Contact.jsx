import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import InstagramSection from '../components/InstagramSection';
import './Contact.css';

const RESERVE_URL =
  'https://www.opentable.com/r/salvatores-cucina-and-lounge-reservations-san-marcos?restref=1474873';

const TICKER_ITEMS = [
  'Get In Touch', 'Reserve a Table', 'Private Events',
  '(619) 380-2208', '750 Front St, San Diego',
  'Info@salvatoressandiego.com', 'Happy Hour Mon–Fri 4–7pm',
  'Get In Touch', 'Reserve a Table', 'Private Events',
  '(619) 380-2208', '750 Front St, San Diego',
  'Info@salvatoressandiego.com', 'Happy Hour Mon–Fri 4–7pm',
];

const HOURS_DAYS = [
  { name: 'Mon – Thu', time: '4:00 pm – 11:00 pm', badge: 'Dinner Service' },
  { name: 'Friday',    time: '4:00 PM – 12:00 AM', badge: 'Late Night' },
  { name: 'Saturday',  time: '10:00 AM – 12:00 AM', badge: 'Brunch + Dinner', special: true },
  { name: 'Sunday',    time: '10:00 AM – 11:00 PM', badge: 'Brunch + Dinner', special: true },
];

const REVIEWS = [
  {
    initials: 'EM', name: 'Edward Miller', source: 'via Google Reviews',
    text: '"This is a hidden gem amongst the Italian restaurants in San Diego. Their menu is diverse, service incredible and drinks delicious. You gotta try their pizza — I\'ve never had crust like this, it\'s got tiny bubbles throughout making it light, airy, soft, and utterly unique!"',
  },
  {
    initials: 'ST', name: 'Susan Tapert', source: 'via Google Reviews',
    text: '"A hidden Downtown SD gem, this is a fun place for birthdays, dates, brunch, and just hanging at the bar. Excellent service, food, and wine and liquor selections. I love their fried gnocchi and Brussels sprouts."',
  },
  {
    initials: 'AR', name: 'Anri Rogers', source: 'via Google Reviews',
    text: '"I had my birthday here and had such an amazing time. They customized a menu for me, had a belly dancer, a photographer and did the whole sign with Happy Birthday with fireworks. The food, service, and drinks were SO amazing."',
  },
];

/* ── Contact Form ── */
function ContactForm() {
  const [form, setForm] = useState({ fname: '', lname: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const update = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!form.fname.trim() || !form.email.trim()) {
      setError('Please fill in your name and email address to continue.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="form-success">
        <span className="success-icon">✦</span>
        <h4>Message Received</h4>
        <p>Thank you for reaching out. Our team will be in touch within 24 hours — we look forward to making your experience unforgettable.</p>
      </div>
    );
  }

  return (
    <>
      <div className="form-grid">
        <div className="field-wrap">
          <label className="field-label" htmlFor="fname">First Name</label>
          <input className="field-input" type="text" id="fname" name="fname" placeholder="Jane" value={form.fname} onChange={update} />
        </div>
        <div className="field-wrap">
          <label className="field-label" htmlFor="lname">Last Name</label>
          <input className="field-input" type="text" id="lname" name="lname" placeholder="Doe" value={form.lname} onChange={update} />
        </div>
        <div className="field-wrap">
          <label className="field-label" htmlFor="email">Email Address</label>
          <input className="field-input" type="email" id="email" name="email" placeholder="jane@email.com" value={form.email} onChange={update} />
        </div>
        <div className="field-wrap">
          <label className="field-label" htmlFor="phone">Phone Number</label>
          <input className="field-input" type="tel" id="phone" name="phone" placeholder="(619) 000-0000" value={form.phone} onChange={update} />
        </div>
        <div className="field-wrap form-full">
          <label className="field-label" htmlFor="subject">Subject</label>
          <select className="field-select" id="subject" name="subject" value={form.subject} onChange={update}>
            <option value="" disabled>What can we help with?</option>
            <option>Table Reservation</option>
            <option>Private Event Inquiry</option>
            <option>Menu Question</option>
            <option>General Inquiry</option>
            <option>Feedback</option>
            <option>Other</option>
          </select>
        </div>
        <div className="field-wrap form-full">
          <label className="field-label" htmlFor="message">Message</label>
          <textarea className="field-textarea" id="message" name="message" placeholder="Tell us how we can help you…" value={form.message} onChange={update} />
        </div>
        <div className="form-row-bottom form-full">
          {error && <p className="form-error">{error}</p>}
          <p className="form-note">We respond within 24 hours.</p>
          <button className="btn btn-terra btn-arrow" onClick={handleSubmit}>Send Message</button>
        </div>
      </div>
    </>
  );
}

/* ── Page ── */
export default function Contact() {
  useReveal();

  return (
    <>
      {/* ══ HERO ══ */}
      <section className="c-hero">
        <div className="c-hero-left">
          <div className="hero-num" aria-hidden="true">C</div>
          <div className="eyebrow hero-eyebrow">Marina District · San Diego</div>
          <h1 className="heading-xl hero-title">
            Get In<br />Touch<br /><span>With Us</span>
          </h1>
          <p className="hero-sub">
            Whether you're planning a special event, making a reservation, or simply have a
            question about our menu — our team is here to help make your experience unforgettable.
          </p>
          <div className="hero-btns">
            <a href="#contact-form-panel" className="btn btn-terra btn-arrow">Send a Message</a>
            <a href={RESERVE_URL} target="_blank" rel="noreferrer" className="btn btn-outline-light">
              Reserve a Table
            </a>
          </div>
          <div className="hero-loc">750 Front Street, Downtown San Diego</div>
        </div>

        <div className="c-hero-right">
          <img src="/menu-banner.avif" alt="Salvatore's dining room" />
          <div className="hero-scroll-cue">
            <div className="scroll-dot" />
            <span>Scroll</span>
          </div>
        </div>
      </section>

      {/* ══ TICKER ══ */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {TICKER_ITEMS.map((item, i) => (
            <span key={i} className="ticker-item">{item}</span>
          ))}
        </div>
      </div>

      {/* ══ CONTACT MAIN — split ══ */}
      <section className="contact-main" id="contact-form">
        {/* LEFT — info panel */}
        <div className="contact-info r-left">
          <div className="eyebrow">Reach Out</div>
          <h2 className="heading-lg">
            Reserve a Table<br /><em>or Private Event</em>
          </h2>
          <p>We'd love to hear from you. Reach out and let us make your experience unforgettable.</p>

          <div className="info-blocks">
            <div className="info-block">
              <div className="info-block-ico">📍</div>
              <div className="info-block-body">
                <div className="info-block-label">Location</div>
                <div className="info-block-val">
                  Salvatore's Cucina &amp; Lounge<br />
                  750 Front St, San Diego, CA 92101
                </div>
              </div>
            </div>
            <div className="info-block">
              <div className="info-block-ico">📞</div>
              <div className="info-block-body">
                <div className="info-block-label">Phone</div>
                <div className="info-block-val">
                  <a href="tel:6193802208">(619) 380-2208</a> — Restaurant<br />
                </div>
              </div>
            </div>
            <div className="info-block">
              <div className="info-block-ico">✉</div>
              <div className="info-block-body">
                <div className="info-block-label">Email</div>
                <div className="info-block-val">
                  <a href="mailto:Info@salvatoressandiego.com">Info@salvatoressandiego.com</a>
                </div>
              </div>
            </div>
            <div className="info-block">
              <div className="info-block-ico">🕓</div>
              <div className="info-block-body">
                <div className="info-block-label">Hours</div>
                <div className="info-block-val">
                  <table className="hours-table">
                    <tbody>
                      <tr><td>Mon – Thu</td><td>4:00 pm – 11:00 pm</td></tr>
                      <tr><td>Friday</td><td>4:00 PM – 12:00 AM</td></tr>
                      <tr><td>Saturday</td><td>10:00 AM – 12:00 AM</td></tr>
                      <tr><td>Sunday</td><td>10:00 AM – 11:00 PM</td></tr>
                      <tr className="hl"><td>Happy Hour</td><td>Mon–Fri, 4–7 PM</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="social-row">
            <a href="https://www.facebook.com/Salvatoressd/" target="_blank" rel="noreferrer" className="soc-btn">
              <span style={{ fontSize: '.8rem' }}>f</span> Facebook
            </a>
            <a href="https://www.instagram.com/salvatores_sd/" target="_blank" rel="noreferrer" className="soc-btn">
              <span style={{ fontSize: '.8rem' }}>◈</span> Instagram
            </a>
          </div>
        </div>

        {/* RIGHT — form panel */}
        <div className="contact-form-panel r-right" id="contact-form-panel">
          <div className="eyebrow">Send a Message</div>
          <h2 className="heading-lg">
            We're Here<br />
            <em style={{ fontFamily: 'var(--display)', fontStyle: 'italic', color: 'var(--terra)' }}>to Help</em>
          </h2>
          <p className="form-sub">Fill out the form below and our team will get back to you within 24 hours.</p>
          <ContactForm />
        </div>
      </section>

      {/* ══ MAP ══ */}
      <section className="find-us-section">
        <div className="find-us-bg" />
        <div className="find-us-inner">
          <div className="find-us-right r-right">
            <iframe
              className="map-embed"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3356.0!2d-117.1698!3d32.7143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9536f8b9b9b9b%3A0x0!2s750+Front+St%2C+San+Diego%2C+CA+92101!5e0!3m2!1sen!2sus!4v1700000000000"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Salvatore's location map"
            />
            <div className="map-caption">
              <span className="map-caption-text">750 Front St · Marina District · San Diego</span>
              <a
                href="https://www.google.com/maps/place/750+Front+St,+San+Diego,+CA+92101"
                target="_blank"
                rel="noreferrer"
                className="map-caption-link"
              >
                Open in Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ HOURS ══ */}
      <section className="hours-section">
        <div className="wrap">
          <div className="hours-intro r">
            <div className="hours-intro-left">
              <div className="eyebrow">When to Visit</div>
              <h2 className="heading-lg">
                Restaurant{' '}
                <em style={{ fontFamily: 'var(--display)', fontStyle: 'italic', color: 'var(--terra)' }}>Hours</em>
              </h2>
            </div>
            <p className="hours-intro-right">
              Open seven days a week — from weekday dinners to weekend brunches and everything in between.
            </p>
          </div>

          <div className="hours-grid r">
            {HOURS_DAYS.map(({ name, time, badge, special }) => (
              <div key={name} className={`hours-day${special ? ' hours-day--special' : ''}`}>
                <div className="hours-day-name">{name}</div>
                <div className="hours-day-time">{time}</div>
                <div className="hours-day-badge">{badge}</div>
              </div>
            ))}
          </div>

          <div className="hh-banner r">
            <div className="hh-banner-left">
              <span className="hh-banner-ico">🍹</span>
              <div className="hh-banner-text">
                <div className="hh-banner-title">Happy Hour</div>
                <div className="hh-banner-desc">Monday through Friday, 4:00 PM – 7:00 PM · Discounted drinks &amp; bites</div>
              </div>
            </div>
            <a
              href="/HAPPY-HOUR-MENU_cropped.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-terra btn-arrow"
            >
              View Happy Hour Menu
            </a>
          </div>
        </div>
      </section>

      {/* ══ REVIEWS ══ */}
      <section className="reviews-section">
        <div className="wrap">
          <div className="reviews-intro r">
            <div className="reviews-intro-left">
              <div className="eyebrow">What the City is Saying</div>
              <h2 className="heading-lg">
                Guest{' '}
                <em style={{ fontFamily: 'var(--display)', fontStyle: 'italic', color: 'rgba(212,121,90,.8)' }}>Impressions</em>
              </h2>
            </div>
            <a href="#" className="reviews-link">Read All Reviews</a>
          </div>

          <div className="reviews-grid r">
            {REVIEWS.map(({ initials, name, source, text }) => (
              <div className="review-card" key={name}>
                <div className="r-stars">{[...Array(5)].map((_, i) => <span key={i} className="r-star">★</span>)}</div>
                <p className="r-text">{text}</p>
                <div className="r-author">
                  <div className="r-avi">{initials}</div>
                  <div>
                    <div className="r-name">{name}</div>
                    <div className="r-src">{source}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ INSTAGRAM ══ */}
      <InstagramSection />
    </>
  );
}