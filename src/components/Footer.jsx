import './Footer.css';

const LOGO_URL =
  '/logo.png';

const HOURS = [
  { day: 'Mon – Thu', time: '4:00 pm – 11:00 pm' },
  { day: 'Friday',    time: '4:00 PM – 12:00 AM' },
  { day: 'Saturday',  time: '10:00 AM – 12:00 AM' },
  { day: 'Sunday',    time: '10:00 AM – 11:00 PM' },
  { day: 'Happy Hour', time: 'Mon–Fri, 4–7 PM', highlight: true },
];

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        {/* Brand */}
        <div className="footer-brand">
          <a href="/">
            <img className="footer-logo" src={LOGO_URL} alt="Salvatore's" />
          </a>
          <p>
            Drawing inspiration from the shores of Italy and the Mediterranean — bold flavors,
            modern elegance, and a vibrant lounge vibe in the heart of the Marina District.
          </p>
          <div className="footer-social">
            <a
              href="https://www.facebook.com/Salvatoressd/"
              target="_blank"
              rel="noreferrer"
              className="f-social-btn"
              aria-label="Facebook"
            >
              f
            </a>
            <a
              href="https://www.instagram.com/salvatores_sd/"
              target="_blank"
              rel="noreferrer"
              className="f-social-btn"
              aria-label="Instagram"
            >
              ◈
            </a>
          </div>
        </div>

        {/* Hours */}
        <div className="footer-col">
          <h4>Hours</h4>
          <ul className="f-hours">
            {HOURS.map(({ day, time, highlight }) => (
              <li key={day} className={highlight ? 'hl' : ''}>
                {day} <span>{time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Find Us */}
        <div className="footer-col">
          <h4>Find Us</h4>
          <p className="f-address">
            Salvatore's Cucina &amp; Lounge<br />
            750 Front St,<br />
            San Diego, CA 92101<br /><br />
            <a href="tel:6193802208">(619) 380-2208</a>
          </p>
          <a
            href="https://www.opentable.com/r/salvatores-cucina-and-lounge-reservations-san-marcos?restref=1474873"
            target="_blank"
            rel="noreferrer"
            className="f-book"
          >
            Book a Table
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Salvatore's Cucina &amp; Lounge. All rights reserved.</p>
        <p><em>Marina District</em> · Downtown San Diego</p>
      </div>
    </footer>
  );
}