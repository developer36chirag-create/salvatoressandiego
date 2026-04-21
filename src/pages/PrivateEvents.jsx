import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import InstagramSection from '../components/InstagramSection';
import './PrivateEvents.css';

const TICKER_ITEMS = [
  'The Medusa Room', '40–65 Guests', '4-Course Dining',
  'Open Bar Available', 'Birthdays & Celebrations', 'Corporate Events', 'Engagements', 'Baby Showers',
  'The Medusa Room', '40–65 Guests', '4-Course Dining',
  'Open Bar Available', 'Birthdays & Celebrations', 'Corporate Events',
];

const ROOM_STATS = [
  { num: '65', lbl: 'Max Guests' },
  { num: '4h', lbl: 'Event Time' },
  { num: '4★', lbl: 'Google Rating' },
];

const ROOM_FEATURES = [
  { ico: '🎭', lbl: 'Exclusive Medusa Room Access' },
  { ico: '🍽️', lbl: '4-Course Custom Menu' },
  { ico: '🍾', lbl: 'Open Bar (Well Drinks) First Hour' },
  { ico: '🎶', lbl: 'Full Speaker & Music Access' },
];

const PKG_INCLUSIONS = [
  'Private access to the Medusa Room',
  '4-course meal for up to 25 guests',
  'Open bar (well drinks) for the first hour',
  'Full speaker & music access',
  '4-hour private event experience',
  'Dedicated event coordinator',
];

const OCCASIONS = [
  { icon: '🎂', title: 'Birthday Celebrations', desc: "Mark another year with an unforgettable dinner. We'll customize the menu, set the mood, and make the night all about you." },
  { icon: '💍', title: 'Engagements', desc: 'Pop the question or celebrate your engagement in the most romantic setting downtown San Diego has to offer.' },
  { icon: '🍼', title: 'Baby Showers', desc: "Welcome new life with style. Our team will craft an elegant, personalized experience for the guest of honor and all their loved ones." },
  { icon: '💼', title: 'Corporate Events', desc: 'Impress clients and reward your team. Our private dining room is the ideal setting for business dinners and corporate celebrations.' },
  { icon: '🎓', title: 'Graduations', desc: 'Toast to new beginnings with family and friends. A proper celebration deserves a proper setting — and we deliver on every detail.' },
  { icon: '✨', title: 'Special Gatherings', desc: "No occasion is too big or too small. If you want to bring people together for an exceptional experience, we'll make it happen." },
];

const CONTACT_DETAILS = [
  { ico: '📍', text: '750 Front St, San Diego, CA 92101' },
  { ico: '📞', text: <><a href="tel:8584218870">(858) 421-8870</a> — Events Line</> },
  { ico: '📞', text: <><a href="tel:6193802208">(619) 380-2208</a> — Restaurant</> },
  { ico: '🕓', text: 'Events available 7 days a week · Private access from $3,000' },
];

/* ── Event inquiry form ── */
function EventForm() {
  const [form, setForm] = useState({ fname: '', lname: '', email: '', phone: '', eventType: '', guests: '', date: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const update = (e) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = () => {
    if (!form.fname.trim() || !form.email.trim()) {
      setError('Please fill in your name and email address.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="form-success">
        <span className="success-icon">✦</span>
        <h4>Thank You!</h4>
        <p>Your inquiry has been received. Our events team will be in touch within 24 hours to help bring your vision to life.</p>
      </div>
    );
  }

  return (
    <div className="form-grid" id="eventForm">
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
      <div className="field-wrap">
        <label className="field-label" htmlFor="eventType">Event Type</label>
        <select className="field-select" id="eventType" name="eventType" value={form.eventType} onChange={update}>
          <option value="" disabled>Select an occasion</option>
          <option>Birthday Celebration</option>
          <option>Engagement</option>
          <option>Baby Shower</option>
          <option>Corporate Event</option>
          <option>Graduation</option>
          <option>Anniversary</option>
          <option>Other</option>
        </select>
      </div>
      <div className="field-wrap">
        <label className="field-label" htmlFor="guests">Number of Guests</label>
        <select className="field-select" id="guests" name="guests" value={form.guests} onChange={update}>
          <option value="" disabled>Estimated guest count</option>
          <option>Up to 20</option>
          <option>21 – 35</option>
          <option>36 – 50</option>
          <option>51 – 65</option>
        </select>
      </div>
      <div className="field-wrap form-full">
        <label className="field-label" htmlFor="date">Preferred Date</label>
        <input className="field-input" type="text" id="date" name="date" placeholder="e.g. Saturday, June 14th 2025" value={form.date} onChange={update} />
      </div>
      <div className="field-wrap form-full">
        <label className="field-label" htmlFor="message">Tell Us About Your Event</label>
        <textarea className="field-textarea" id="message" name="message" placeholder="Share any special requests, themes, or questions you have for us…" value={form.message} onChange={update} />
      </div>
      <div className="form-submit-row form-full">
        {error && <p className="form-error">{error}</p>}
        <p className="form-note">We'll respond within 24 hours.</p>
        <button className="btn btn-terra btn-arrow" onClick={handleSubmit}>Send Inquiry</button>
      </div>
    </div>
  );
}

/* ── Page ── */
export default function PrivateEvents() {
  useReveal();

  return (
    <>
      {/* ══ HERO ══ */}
      <section className="pe-hero">
        <div className="pe-hero-left">
          <div className="hero-num" aria-hidden="true">E</div>
          <div className="eyebrow hero-eyebrow">Marina District · San Diego</div>
          <h1 className="heading-xl hero-title">
            Celebrate<br />In<br /><span>Style</span>
          </h1>
          <p className="hero-sub">
            Salvatore's exclusive Medusa Room is San Diego's most intimate private event space —
            where bold Italian cuisine meets a curated lounge atmosphere for moments worth remembering.
          </p>
          <div className="hero-btns">
            <a href="/contact" className="btn btn-terra btn-arrow">Inquire Now</a>
            <a href="https://www.opentable.com/booking/restref/availability?correlationId=874f1d76-3fb9-4bd1-baf2-180bb617f4cc&restRef=1474873" className="btn btn-outline-light">View Package</a>
          </div>
          <div className="hero-loc">Private Events at 750 Front Street</div>
        </div>

        <div className="pe-hero-right">
          <img
            src="/RfbpW-zE.JPG.jpg"
            alt="Private dining room at Salvatore's"
          />
          <div className="hero-badge">
            <div className="hero-badge-inner">
              <strong>40–65</strong>
              <span>Guests<br />Capacity</span>
            </div>
          </div>
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

      {/* ══ THE ROOM ══ */}
      <section className="room-section">
        <div className="room-visual r-left">
          <img
            src="/DSC07164-scaled.jpg"
            alt="The Medusa Room at Salvatore's"
          />
          <div className="room-visual-num" aria-hidden="true">M</div>
          <div className="room-tag">The Medusa Room</div>
        </div>

        <div className="room-text r-right">
          <div className="eyebrow">Step Inside</div>
          <h2 className="heading-lg">
            Fascinate<br /><em>Your Guests</em>
          </h2>
          <p>
            Step into Salvatore's San Diego and astound your guests with a one-of-a-kind experience.
            Our exclusive private room offers an elegant collection of fine detail décor, making it
            truly unique among event spaces in town.
          </p>
          <p>
            We offer a wide variety of options to customize your food and drink menu, so you can plan
            the perfect event — whether it's an intimate dinner party or a large-scale celebration.
            Everything is in one place.
          </p>

          <div className="room-stats">
            {ROOM_STATS.map(({ num, lbl }) => (
              <div key={lbl} className="stat-item">
                <div className="stat-num">{num}</div>
                <div className="stat-lbl">{lbl}</div>
              </div>
            ))}
          </div>

          <div className="room-features">
            {ROOM_FEATURES.map(({ ico, lbl }) => (
              <div key={lbl} className="room-feat">
                <div className="feat-ico">{ico}</div>
                <div className="feat-lbl">{lbl}</div>
              </div>
            ))}
          </div>

          <a href="/contact" className="btn btn-terra btn-arrow" style={{ marginTop: '2.5rem' }}>
            Book the Medusa Room
          </a>
        </div>
      </section>

      {/* ══ PACKAGE ══ */}
      <section className="package-section" id="package">
        <div className="package-bg" />
        <div className="package-inner">
          <div className="package-left r-left">
            <div className="tag">Step Into Salvatore's</div>
            <h2 className="heading-lg">
              Private Events<br /><em>Now Available</em>
            </h2>
            <p>
              Host your perfect celebration with us. From intimate birthday dinners to lavish gatherings,
              our exclusive Medusa Room delivers an unforgettable experience — fully curated for you.
              Our team handles every detail so you can focus on the moment.
            </p>
            <a href="/contact" className="btn btn-terra btn-arrow">Inquire About Your Event</a>
          </div>

          <div className="package-right r-right">
            <div className="pkg-card">
              <div className="pkg-price"><sup>$</sup>3,000</div>
              <p className="pkg-desc">
                A completely hands-free private event experience — designed for you and your guests.
              </p>
              <ul className="pkg-list">
                {PKG_INCLUSIONS.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <a href="https://www.opentable.com/r/salvatores-cucina-and-lounge-reservations-san-marcos?restref=1474873" className="btn btn-outline-light">Book This Package</a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ OCCASIONS ══ */}
      <section className="occasions-section">
        <div className="wrap">
          <div className="occasions-intro r">
            <div className="occasions-intro-left">
              <div className="eyebrow">Every Reason to Celebrate</div>
              <h2 className="heading-lg">
                Perfect For{' '}
                <em style={{ fontFamily: 'var(--display)', fontStyle: 'italic', color: 'rgba(212,121,90,.8)' }}>
                  Every Occasion
                </em>
              </h2>
            </div>
            <p className="occasions-intro-right">
              Whether the occasion is personal or professional, the Medusa Room adapts to make every
              celebration extraordinary.
            </p>
          </div>

          <div className="occasions-grid r">
            {OCCASIONS.map(({ icon, title, desc }) => (
              <div key={title} className="occ-card">
                <span className="occ-icon">{icon}</span>
                <div className="occ-title">{title}</div>
                <p className="occ-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ══ INQUIRY FORM ══ */}
      <section className="contact-section" id="inquiry">
        <div className="contact-left r-left">
          <div className="eyebrow">Let's Make It Happen</div>
          <h2 className="heading-lg">
            Host an<br /><em>Unforgettable Evening</em>
          </h2>
          <p>
            Ready to start planning? Fill out the inquiry form and our events team will get back to
            you within 24 hours to discuss your vision, customize your package, and lock in your date.
          </p>
          <div className="contact-details">
            {CONTACT_DETAILS.map(({ ico, text }, i) => (
              <div key={i} className="contact-detail">
                <div className="contact-detail-ico">{ico}</div>
                <div className="contact-detail-text">{text}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-right r-right">
          <h3>Send Us an Inquiry</h3>
          <p className="form-sub">Tell us about your event and we'll take care of everything else.</p>
          <EventForm />
        </div>
      </section>

      {/* ══ INSTAGRAM ══ */}
      <InstagramSection />
    </>
  );
}