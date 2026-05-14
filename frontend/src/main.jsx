import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  Baby,
  CalendarDays,
  ChevronRight,
  Clock,
  GraduationCap,
  Heart,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Scissors,
  Send,
  Shirt,
  Sparkles,
  Star,
  WandSparkles,
  X
} from 'lucide-react';
import './styles.css';
import logo from './assets/csv-logo.png';
import fashionModel from './assets/fashion-model.png';
import bridalMakeup from './assets/bridal-makeup.png';
import kidsCollection from './assets/kids-collection.png';
import boutiqueDisplay from './assets/boutique-display.png';
import courseStudio from './assets/course-studio.png';
import showcaseCollage from './assets/showcase-collage.png';

const business = {
  name: 'CSV Fashion Designing Institute & Boutique',
  short: 'CSV Fashion',
  phone: '+91 93810 19596',
  whatsappNumber: '919381019596',
  email: 'csvfashionhyd@gmail.com',
  website: 'www.csvfashion.in',
  address: 'Opp. NSR Impulse College, Simhapuri Colony, Bowrampet, Hyderabad, Telangana 500043',
  hours: 'Mon - Sat: 10:00 AM - 8:00 PM'
};

const services = [
  { icon: WandSparkles, title: 'Bridal Makeup', text: 'Soft glam, HD finish and complete wedding-ready looks.', image: bridalMakeup },
  { icon: Scissors, title: 'Women Stitching', text: 'Perfect-fit blouses, kurtis, anarkali sets and alterations.', image: courseStudio },
  { icon: Shirt, title: 'Designer Dresses', text: 'Custom ethnic and Indo-western outfits for every occasion.', image: fashionModel },
  { icon: Baby, title: 'Kids Collection', text: 'Colorful frocks and cute outfits for little stars.', image: kidsCollection },
  { icon: Sparkles, title: 'Boutique Collection', text: 'Handpicked ready-to-wear fashion with Hyderabad charm.', image: boutiqueDisplay },
  { icon: GraduationCap, title: 'Fashion Courses', text: 'Learn stitching, design basics and creative dressmaking.', image: courseStudio }
];

const creations = [
  { title: 'Floral Co-ord Sets', image: fashionModel },
  { title: 'Kids Frocks & Dresses', image: kidsCollection },
  { title: 'Blouses & Vests', image: boutiqueDisplay },
  { title: 'Bridal Makeup', image: bridalMakeup },
  { title: 'Fashion Courses', image: courseStudio },
  { title: 'Boutique Showcase', image: showcaseCollage }
];

const testimonials = [
  { name: 'Priyanka R.', text: 'Amazing bridal makeup. The team made me feel comfortable and beautiful on my big day.' },
  { name: 'Swapna K.', text: 'Their stitching is perfect. Every outfit fits just right and the finish is always premium.' },
  { name: 'Neha S.', text: 'My daughter loves her frocks from CSV. Lovely designs and great quality.' }
];

function whatsappLink(message) {
  return `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function Header() {
  const [open, setOpen] = useState(false);
  const nav = ['Home', 'About Us', 'Services', 'Boutique', 'Courses', 'Gallery', 'Contact'];
  return (
    <>
      <div className="topbar">
        <span><Heart size={14} /> Women-owned boutique & institute</span>
        <span><MapPin size={15} /> {business.address}</span>
        <span><Phone size={15} /> {business.phone}</span>
      </div>
      <header className="site-header">
        <a href="#home" className="brand" aria-label="CSV Fashion home">
          <img src={logo} alt="CSV Fashion logo" />
          <div><strong>CSV</strong><span>Fashion Designing Institute & Boutique</span></div>
        </a>
        <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Open menu">
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? 'open' : ''}>
          {nav.map((item) => <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} onClick={() => setOpen(false)}>{item}</a>)}
          <a className="nav-cta" href={whatsappLink('Hi CSV Fashion, I want to book an appointment.')} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Book on WhatsApp</a>
        </nav>
      </header>
    </>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-copy">
        <p className="eyebrow">Hyderabad fashion, stitching & bridal beauty</p>
        <h1>Where tradition inspires timeless style.</h1>
        <p className="hero-text">Bridal makeup, women’s stitching, designer dresses, kids collection, boutique fashion and professional courses — all under one roof.</p>
        <div className="hero-actions">
          <a href="#appointment" className="btn primary"><CalendarDays size={18} /> Book Appointment</a>
          <a href="#gallery" className="btn ghost">Explore Collection <ChevronRight size={18} /></a>
        </div>
        <div className="hero-points">
          <span><Heart size={16} /> Women-owned care</span>
          <span><Scissors size={16} /> Custom fitting</span>
          <span><Sparkles size={16} /> Bridal glow</span>
        </div>
      </div>
      <div className="hero-visual">
        <img className="model" src={fashionModel} alt="Edited floral women’s stitched outfit" />
        <img className="makeup" src={bridalMakeup} alt="Edited bridal makeup service" />
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="services section-shell">
      {services.map(({ icon: Icon, title, text }) => (
        <article className="service-card" key={title}>
          <div className="icon"><Icon size={24} /></div>
          <h3>{title}</h3>
          <p>{text}</p>
        </article>
      ))}
    </section>
  );
}

function FeaturePanels() {
  return (
    <section id="boutique" className="feature-section section-shell">
      <div className="feature-intro">
        <p className="eyebrow">Real products, polished for web</p>
        <h2>Original boutique dress ideas, edited into clean website photos.</h2>
        <p>These images are based on the real clothing references you shared: kids outfits, women’s floral dresses, blouse designs, stitching, course work and bridal makeup.</p>
      </div>
      <div className="feature-grid">
        <article className="feature-card image-card wide">
          <img src={boutiqueDisplay} alt="Edited boutique blouse and stitched garment display" />
          <div>
            <p className="eyebrow light">Boutique collection</p>
            <h2>Blouses, vests & stitched pieces</h2>
            <p>Clean product-style photo from the original boutique clothing ideas.</p>
          </div>
        </article>
        <article className="feature-card image-card">
          <img src={kidsCollection} alt="Edited kids collection outfits" />
          <div>
            <p className="eyebrow light">Kids collection</p>
            <h2>Bright little outfits</h2>
          </div>
        </article>
        <article className="feature-card image-card">
          <img src={courseStudio} alt="Fashion course and stitching studio" />
          <div>
            <p className="eyebrow light">Courses & stitching</p>
            <h2>Learn. Stitch. Create.</h2>
          </div>
        </article>
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className="section-shell gallery-section">
      <div className="section-title">
        <p className="eyebrow">Our creations</p>
        <h2>Website-ready photos for every service.</h2>
      </div>
      <div className="photo-grid">
        {creations.map((item) => (
          <article className="photo-card" key={item.title}>
            <img src={item.image} alt={item.title} />
            <div><strong>{item.title}</strong><span>CSV Fashion</span></div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials section-shell">
      <div className="section-title">
        <p className="eyebrow">Trusted clients</p>
        <h2>Personalized service for every beautiful moment.</h2>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((item) => (
          <article className="testimonial" key={item.name}>
            <div className="stars">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div>
            <p>“{item.text}”</p>
            <strong>— {item.name}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

function AppointmentForm() {
  const [form, setForm] = useState({ name: '', phone: '', service: 'Bridal Makeup', date: '', message: '' });
  const [status, setStatus] = useState('');
  const apiBase = import.meta.env.VITE_API_BASE || 'http://localhost:5001';

  const waMessage = useMemo(() => `Hi CSV Fashion, I want to book an appointment.\nName: ${form.name}\nPhone: ${form.phone}\nService: ${form.service}\nDate: ${form.date}\nMessage: ${form.message}`,
    [form]);

  async function submit(e) {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch(`${apiBase}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('Done. Your request was saved. You can also send it on WhatsApp.');
      setForm({ name: '', phone: '', service: 'Bridal Makeup', date: '', message: '' });
    } catch {
      setStatus('Could not connect to backend. Please send by WhatsApp for now.');
    }
  }

  return (
    <section id="appointment" className="appointment section-shell">
      <div className="appointment-copy">
        <p className="eyebrow">Book your appointment</p>
        <h2>Tell us what you need. We’ll help you look your best.</h2>
        <p>Use the form for website enquiries or send the same request directly by WhatsApp.</p>
        <div className="contact-card">
          <p><Phone size={18} /> {business.phone}</p>
          <p><MapPin size={18} /> {business.address}</p>
          <p><Clock size={18} /> {business.hours}</p>
        </div>
      </div>
      <form className="booking-form" onSubmit={submit}>
        <label>Name<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required /></label>
        <label>Phone / WhatsApp<input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} required /></label>
        <label>Service<select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })}>{services.map(s => <option key={s.title}>{s.title}</option>)}</select></label>
        <label>Preferred Date<input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} /></label>
        <label className="full">Message<textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about dress, makeup, stitching, kids outfit, course enquiry..." /></label>
        <button className="btn primary" type="submit"><Send size={17} /> Submit Enquiry</button>
        <a className="btn ghost" href={whatsappLink(waMessage)} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Send on WhatsApp</a>
        {status && <p className="form-status">{status}</p>}
      </form>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="section-shell footer-grid">
        <div>
          <img src={logo} alt="CSV Fashion logo" />
          <p>{business.name}</p>
          <p className="muted">Bridal | Stitching | Boutique | Kids | Courses</p>
        </div>
        <div>
          <h3>Visit Us</h3>
          <p>{business.address}</p>
        </div>
        <div>
          <h3>Contact</h3>
          <p>{business.phone}</p>
          <p>{business.email}</p>
          <p>{business.website}</p>
        </div>
        <div>
          <h3>Book Now</h3>
          <a className="btn light-btn" href={whatsappLink('Hi CSV Fashion, I want to book an appointment.')} target="_blank" rel="noreferrer">WhatsApp Appointment</a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <FeaturePanels />
      <Gallery />
      <Testimonials />
      <AppointmentForm />
      <section id="about-us" className="about-strip section-shell">
        <img src={showcaseCollage} alt="CSV Fashion product showcase" />
        <div>
          <p className="eyebrow">About CSV</p>
          <h2>Designed with love, stitched with perfection.</h2>
          <p>CSV Fashion brings boutique styling, custom tailoring, bridal makeup, kids outfits and learning courses together for women and families in Hyderabad.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
