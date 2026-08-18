/* Ivory Precision: Apple-inspired editorial layout, ivory canvas, charcoal depth, champagne-gold accents. */
import { useEffect, useState } from "react";
import { ArrowUpRight, Check, Clock3, Droplets, MapPin, Menu, Moon, Phone, ShieldCheck, Sparkles, Sun, X, Zap, MessageCircle } from "lucide-react";

const HERO_IMAGE = "/manus-storage/triple-star-hero-night_e5649219.jpg";
const MARK_IMAGE = "/manus-storage/triple-star-logo-vivid_153bb60b.png";

const services = [
  { icon: Droplets, ar: { title: "غسيل داخلي وخارجي", text: "عناية كاملة تترك السيارة نظيفة من الداخل والخارج." }, en: { title: "Inside & outside wash", text: "Complete care that leaves your car clean inside and out." } },
  { icon: Sparkles, ar: { title: "تلميع وعناية", text: "لمسات دقيقة تعيد للسيارة حضورها ولمعانها." }, en: { title: "Polish & detailing", text: "Precise finishing that brings back the shine." } },
  { icon: Zap, ar: { title: "خدمة سريعة", text: "ننجزها بكفاءة، لأن وقتك مهم." }, en: { title: "Fast service", text: "Efficient work because your time matters." } },
];

const reviews = {
  ar: ["الخدمة سريعة والنتيجة ممتازة، والسيارة خرجت نظيفة من الداخل والخارج.", "فريق محترف ومحترم وأسعار مناسبة لجودة الخدمة.", "منطقة انتظار مريحة ومكيّفة مع مشروبات باردة."],
  en: ["Fast service and an excellent result. My car came out clean inside and out.", "Professional, respectful team with pricing that feels right for the quality.", "A comfortable, cool waiting area with cold refreshments."]
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [language, setLanguage] = useState<"ar" | "en">(() => (localStorage.getItem("triple-star-language") as "ar" | "en") || "ar");
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("triple-star-theme-v2") !== "light");
  const isAr = language === "ar";
  const r = (ar: string, en: string) => isAr ? ar : en;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  useEffect(() => { localStorage.setItem("triple-star-language", language); document.documentElement.lang = language; document.documentElement.dir = isAr ? "rtl" : "ltr"; }, [language, isAr]);
  useEffect(() => { localStorage.setItem("triple-star-theme-v2", darkMode ? "dark" : "light"); }, [darkMode]);

  return (
    <div dir={isAr ? "rtl" : "ltr"} lang={language} className={`site-shell ${darkMode ? "night-mode" : ""}`}>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <a className="brand" href="#top" onClick={closeMenu} aria-label="Triple Star Car Wash">
          <img src={MARK_IMAGE} alt="Triple Star Car Wash logo" />
          <span><strong>TRIPLE</strong> STAR</span>
        </a>
        <nav className={`desktop-nav ${menuOpen ? "open" : ""}`} aria-label="التنقل الرئيسي">
          <a href="#services" onClick={closeMenu}>{r("خدماتنا", "Services")}</a>
          <a href="#why-us" onClick={closeMenu}>{r("لماذا نحن", "Why us")}</a>
          <a href="#reviews" onClick={closeMenu}>{r("التقييمات", "Reviews")}</a>
          <a href="#contact" onClick={closeMenu}>{r("تواصل معنا", "Contact")}</a>
        </nav>
        <div className="header-tools"><button className="mode-button" onClick={() => setDarkMode(!darkMode)} aria-label={r("تبديل الوضع الليلي", "Toggle dark mode")}>{darkMode ? <Sun size={16} /> : <Moon size={16} />}</button><button className="language-button" onClick={() => setLanguage(isAr ? "en" : "ar")} aria-label={r("تغيير اللغة إلى الإنجليزية", "Switch to Arabic")}>{isAr ? "EN" : "ع"}</button><a className="header-cta" href="tel:+97433022544"><Phone size={15} /> {r("احجز الآن", "Book now")}</a></div>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="فتح القائمة">{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="eyebrow-line" /> {r("غسيل سيارات احترافي في الدوحة", "Professional car wash in Doha")}</div>
            <h1>{r("سيارتك تستحق", "Your car deserves")}<br /><em>{r("لمعانًا", "an exceptional")} </em>{r("استثنائيًا.", "shine.")}</h1>
            <p>{r("غسيل داخلي وخارجي سريع، فريق محترف، وتجربة انتظار مريحة في Triple Star Car Wash.", "Fast inside-and-out washing, a professional team, and a comfortable wait at Triple Star Car Wash.")}</p>
            <div className="hero-actions">
              <a className="primary-button" href="tel:+97433022544">{r("احجز زيارتك الآن", "Book your visit")} <ArrowUpRight size={17} /></a>
              <a className="text-link" href="https://maps.google.com/?q=Triple+Star+Car+Wash+Doha" target="_blank" rel="noreferrer"><MapPin size={16} /> {r("توجه إلينا", "Visit us")}</a>
            </div>
            <div className="trust-row"><span><Check size={14} /> {r("غسيل داخلي وخارجي", "Inside & outside wash")}</span><span><Check size={14} /> {r("منطقة انتظار مريحة", "Comfortable lounge")}</span></div>
          </div>
          <div className="hero-visual reveal-delay">
            <img src={HERO_IMAGE} alt="سيارة لامعة داخل مركز غسيل Triple Star" />
            <div className="hero-badge"><span className="stars">★★★★★</span><strong>4.8 / 5</strong><small>{r("تقييم Google", "Google rating")}</small></div>
            <div className="hero-caption"><span>01</span><span>TRIPLE STAR DETAIL BAY</span></div>
          </div>
        </section>

        <section className="stats-strip" aria-label="إحصائيات المغسلة">
          <div><strong>4.8<span>/5</span></strong><small>{r("تقييم Google", "Google rating")}</small></div>
          <div><strong>137</strong><small>{r("مراجعة منشورة", "Published reviews")}</small></div>
          <div><strong>30 <span>{r("ر.ق", "QAR")}</span></strong><small>{r("للسيارة الكبيرة حسب تقييم", "Large car, per review")}</small></div>
          <div><strong>22:00</strong><small>{r("موعد الإغلاق الظاهر", "Listed closing time")}</small></div>
        </section>

        <section id="services" className="section services-section">
          <div className="section-intro"><div className="eyebrow"><span className="eyebrow-line" /> {r("عناية تستحقها", "Care that shows")}</div><h2>{r("كل تفصيلة", "Every detail")}<br /><em>{r("تفرق.", "matters.")}</em></h2></div>
          <div className="service-grid">{services.map(({ icon: Icon, ar, en }) => { const item = isAr ? ar : en; return <article className="service-card" key={item.title}><div className="service-icon"><Icon size={21} strokeWidth={1.5} /></div><h3>{item.title}</h3><p>{item.text}</p><span className="card-arrow"><ArrowUpRight size={17} /></span></article>; })}</div>
        </section>

        <section id="why-us" className="section split-section">
          <div className="split-panel dark-panel"><div className="panel-mark">✦ ✦ ✦</div><div className="eyebrow light"><span className="eyebrow-line" /> {r("تجربة مختلفة", "A better experience")}</div><h2>{r("نظافة تلمع.", "A clean that shines.")}<br /><em>{r("خدمة تليق بك.", "A service that fits.")}</em></h2><p>{r("من أول لحظة وصولك، نعمل على أن تكون التجربة بسيطة، سريعة، ومريحة.", "From arrival to handover, we keep the experience simple, fast, and comfortable.")}</p><a className="light-link" href="tel:+97433022544">{r("تواصل معنا", "Talk to us")} <ArrowUpRight size={16} /></a></div>
          <div className="split-panel lounge-panel"><div className="lounge-overlay"><span className="eyebrow"><span className="eyebrow-line" /> {r("أثناء انتظارك", "While you wait")}</span><h3>{r("خذ وقتك.", "Take your time.")}<br />{r("نحن نهتم بالباقي.", "We handle the rest.")}</h3><p><Clock3 size={15} /> {r("منطقة انتظار مكيّفة ومريحة", "A cool, comfortable lounge")}</p></div></div>
        </section>

        <section id="reviews" className="section reviews-section"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" /> {r("من عملائنا", "From our customers")}</div><h2>{r("كلام يلمع", "Words that shine")}<br /><em>{r("مثل النتيجة.", "like the result.")}</em></h2></div><div className="review-score"><strong>4.8</strong><div><span className="stars">★★★★★</span><small>{r("من 137 مراجعة على Google", "From 137 Google reviews")}</small></div></div></div><div className="review-grid">{reviews[language].map((review, index) => <article className="review-card" key={review}><div className="review-top"><span className="stars">★★★★★</span><span>0{index + 1}</span></div><p>“{review}”</p><div className="review-source"><ShieldCheck size={14} /> {r("تجربة موثقة من العملاء", "Verified customer experience")}</div></article>)}</div></section>

        <section id="location" className="location-section"><div className="location-copy"><div className="eyebrow"><span className="eyebrow-line" /> {r("موقعنا", "Find us")}</div><h2>{r("توجه إلينا", "Come see us")}.<br /><em>{r("ننتظرك.", "We are ready.")}</em></h2><p>{r("نحن في موقع واضح وسهل الوصول على طريق B Ring Road في الدوحة.", "Find us on B Ring Road in Doha, with easy access and clear directions.")}</p><a className="primary-button" href="https://maps.google.com/?q=25.2786128,51.5422532" target="_blank" rel="noreferrer"><MapPin size={16} /> {r("افتح الخريطة", "Open map")}</a></div><div className="map-frame"><iframe title={r("خريطة موقع Triple Star Car Wash", "Triple Star Car Wash location map")} src="https://www.google.com/maps?q=25.2786128,51.5422532&z=16&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></section>

        <section id="contact" className="contact-section"><div className="contact-content"><div className="eyebrow light"><span className="eyebrow-line" /> {r("جاهز للمعان القادم؟", "Ready for the next shine?")}</div><h2>{r("اترك الباقي", "Leave the rest")}<br /><em>{r("علينا.", "to us.")}</em></h2><p>{r("اتصل بنا أو احصل على الاتجاهات الآن.", "Call us or get directions now.")}</p><div className="contact-actions"><a className="gold-button" href="tel:+97433022544"><Phone size={16} /> +974 3302 2544</a><a className="outline-button" href="https://maps.google.com/?q=Triple+Star+Car+Wash+Doha" target="_blank" rel="noreferrer"><MapPin size={16} /> B Ring Rd، Doha</a></div></div><div className="contact-mark"><img src={MARK_IMAGE} alt="Triple Star Car Wash" /><span>TRIPLE STAR<br />CAR WASH</span></div></section>
      </main>
      <a className="whatsapp-float" href="https://wa.me/97433022544" target="_blank" rel="noreferrer" aria-label={r("تواصل معنا عبر واتساب", "Contact us on WhatsApp")}><MessageCircle size={24} /><span>{r("واتساب", "WhatsApp")}</span></a>
      <footer><span>© {new Date().getFullYear()} Triple Star Car Wash</span><span>{r("دقة في كل تفصيلة.", "Precision in every detail.")}</span></footer>
    </div>
  );
}
