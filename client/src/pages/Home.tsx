/* Ivory Precision: Apple-inspired editorial layout, ivory canvas, charcoal depth, champagne-gold accents. */
import { useEffect, useState } from "react";
import { ArrowUpRight, Check, ChevronDown, Clock3, Droplets, MapPin, Menu, Phone, ShieldCheck, Sparkles, Star, X, Zap } from "lucide-react";

const HERO_IMAGE = "/manus-storage/triple-star-hero_dd31e918.jpg";
const MARK_IMAGE = "/manus-storage/triple-star-logo_66485781.png";

const services = [
  { icon: Droplets, title: "غسيل داخلي وخارجي", text: "عناية كاملة تترك السيارة نظيفة من الداخل والخارج." },
  { icon: Sparkles, title: "تلميع وعناية", text: "لمسات دقيقة تعيد للسيارة حضورها ولمعانها." },
  { icon: Zap, title: "خدمة سريعة", text: "ننجزها بكفاءة، لأن وقتك مهم." },
];

const reviews = [
  "الخدمة سريعة والنتيجة ممتازة، والسيارة خرجت نظيفة من الداخل والخارج.",
  "فريق محترف ومحترم وأسعار مناسبة لجودة الخدمة.",
  "منطقة انتظار مريحة ومكيّفة مع مشروبات باردة.",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div dir="rtl" className="site-shell">
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Triple Star Car Wash">
          <img src={MARK_IMAGE} alt="" />
          <span><strong>TRIPLE</strong> STAR</span>
        </a>
        <nav className={`desktop-nav ${menuOpen ? "open" : ""}`} aria-label="التنقل الرئيسي">
          <a href="#services" onClick={closeMenu}>خدماتنا</a>
          <a href="#why-us" onClick={closeMenu}>لماذا نحن</a>
          <a href="#reviews" onClick={closeMenu}>التقييمات</a>
          <a href="#contact" onClick={closeMenu}>تواصل معنا</a>
        </nav>
        <a className="header-cta" href="tel:+97433022544"><Phone size={15} /> احجز الآن</a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="فتح القائمة">{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="eyebrow-line" /> غسيل سيارات احترافي في الدوحة</div>
            <h1>سيارتك تستحق<br /><em>لمعانًا</em> استثنائيًا.</h1>
            <p>غسيل داخلي وخارجي سريع، فريق محترف، وتجربة انتظار مريحة في Triple Star Car Wash.</p>
            <div className="hero-actions">
              <a className="primary-button" href="tel:+97433022544">احجز زيارتك الآن <ArrowUpRight size={17} /></a>
              <a className="text-link" href="https://maps.google.com/?q=Triple+Star+Car+Wash+Doha" target="_blank" rel="noreferrer"><MapPin size={16} /> احصل على الاتجاهات</a>
            </div>
            <div className="trust-row"><span><Check size={14} /> غسيل داخلي وخارجي</span><span><Check size={14} /> منطقة انتظار مريحة</span></div>
          </div>
          <div className="hero-visual reveal-delay">
            <img src={HERO_IMAGE} alt="سيارة لامعة داخل مركز غسيل Triple Star" />
            <div className="hero-badge"><span className="stars">★★★★★</span><strong>4.8 / 5</strong><small>تقييم Google</small></div>
            <div className="hero-caption"><span>01</span><span>TRIPLE STAR DETAIL BAY</span></div>
          </div>
        </section>

        <section className="stats-strip" aria-label="إحصائيات المغسلة">
          <div><strong>4.8<span>/5</span></strong><small>تقييم Google</small></div>
          <div><strong>137</strong><small>مراجعة منشورة</small></div>
          <div><strong>30 <span>ر.ق</span></strong><small>للسيارة الكبيرة حسب تقييم</small></div>
          <div><strong>22:00</strong><small>موعد الإغلاق الظاهر</small></div>
        </section>

        <section id="services" className="section services-section">
          <div className="section-intro"><div className="eyebrow"><span className="eyebrow-line" /> عناية تستحقها</div><h2>كل تفصيلة<br /><em>تفرق.</em></h2></div>
          <div className="service-grid">{services.map(({ icon: Icon, title, text }) => <article className="service-card" key={title}><div className="service-icon"><Icon size={21} strokeWidth={1.5} /></div><h3>{title}</h3><p>{text}</p><span className="card-arrow"><ArrowUpRight size={17} /></span></article>)}</div>
        </section>

        <section id="why-us" className="section split-section">
          <div className="split-panel dark-panel"><div className="panel-mark">✦ ✦ ✦</div><div className="eyebrow light"><span className="eyebrow-line" /> تجربة مختلفة</div><h2>نظافة تلمع.<br /><em>خدمة تليق بك.</em></h2><p>من أول لحظة وصولك، نعمل على أن تكون التجربة بسيطة، سريعة، ومريحة.</p><a className="light-link" href="tel:+97433022544">تواصل معنا <ArrowUpRight size={16} /></a></div>
          <div className="split-panel lounge-panel"><div className="lounge-overlay"><span className="eyebrow"><span className="eyebrow-line" /> أثناء انتظارك</span><h3>خذ وقتك.<br />نحن نهتم بالباقي.</h3><p><Clock3 size={15} /> منطقة انتظار مكيّفة ومريحة</p></div></div>
        </section>

        <section id="reviews" className="section reviews-section"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> من عملائنا</div><h2>كلام يلمع<br /><em>مثل النتيجة.</em></h2></div><div className="review-score"><strong>4.8</strong><div><span className="stars">★★★★★</span><small>من 137 مراجعة على Google</small></div></div></div><div className="review-grid">{reviews.map((review, index) => <article className="review-card" key={review}><div className="review-top"><span className="stars">★★★★★</span><span>0{index + 1}</span></div><p>“{review}”</p><div className="review-source"><ShieldCheck size={14} /> تجربة موثقة من العملاء</div></article>)}</div></section>

        <section id="contact" className="contact-section"><div className="contact-content"><div className="eyebrow light"><span className="eyebrow-line" /> جاهز للمعان القادم؟</div><h2>اترك الباقي<br /><em>علينا.</em></h2><p>اتصل بنا أو احصل على الاتجاهات الآن.</p><div className="contact-actions"><a className="gold-button" href="tel:+97433022544"><Phone size={16} /> +974 3302 2544</a><a className="outline-button" href="https://maps.google.com/?q=Triple+Star+Car+Wash+Doha" target="_blank" rel="noreferrer"><MapPin size={16} /> B Ring Rd، الدوحة</a></div></div><div className="contact-mark"><img src={MARK_IMAGE} alt="" /><span>TRIPLE STAR<br />CAR WASH</span></div></section>
      </main>
      <footer><span>© {new Date().getFullYear()} Triple Star Car Wash</span><span>دقة في كل تفصيلة.</span></footer>
    </div>
  );
}
