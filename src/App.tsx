import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Martini, Cigarette, Disc3 } from "lucide-react";
import { SocialButton } from "./components/SocialButton";

const COLORS = {
  bg: "#0a0d0a",
  bgCard: "#0f1410",
  forest: "#1a3a2a",
  forestMid: "#2d5a3d",
  forestLight: "#3d7a52",
  sage: "#7aad8a",
  sageLight: "#a8c8b0",
  cream: "#f0ede4",
  creamDark: "#d4cfc3",
  gold: "#c8a96e",
  goldLight: "#e0c48a",
  crimson: "#8b1a2a",
  crimsonMid: "#b52236",
  crimsonLight: "#d4394f",
  roseDust: "#c4808a",
  roseLight: "#dda8b0",
  muted: "#6b7c6e",
  border: "rgba(122,173,138,0.12)",
  borderGold: "rgba(200,169,110,0.2)",
};

const AnimatedMartini = ({ show }: { show: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={COLORS.gold} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    {/* Liquid Fill */}
    <motion.polygon
      points="12,11 5,3 19,3"
      fill={COLORS.gold}
      opacity="0.4"
      stroke="none"
      initial={{ clipPath: "inset(100% 0 0 0)" }}
      animate={{ clipPath: show ? "inset(20% 0 0 0)" : "inset(100% 0 0 0)" }}
      transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
    />
    {/* Glass Outline */}
    <motion.path 
      d="M8 22h8 M12 11v11 m7-19-7 8-7-8Z" 
      initial={{ pathLength: 0 }}
      animate={{ pathLength: show ? 1 : 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
  </svg>
);

const AnimatedCigarette = ({ show }: { show: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={COLORS.gold} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
    {/* Body */}
    <motion.path 
      d="M18 12H2v4h16 M22 12v4 M7 12v4" 
      initial={{ pathLength: 0 }}
      animate={{ pathLength: show ? 1 : 0 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
    {/* Burning Tip Glow */}
    <motion.rect
      x="18" y="12" width="4" height="4"
      fill={COLORS.crimsonLight}
      stroke="none"
      initial={{ opacity: 0 }}
      animate={{ opacity: show ? [0, 0.8, 0.3, 0.9, 0.4] : 0 }}
      transition={{ duration: 2, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Smoke 1 */}
    <motion.path 
      d="M18 8c0-2.5-2-2.5-2-5" 
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: show ? 1 : 0, opacity: show ? [0, 1, 0] : 0 }}
      transition={{ duration: 2.5, delay: 1.5, repeat: Infinity, ease: "easeInOut" }}
    />
    {/* Smoke 2 */}
    <motion.path 
      d="M22 8c0-2.5-2-2.5-2-5" 
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: show ? 1 : 0, opacity: show ? [0, 1, 0] : 0 }}
      transition={{ duration: 2.5, delay: 2, repeat: Infinity, ease: "easeInOut" }}
    />
  </svg>
);

const AnimatedDisc = ({ show }: { show: boolean }) => (
  <motion.svg 
    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={COLORS.gold} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"
    initial={{ rotate: 0 }}
    animate={{ rotate: show ? 360 : 0 }}
    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
  >
    <motion.circle cx="12" cy="12" r="10" initial={{ pathLength: 0 }} animate={{ pathLength: show ? 1 : 0 }} transition={{ duration: 1.5, ease: "easeInOut" }} />
    <motion.path d="M6 12c0-1.7.7-3.2 1.8-4.2" initial={{ pathLength: 0 }} animate={{ pathLength: show ? 1 : 0 }} transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }} />
    <motion.circle cx="12" cy="12" r="2" initial={{ scale: 0 }} animate={{ scale: show ? 1 : 0 }} transition={{ duration: 0.5, delay: 1, ease: "backOut" }} />
    <motion.path d="M18 12c0 1.7-.7 3.2-1.8 4.2" initial={{ pathLength: 0 }} animate={{ pathLength: show ? 1 : 0 }} transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }} />
  </motion.svg>
);

const AnimatedDiscoBall = ({ show }: { show: boolean }) => (
  <div style={{ position: 'relative', width: 72, height: 72, marginLeft: '3rem', flexShrink: 0 }}>
    <motion.svg
      width="100%" height="100%" viewBox="0 0 48 48" fill="none" stroke={COLORS.gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      initial={{ rotate: 0, scale: 0.95 }}
      animate={{ rotate: show ? 360 : 0, scale: show ? [0.95, 1.05, 0.95] : 0.95 }}
      transition={{ 
        rotate: { duration: 24, repeat: Infinity, ease: "linear" },
        scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
      }}
    >
      {/* Inner Pulse */}
      <motion.circle 
        cx="24" cy="24" r="16" 
        fill={COLORS.gold} 
        stroke="none"
        initial={{ opacity: 0 }} 
        animate={{ opacity: show ? [0, 0.15, 0] : 0 }} 
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} 
      />

      {/* Outline */}
      <motion.circle cx="24" cy="24" r="20" initial={{ pathLength: 0 }} animate={{ pathLength: show ? 1 : 0 }} transition={{ duration: 1.5, ease: "easeInOut" }} />
      
      {/* Grid Lines */}
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: show ? 1 : 0 }} transition={{ duration: 1, delay: 1 }}>
        <path d="M 24 4 V 44" />
        <path d="M 4 24 H 44" />
        <path d="M 24 4 A 8 20 0 0 0 24 44" />
        <path d="M 24 4 A 8 20 0 0 1 24 44" />
        <path d="M 24 4 A 15 20 0 0 0 24 44" />
        <path d="M 24 4 A 15 20 0 0 1 24 44" />
        <path d="M 4 24 A 20 8 0 0 0 44 24" />
        <path d="M 4 24 A 20 8 0 0 1 44 24" />
        <path d="M 4 24 A 20 15 0 0 0 44 24" />
        <path d="M 4 24 A 20 15 0 0 1 44 24" />
      </motion.g>
    </motion.svg>

    {/* Sparkles */}
    {[
      { top: '-5%', right: '5%', delay: 0, size: 20 },
      { bottom: '5%', left: '-5%', delay: 1, size: 16 },
      { top: '20%', left: '-10%', delay: 0.5, size: 12 },
    ].map((pos, i) => (
      <motion.svg
        key={i}
        width={pos.size} height={pos.size} viewBox="0 0 24 24" fill="none" stroke={COLORS.gold} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
        style={{ position: 'absolute', top: pos.top, left: pos.left, right: pos.right, bottom: pos.bottom }}
        initial={{ opacity: 0, scale: 0, rotate: 0 }}
        animate={show ? { opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5], rotate: [0, 90, 180] } : {}}
        transition={{ duration: 2, delay: pos.delay, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M12 2 Q12 12 22 12 Q12 12 12 22 Q12 12 2 12 Q12 12 12 2" />
      </motion.svg>
    ))}
  </div>
);

const AutoScrollHours = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    let animationFrameId: number;
    let scrollPos = 0;
    let direction = 1;
    let speed = 0.3; // slow speed down
    const maxSpeed = 3; // fast speed up
    const easeFactor = 0.08;

    const scroll = () => {
      if (!container || !content) return;
      
      const maxScroll = content.scrollHeight - container.clientHeight;
      if (maxScroll <= 0) return; // No need to scroll if content fits
      
      if (direction === 1) {
        // Scrolling down slowly
        scrollPos += speed;
        if (scrollPos >= maxScroll) {
          scrollPos = maxScroll;
          direction = -1;
        }
      } else {
        // Scrolling up fast with ease
        speed += easeFactor;
        if (speed > maxSpeed) speed = maxSpeed;
        
        scrollPos -= speed;
        if (scrollPos <= 0) {
          scrollPos = 0;
          direction = 1;
          speed = 0.3; // reset to slow speed
        }
      }
      
      content.style.transform = `translateY(-${scrollPos}px)`;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        maxHeight: "100px",
        overflow: "hidden", // Hide scrollbar completely
        paddingRight: "0.5rem",
      }}
    >
      <div ref={contentRef} style={{ willChange: "transform" }}>
        {[
          ["Monday", "Closed"],
          ["Tuesday", "5:00 PM – 1:30 AM"],
          ["Wednesday", "5:00 PM – 1:30 AM"],
          ["Thursday", "5:00 PM – 1:30 AM"],
          ["Friday", "1:00 PM – 1:30 AM"],
          ["Saturday", "1:00 PM – 1:30 AM"],
          ["Sunday", "1:00 PM – 1:30 AM"],
          ["Holidays", "1:00 PM – 3:00 AM"],
          ["Special Events", "Varies"],
        ].map(([day, time]) => (
          <div
            key={day}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "0.5rem",
            }}
          >
            <span style={{ color: COLORS.sageLight, fontSize: "0.82rem" }}>
              {day}
            </span>
            <span
              style={{
                color:
                  time === "Closed" ? COLORS.crimsonLight : COLORS.cream,
                fontSize: "0.82rem",
              }}
            >
              {time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const CATEGORIZED_IMAGES = {
  bar: [
    {
      url: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/mp8WyW4PlNUozyXZ/2024_09_30_6521-Aq2WRP5v6aTz3GWQ.jpg",
      label: "The Bar",
    },
    {
      url: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/mp8WyW4PlNUozyXZ/2024_09_30_6559-AzGXlBJ8xvSXKoPR.jpg",
      label: "Signature Cocktails",
    },
    {
      url: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/mp8WyW4PlNUozyXZ/2024_09_30_6579-A3Q23bLJyzUlaeDL.jpg",
      label: "Mixology",
    },
    {
      url: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/mp8WyW4PlNUozyXZ/2024_09_30_6588-Yan1Rolyj4UzQ12w.jpg",
      label: "Nightlife Spirits",
    },
    {
      url: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/mp8WyW4PlNUozyXZ/2024_09_30_6601-AE0PJj84wVuLP0QB.jpg",
      label: "Cheers",
    },
    {
      url: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/mp8WyW4PlNUozyXZ/2024_09_30_6603-m6LZBlErjLFwQZxa.jpg",
      label: "Exquisite Drinks",
    },
    {
      url: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/mp8WyW4PlNUozyXZ/2024_09_30_6611-mp8WRlj9BXiV8jj3.jpg",
      label: "Luxury Bar",
    },
  ],
  dj: [
    {
      url: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/mp8WyW4PlNUozyXZ/2024_09_30_6620-1-YD0lWLPZQlSp9baq.jpg",
      label: "DJ Sets",
    },
    {
      url: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/mp8WyW4PlNUozyXZ/2025-05-21-8-d951kRxqXvSpnMOj.jpg",
      label: "Live Nights",
    },
    {
      url: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/mp8WyW4PlNUozyXZ/2025-05-21-7-mxB4PvROJ0TE36qD.jpg",
      label: "The Crowd",
    },
    {
      url: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/mp8WyW4PlNUozyXZ/2025-05-21-5-A3Q2R03GxOcnqJZ1.jpg",
      label: "Electronic Beats",
    },
    {
      url: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/mp8WyW4PlNUozyXZ/2025-05-21-3-mePxzlRwjJTqyrwk.jpg",
      label: "Pulsing Energy",
    },
    {
      url: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/mp8WyW4PlNUozyXZ/2025-05-21-2-AzGX2qlPvDs6OkNy.jpg",
      label: "Epic Sounds",
    },
    {
      url: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/mp8WyW4PlNUozyXZ/2025-04-16-m6LZpgB7Wrhz62ng.jpg",
      label: "Late Night Drops",
    },
  ],
  festivals: [
    {
      url: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/mp8WyW4PlNUozyXZ/2025-04-16-7-A1aPR4Mx7PsPr0Kj.jpg",
      label: "Celebrations",
    },
    {
      url: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/mp8WyW4PlNUozyXZ/2025-04-16-6-AzGX2qlLlyIVKveG.jpg",
      label: "The Atmosphere",
    },
    {
      url: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/mp8WyW4PlNUozyXZ/2025-04-16-5-YX4l3QRn3wU5M9nD.jpg",
      label: "Festival Vibes",
    },
    {
      url: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/mp8WyW4PlNUozyXZ/2025-04-16-4-YbNBEoRLprTNnEZR.jpg",
      label: "Grand Events",
    },
    {
      url: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/mp8WyW4PlNUozyXZ/2025-04-16-3-AGB2ROwak4txz8wG.jpg",
      label: "Lost in Music",
    },
    {
      url: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/mp8WyW4PlNUozyXZ/2025-04-16-2-YX4l3QRE4Jt5XLBM.jpg",
      label: "Party People",
    },
    {
      url: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/mp8WyW4PlNUozyXZ/2025-04-16-1-YleWw3RlrwTVDoZj.jpg",
      label: "Unforgettable Memories",
    },
    {
      url: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=375,fit=crop/mp8WyW4PlNUozyXZ/2025-05-21-6-m6LZpgBGoMFkvLyL.jpg",
      label: "Dance All Night",
    },
  ],
};

const REVIEWS = [
  {
    name: "Shaunak Dixit",
    stars: 5,
    text: "Amazing place. The staff checks on you. This establishment transforms into a nightclub from late evenings. Good fusion cuisine with great cocktails.",
  },
  {
    name: "Pratham Paste",
    stars: 5,
    text: "An excellent choice for parties. Vibrant atmosphere, diverse dishes, and impeccable ambiance. The Turkish Chicken Kebab is exceptional.",
  },
  {
    name: "Ananya Mehta",
    stars: 5,
    text: "Best nightclub experience in Thane. The booth seating, the music, the cocktails — everything is curated to perfection.",
  },
];

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function useCounter(target, inView, duration = 1800) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setVal(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);
  return val;
}

// ─── NAVBAR ──────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 2.5rem",
          height: scrolled ? "64px" : "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled ? "rgba(10,13,10,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? `1px solid ${COLORS.border}` : "none",
          transition: "all 0.4s ease",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            cursor: "pointer",
          }}
          onClick={() => scrollTo("hero")}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              background: `radial-gradient(circle at 40% 40%, ${COLORS.forestLight}, ${COLORS.forest})`,
              border: `1.5px solid ${COLORS.gold}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: `0 0 16px ${COLORS.gold}33`,
            }}
          >
            <span
              style={{
                color: COLORS.gold,
                fontSize: "14px",
                fontFamily: "serif",
                fontWeight: 700,
              }}
            >
              LC
            </span>
          </div>
          <span
            style={{
              fontFamily: "'Playfair Display', 'Georgia', serif",
              fontSize: "1.3rem",
              fontWeight: 700,
              color: COLORS.cream,
              letterSpacing: "0.08em",
            }}
          >
            La Cena
          </span>
        </div>

        {/* Desktop links */}
        <div
          style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}
          className="nav-desktop"
        >
          {["hero", "about", "gallery", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: COLORS.sageLight,
                fontSize: "0.8rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                fontFamily: "inherit",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = COLORS.gold)}
              onMouseLeave={(e) => (e.target.style.color = COLORS.sageLight)}
            >
              {id === "hero"
                ? "Home"
                : id === "about"
                ? "About"
                : id === "gallery"
                ? "Gallery"
                : "Contact"}
            </button>
          ))}
          <a
            href="tel:7304673043"
            style={{
              padding: "0.5rem 1.4rem",
              background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`,
              border: `1px solid ${COLORS.forestMid}`,
              color: COLORS.forest,
              fontFamily: "'Playfair Display', serif",
              fontWeight: 600,
              fontSize: "0.85rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              borderRadius: "2px",
              transition: "all 0.25s",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = COLORS.forest;
              e.target.style.color = COLORS.gold;
              e.target.style.border = `1px solid ${COLORS.gold}`;
            }}
            onMouseLeave={(e) => {
              e.target.style.background = `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`;
              e.target.style.color = COLORS.forest;
              e.target.style.border = `1px solid ${COLORS.forestMid}`;
            }}
          >
            Reserve
          </a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-mobile"
          style={{
            background: "none",
            border: `1px solid ${COLORS.border}`,
            cursor: "pointer",
            padding: "0.4rem 0.6rem",
            borderRadius: "4px",
            display: "none",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{ width: 20, height: 1.5, background: COLORS.sageLight }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: 64,
            left: 0,
            right: 0,
            zIndex: 99,
            background: "rgba(10,13,10,0.97)",
            backdropFilter: "blur(24px)",
            padding: "1.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
          }}
        >
          {["hero", "about", "gallery", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: COLORS.sageLight,
                fontSize: "0.9rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textAlign: "left",
                fontFamily: "inherit",
              }}
            >
              {id === "hero"
                ? "Home"
                : id === "about"
                ? "About"
                : id === "gallery"
                ? "Gallery"
                : "Contact"}
            </button>
          ))}
          <a
            href="tel:7304673043"
            style={{
              padding: "0.8rem 1.5rem",
              background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`,
              border: `1px solid ${COLORS.forestMid}`,
              color: COLORS.forest,
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "1rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              borderRadius: "2px",
              marginTop: "1rem",
              textAlign: "center",
            }}
          >
            Reserve a Table
          </a>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,700;1,6..96,400;1,6..96,700&family=Corben:wght@400;700&display=swap');
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: flex !important; }
          .gallery-grid { grid-template-columns: 1fr !important; }
          .gallery-section { padding: 4rem 1rem !important; }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: ${COLORS.bg}; color: ${COLORS.cream}; font-family: 'DM Sans', sans-serif; overflow-x: hidden; }
        .gallery-grid { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
        ::selection { background: ${COLORS.forestMid}; color: ${COLORS.cream}; }
      `}</style>
    </>
  );
}

// ─── HERO ──────────────────────────────────────
function Hero() {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    const delays = [100, 400, 900, 1300, 1700, 2100, 2100];
    const timers = delays.map((d, i) => setTimeout(() => setPhase(i + 1), d));
    return () => timers.forEach(clearTimeout);
  }, []);
  const show = (n) => phase >= n;

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        height: "100vh",
        minHeight: 640,
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* BG — Luxury Green Blur */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(circle at 50% 50%, ${COLORS.forestMid} 0%, ${COLORS.forest} 50%, ${COLORS.bg} 100%)`,
          filter: "blur(60px)",
          transform: show(1) ? "scale(1.06)" : "scale(1.18)",
          transition: "transform 18s cubic-bezier(0.22,1,0.36,1)",
          willChange: "transform",
        }}
      />

      {/* Layered overlays */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse 80% 60% at 50% 100%, ${COLORS.forest}60 0%, transparent 65%), radial-gradient(ellipse 50% 40% at 50% 50%, ${COLORS.bg}44 0%, transparent 70%), linear-gradient(to top, ${COLORS.bg} 0%, ${COLORS.bg}22 25%, transparent 55%), linear-gradient(to bottom, ${COLORS.bg}cc 0%, transparent 22%)`,
        }}
      />

      {/* Film grain */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.035,
          pointerEvents: "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px",
        }}
      />

      {/* ── Corner brackets drawn with SVG stroke animation ── */}
      {[
        { pos: { top: "9%", left: "4%" }, rotate: 0 },
        { pos: { top: "9%", right: "4%" }, rotate: 90 },
        { pos: { bottom: "13%", left: "4%" }, rotate: 270 },
        { pos: { bottom: "13%", right: "4%" }, rotate: 180 },
      ].map(({ pos, rotate }, i) => (
        <svg
          key={i}
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          style={{
            position: "absolute",
            ...pos,
            opacity: show(7) ? 0.38 : 0,
            transform: `rotate(${rotate}deg)`,
            transition: `opacity 2.0s cubic-bezier(0.22,1,0.36,1) ${0.2 * i}s`,
          }}
        >
          <path
            d="M42 10 H10 V42"
            stroke={COLORS.gold}
            strokeWidth="1"
            strokeLinecap="round"
            strokeDasharray="90"
            strokeDashoffset={show(7) ? "0" : "90"}
            style={{
              transition: `stroke-dashoffset 2.1s cubic-bezier(0.22,1,0.36,1) ${
                0.2 + i * 0.2
              }s`,
            }}
          />
          <circle
            cx="10"
            cy="10"
            r="2.5"
            fill={COLORS.gold}
            opacity={show(7) ? 0.7 : 0}
            style={{ transition: `opacity 1.0s cubic-bezier(0.22,1,0.36,1) ${0.8 + i * 0.1}s` }}
          />
        </svg>
      ))}

      {/* ── Vertical gold rules with draw animation ── */}
      {["7%", "93%"].map((x, i) => (
        <svg
          key={x}
          style={{
            position: "absolute",
            left: x,
            top: "18%",
            height: "64%",
            width: 2,
          }}
          preserveAspectRatio="none"
        >
          <line
            x1="1"
            y1="0%"
            x2="1"
            y2="100%"
            stroke={COLORS.gold}
            strokeWidth="1"
            opacity="0.35"
            strokeDasharray="1000"
            strokeDashoffset={show(7) ? "0" : "1000"}
            style={{
              transition: `stroke-dashoffset 2.9s cubic-bezier(0.22,1,0.36,1) ${
                0.4 + i * 0.3
              }s`,
            }}
          />
        </svg>
      ))}

      {/* ── Horizontal shimmer rules ── */}
      {["-200px", "170px"].map((mt, i) => (
        <div
          key={mt}
          style={{
            position: "absolute",
            left: "8%",
            right: "8%",
            top: "50%",
            height: 1,
            marginTop: mt,
            background: `linear-gradient(to right, transparent, ${COLORS.gold}18, ${COLORS.gold}55, ${COLORS.gold}18, transparent)`,
            opacity: show(7) ? 1 : 0,
            transition: `opacity 2.0s cubic-bezier(0.22,1,0.36,1) ${1.0 + i * 0.2}s`,
          }}
        />
      ))}

      {/* ── Floating dust particles ── */}
      {[
        { top: "23%", left: "11%", s: 3, d: "0s", dur: "6s" },
        { top: "64%", left: "7%", s: 2, d: "1.2s", dur: "8s" },
        { top: "37%", right: "10%", s: 2.5, d: "0.5s", dur: "7s" },
        { top: "71%", right: "13%", s: 2, d: "2s", dur: "9s" },
        { top: "47%", left: "17%", s: 1.5, d: "3s", dur: "5.5s" },
        { top: "29%", right: "19%", s: 1.5, d: "1.8s", dur: "7.5s" },
        { top: "55%", left: "32%", s: 1, d: "2.5s", dur: "10s" },
        { top: "42%", right: "31%", s: 1, d: "0.9s", dur: "6.5s" },
      ].map((p, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            top: p.top,
            left: p.left,
            right: p.right,
            width: p.s,
            height: p.s,
            borderRadius: "50%",
            background: COLORS.gold,
            opacity: show(7) ? 0.45 : 0,
            transition: `opacity 1.5s cubic-bezier(0.22,1,0.36,1) ${parseFloat(p.d) + 0.5}s`,
            animation: `heroDust ${p.dur} ease-in-out ${p.d} infinite`,
            boxShadow: `0 0 ${p.s * 3}px ${COLORS.gold}88`,
            pointerEvents: "none",
          }}
        />
      ))}

      {/* ── MAIN CONTENT ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 2rem",
          maxWidth: 800,
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.9rem",
            marginBottom: "1.8rem",
            opacity: show(2) ? 1 : 0,
            transform: show(2) ? "translateY(0)" : "translateY(14px)",
            transition: "all 0.9s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <svg width="28" height="1" style={{ display: "block" }}>
            <line
              x1="0"
              y1="0.5"
              x2="28"
              y2="0.5"
              stroke={COLORS.gold}
              strokeWidth="1"
              opacity="0.65"
              strokeDasharray="28"
              strokeDashoffset={show(2) ? "0" : "28"}
              style={{ transition: "stroke-dashoffset 0.8s ease 0.3s" }}
            />
          </svg>
          <span
            style={{
              fontSize: "0.6rem",
              letterSpacing: "0.38em",
              textTransform: "uppercase",
              color: COLORS.gold,
            }}
          >
            {"Thane\u2019s Premier Nightclub"}
          </span>
          <svg width="28" height="1" style={{ display: "block" }}>
            <line
              x1="0"
              y1="0.5"
              x2="28"
              y2="0.5"
              stroke={COLORS.gold}
              strokeWidth="1"
              opacity="0.65"
              strokeDasharray="28"
              strokeDashoffset={show(2) ? "0" : "28"}
              style={{ transition: "stroke-dashoffset 0.8s ease 0.5s" }}
            />
          </svg>
        </div>

        {/* Title words staggered */}
        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(3.8rem, 11vw, 9rem)",
            fontWeight: 400,
            lineHeight: 0.9,
            letterSpacing: "0.02em",
            color: COLORS.cream,
            marginBottom: "0.1em",
            textShadow: `0 2px 80px ${COLORS.forest}, 0 0 120px ${COLORS.gold}18`,
          }}
        >
          {["La", "Cena"].map((word, i) => (
            <span
              key={word}
              style={{
                display: "inline-block",
                marginRight: i === 0 ? "0.28em" : 0,
                opacity: show(3) ? 1 : 0,
                transform: show(3) ? "translateY(0)" : "translateY(50px)",
                transition: `all 1.2s cubic-bezier(0.22,1,0.36,1) ${0.15 * i}s`,
              }}
            >
              {word}
            </span>
          ))}
        </h1>

        {/* Gold diamond divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            margin: "1.4rem auto 1.4rem",
            opacity: show(4) ? 1 : 0,
            transition: "opacity 1s ease 0.1s",
          }}
        >
          <div
            style={{
              width: show(4) ? 50 : 0,
              height: 1,
              background: `linear-gradient(to right, transparent, ${COLORS.gold}80)`,
              transition: "width 1.2s cubic-bezier(0.22,1,0.36,1) 0.2s",
            }}
          />
          <svg width="12" height="12" viewBox="0 0 12 12">
            <path
              d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z"
              fill={COLORS.gold}
              opacity="0.75"
            />
          </svg>
          <div
            style={{
              width: show(4) ? 50 : 0,
              height: 1,
              background: `linear-gradient(to left, transparent, ${COLORS.gold}80)`,
              transition: "width 1.2s cubic-bezier(0.22,1,0.36,1) 0.2s",
            }}
          />
        </div>

        {/* Tagline */}
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.25rem, 3vw, 2rem)",
            fontStyle: "italic",
            color: COLORS.sageLight,
            letterSpacing: "0.07em",
            lineHeight: 1.4,
            marginBottom: "2rem",
            opacity: show(4) ? 1 : 0,
            transform: show(4) ? "translateY(0)" : "translateY(18px)",
            transition: "all 1s cubic-bezier(0.22,1,0.36,1) 0.1s",
          }}
        >
          Where Nights Become Memories
        </p>

        {/* Premium Icons */}
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "3rem",
            opacity: show(5) ? 1 : 0,
            transform: show(5)
              ? "translateY(0) scale(1)"
              : "translateY(12px) scale(0.92)",
            transition: `all 0.7s cubic-bezier(0.22,1,0.36,1)`,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              border: `1px solid ${COLORS.gold}30`,
              background: `radial-gradient(circle at center, ${COLORS.gold}10 0%, transparent 70%)`,
              boxShadow: `0 0 20px ${COLORS.gold}10`,
            }}
          >
            <AnimatedMartini show={show(5)} />
          </div>
          
          <div
            style={{
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              background: COLORS.gold,
              opacity: 0.4,
            }}
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              border: `1px solid ${COLORS.gold}30`,
              background: `radial-gradient(circle at center, ${COLORS.gold}10 0%, transparent 70%)`,
              boxShadow: `0 0 20px ${COLORS.gold}10`,
            }}
          >
            <AnimatedCigarette show={show(5)} />
          </div>

          <div
            style={{
              width: "4px",
              height: "4px",
              borderRadius: "50%",
              background: COLORS.gold,
              opacity: 0.4,
            }}
          />

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              borderRadius: "50%",
              border: `1px solid ${COLORS.gold}30`,
              background: `radial-gradient(circle at center, ${COLORS.gold}10 0%, transparent 70%)`,
              boxShadow: `0 0 20px ${COLORS.gold}10`,
            }}
          >
            <AnimatedDisc show={show(5)} />
          </div>
        </div>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: "1.2rem",
            justifyContent: "center",
            flexWrap: "wrap",
            opacity: show(6) ? 1 : 0,
            transform: show(6) ? "translateY(0)" : "translateY(22px)",
            transition: "all 1s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <a
            href="tel:7304673043"
            style={{
              position: "relative",
              overflow: "hidden",
              padding: "1rem 3rem",
              background: `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`,
              border: `1px solid ${COLORS.forestMid}`,
              color: COLORS.forest,
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "0.95rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              borderRadius: "2px",
              boxShadow: `0 10px 50px ${COLORS.gold}55, inset 0 1px 0 rgba(255,255,255,0.5), 0 0 15px ${COLORS.gold}30`,
              transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = `0 20px 60px ${COLORS.gold}90, inset 0 1px 0 rgba(255,255,255,0.8), 0 0 25px ${COLORS.gold}50`;
              e.currentTarget.style.border = `1px solid ${COLORS.forest}`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = `0 10px 50px ${COLORS.gold}55, inset 0 1px 0 rgba(255,255,255,0.5), 0 0 15px ${COLORS.gold}30`;
              e.currentTarget.style.border = `1px solid ${COLORS.forestMid}`;
            }}
          >
            <motion.div
              initial={{ left: "-100%" }}
              animate={{ left: "200%" }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "linear",
              }}
              style={{
                position: "absolute",
                top: 0,
                width: "150px",
                height: "100%",
                background: `linear-gradient(to right, transparent, rgba(255,255,255,0), rgba(255,255,255,0.4), rgba(255,255,255,0.8), rgba(255,255,255,0.4), rgba(255,255,255,0), transparent)`,
                transform: "skewX(-35deg)",
                zIndex: 1,
                filter: "blur(4px)",
              }}
            />
            <span style={{ position: "relative", zIndex: 2 }}>Reserve a Table</span>
          </a>

          <button
            onClick={() =>
              document
                .getElementById("captured-moments")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            style={{
              padding: "1rem 3rem",
              background: "transparent",
              border: `1px solid ${COLORS.gold}50`,
              color: COLORS.gold,
              cursor: "pointer",
              fontSize: "0.7rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              borderRadius: "2px",
              fontFamily: "inherit",
              transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `${COLORS.gold}14`;
              e.currentTarget.style.boxShadow = `0 0 30px ${COLORS.gold}22`;
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            View Gallery
          </button>
        </div>
      </div>

      {/* Luxury scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "1rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.6rem",
          opacity: show(7) ? 0.8 : 0,
          transition: "opacity 1s ease 1.5s",
        }}
      >
        <span
          style={{
            fontSize: "0.55rem",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: COLORS.gold,
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 400,
            opacity: 0.9,
          }}
        >
          Scroll to Discover
        </span>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <div
            style={{
              width: "1px",
              height: "40px",
              background: `linear-gradient(to bottom, transparent, ${COLORS.gold}40, transparent)`,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "50%",
                background: `linear-gradient(to bottom, transparent, ${COLORS.gold}, transparent)`,
                animation: "scrollLine 2s cubic-bezier(0.645, 0.045, 0.355, 1) infinite",
              }}
            />
          </div>
          <div 
            style={{
              width: "5px",
              height: "5px",
              background: COLORS.gold,
              transform: "rotate(45deg)",
              opacity: 0.8,
              boxShadow: `0 0 8px ${COLORS.gold}`,
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes scrollLine { 
          0% { transform: translateY(-100%); opacity: 0; } 
          50% { opacity: 1; }
          100% { transform: translateY(200%); opacity: 0; } 
        }
        @keyframes heroDust {
          0%,100%{transform:translate(0,0) scale(1);opacity:0.45}
          33%{transform:translate(7px,-12px) scale(1.4);opacity:0.8}
          66%{transform:translate(-5px,7px) scale(0.7);opacity:0.25}
        }
      `}</style>
    </section>
  );
}
// ─── CIRCULAR PROGRESS SVG ──────────────────────────────────────
function RingProgress({ progress, color, size = 90, stroke = 2 }) {
  const r = (size - stroke * 2) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (progress / 100) * circ;
  return (
    <svg
      width={size}
      height={size}
      style={{ transform: "rotate(-90deg)", display: "block" }}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color + "18"}
        strokeWidth={stroke}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        fill="none"
        stroke={color}
        strokeWidth={stroke}
        strokeDasharray={circ}
        strokeDashoffset={offset}
        strokeLinecap="round"
        style={{
          transition: "stroke-dashoffset 1.8s cubic-bezier(0.22,1,0.36,1)",
        }}
      />
    </svg>
  );
}

// ─── WAVEFORM BAR ────────────────────────────────────────────────
function WaveBar({ active, color, barCount = 24, progress }) {
  const bars = Array.from({ length: barCount }, (_, i) => {
    const angle = (i / barCount) * Math.PI;
    const h = 4 + Math.sin(angle * 2.5 + i * 0.4) * 14 + Math.sin(i * 0.7) * 8;
    const filled = active && (i / barCount) * 100 <= progress;
    return { h: Math.max(4, h), filled };
  });
  return (
    <div
      style={{ display: "flex", alignItems: "flex-end", gap: 2, height: 32 }}
    >
      {bars.map(({ h, filled }, i) => (
        <div
          key={i}
          style={{
            width: 3,
            borderRadius: 2,
            height: filled ? h : 4,
            background: filled ? color : color + "28",
            transition: `height ${0.8 + i * 0.02}s cubic-bezier(0.22,1,0.36,1)`,
          }}
        />
      ))}
    </div>
  );
}

// ─── STATS ─────────────────────────────────────────────────────
function Stats() {
  const [ref, inView] = useInView(0.25);
  const h = useCounter(457, inView, 2000);
  const p = useCounter(500, inView, 1600);
  const v = useCounter(10000, inView, 2200);
  const d = useCounter(100, inView, 1400);

  const items = [
    {
      val: h,
      target: 457,
      suffix: "",
      label: "Hours of Music",
      sublabel: "Every month",
      color: COLORS.gold,
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke={COLORS.gold}
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      ),
      motif: "wave",
    },
    {
      val: p,
      target: 500,
      suffix: "+",
      label: "Parties Last Month",
      sublabel: "& counting",
      color: COLORS.crimsonLight,
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke={COLORS.crimsonLight}
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      ),
      motif: "ring",
    },
    {
      val: v,
      target: 10000,
      suffix: "+",
      label: "Monthly Visitors",
      sublabel: "Thane's favourite",
      color: COLORS.sage,
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke={COLORS.sage}
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      ),
      motif: "ring",
    },
    {
      val: d,
      target: 100,
      suffix: "+",
      label: "DJs Performed",
      sublabel: "World-class talent",
      color: COLORS.roseLight,
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke={COLORS.roseLight}
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
        </svg>
      ),
      motif: "wave",
    },
  ];

  return (
    <section
      ref={ref}
      style={{
        padding: "7rem 2.5rem",
        background: `linear-gradient(180deg, ${COLORS.bg} 0%, ${COLORS.forest}16 35%, ${COLORS.forest}16 65%, ${COLORS.bg} 100%)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient glow blobs */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "15%",
          width: 400,
          height: 400,
          background: `radial-gradient(circle, ${COLORS.forest}22, transparent 70%)`,
          pointerEvents: "none",
          borderRadius: "50%",
          animation: "floatA 8s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          width: 350,
          height: 350,
          background: `radial-gradient(circle, ${COLORS.crimson}14, transparent 70%)`,
          pointerEvents: "none",
          borderRadius: "50%",
          animation: "floatB 10s ease-in-out infinite",
        }}
      />

      {/* Decorative horizontal rule */}
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto 3.5rem",
          display: "flex",
          alignItems: "center",
          gap: "1.5rem",
        }}
      >
        <div
          style={{
            flex: 1,
            height: 1,
            background: `linear-gradient(to right, transparent, ${COLORS.gold}33)`,
          }}
        />
        <div
          style={{
            fontSize: "0.6rem",
            letterSpacing: "0.3em",
            color: COLORS.gold,
            textTransform: "uppercase",
          }}
        >
          By The Numbers
        </div>
        <div
          style={{
            flex: 1,
            height: 1,
            background: `linear-gradient(to left, transparent, ${COLORS.gold}33)`,
          }}
        />
      </div>

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1.5rem",
          position: "relative",
          justifyContent: "center",
        }}
      >
        {items.map(
          ({ val, target, suffix, label, sublabel, color, icon, motif }, i) => {
            const pct = Math.round((val / target) * 100);
            return (
              <div
                key={label}
                style={{
                  padding: "2rem 1.8rem",
                  background: `linear-gradient(145deg, ${COLORS.bgCard}, ${COLORS.bg})`,
                  border: `1px solid ${color}22`,
                  borderRadius: "12px",
                  position: "relative",
                  overflow: "hidden",
                  opacity: inView ? 1 : 0,
                  transform: inView
                    ? "translateY(0) scale(1)"
                    : "translateY(30px) scale(0.96)",
                  transition: `all 0.8s cubic-bezier(0.22,1,0.36,1) ${
                    i * 0.12
                  }s`,
                  boxShadow: inView ? `0 8px 40px ${color}12` : "none",
                }}
              >
                {/* Corner glow */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: 120,
                    height: 120,
                    background: `radial-gradient(circle at top right, ${color}18, transparent 70%)`,
                    pointerEvents: "none",
                  }}
                />

                {/* Top row: icon + ring */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "1.4rem",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "10px",
                      background: `${color}18`,
                      border: `1px solid ${color}30`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {icon}
                  </div>
                  {motif === "ring" ? (
                    <RingProgress
                      progress={pct}
                      color={color}
                      size={44}
                      stroke={2.5}
                    />
                  ) : (
                    <WaveBar active={inView} color={color} progress={pct} />
                  )}
                </div>

                {/* Number */}
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(2.8rem, 4.5vw, 3.8rem)",
                    fontWeight: 500,
                    color: color,
                    lineHeight: 1,
                    letterSpacing: "-0.02em",
                    textShadow: `0 0 40px ${color}50`,
                    marginBottom: "0.3rem",
                  }}
                >
                  {val.toLocaleString()}
                  {suffix}
                </div>

                {/* Label */}
                <div
                  style={{
                    fontSize: "0.7rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: COLORS.muted,
                    marginBottom: "0.2rem",
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontSize: "0.65rem",
                    color: color + "88",
                    letterSpacing: "0.05em",
                  }}
                >
                  {sublabel}
                </div>

                {/* Bottom progress bar */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: `${color}15`,
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: inView ? `${pct}%` : "0%",
                      background: `linear-gradient(to right, ${color}60, ${color})`,
                      borderRadius: "0 2px 2px 0",
                      transition: `width 2s cubic-bezier(0.22,1,0.36,1) ${
                        i * 0.12 + 0.3
                      }s`,
                      boxShadow: `0 0 8px ${color}`,
                    }}
                  />
                </div>
              </div>
            );
          }
        )}
      </div>

      <style>{`
        @keyframes floatA { 0%,100%{transform:translate(0,0)} 50%{transform:translate(20px,-20px)} }
        @keyframes floatB { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-15px,15px)} }
      `}</style>
    </section>
  );
}

// ─── ABOUT ─────────────────────────────────────────────────────
function About() {
  const [ref, inView] = useInView(0.15);
  const [activeFeature, setActiveFeature] = useState(null);

  const IconBar = () => (
    <motion.svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      animate={{ rotate: [-3, 3, -3] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
    >
      <path
        stroke={COLORS.gold}
        strokeWidth="1.3"
        d="M8 22H16M12 11V22M3 8L5 2H19L21 8"
      />
      <motion.path
        stroke={COLORS.gold}
        strokeWidth="1.3"
        d="M3 8C3 8 5 10 8.5 10C10.5 10 11.5 9 12 8.5C12.5 9 13.5 10 15.5 10C19 10 21 8 21 8"
        animate={{ y: [0, -1, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />
      <motion.circle 
        cx="12" cy="18" r="1" fill={COLORS.gold} stroke="none" 
        animate={{ y: [0, -8], opacity: [0.8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
      />
    </motion.svg>
  );
  const IconDJ = () => (
    <motion.svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.circle 
        cx="12" cy="12" r="3" stroke={COLORS.sage} strokeWidth="1.3" 
        animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      />
      <circle
        cx="12"
        cy="12"
        r="8"
        stroke={COLORS.sage}
        strokeWidth="1.3"
        strokeOpacity="0.25"
      />
      <motion.path
        stroke={COLORS.sage}
        strokeWidth="1.3"
        d="M12 2v2M12 20v2M2 12h2M20 12h2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
        style={{ transformOrigin: "12px 12px" }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
      />
    </motion.svg>
  );
  const IconFood = () => (
    <motion.svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.path
        stroke={COLORS.roseLight}
        strokeWidth="1.3"
        d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 002-2V2 M7 2v20"
        animate={{ y: [0, -2, 0], rotate: [0, -3, 0] }}
        style={{ transformOrigin: "7px 20px" }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />
      <motion.path
        stroke={COLORS.roseLight}
        strokeWidth="1.3"
        d="M21 15V2a5 5 0 00-5 5v6h3.5 M16 22v-4"
        animate={{ y: [0, 2, 0], rotate: [0, 3, 0] }}
        style={{ transformOrigin: "16px 20px" }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />
    </motion.svg>
  );
  const IconBooth = () => (
    <motion.svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <motion.rect
        x="3"
        y="11"
        width="18"
        height="10"
        rx="2"
        stroke={COLORS.goldLight}
        strokeWidth="1.3"
        animate={{ y: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />
      <path
        stroke={COLORS.goldLight}
        strokeWidth="1.3"
        d="M3 13V9a2 2 0 012-2h14a2 2 0 012 2v4M7 21v2M17 21v2"
      />
      <motion.path
        stroke={COLORS.goldLight}
        strokeWidth="1.3"
        strokeOpacity="0.4"
        d="M8 11V9M12 11V9M16 11V9"
        animate={{ y: [0, 1, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.2 }}
      />
    </motion.svg>
  );
  const IconTV = () => (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect
        x="2"
        y="3"
        width="20"
        height="14"
        rx="2"
        stroke={COLORS.crimsonLight}
        strokeWidth="1.3"
      />
      <path
        stroke={COLORS.crimsonLight}
        strokeWidth="1.3"
        d="M8 21h8M12 17v4"
      />
      <polygon points="10,8 16,11 10,14" fill={COLORS.crimsonLight} />
    </svg>
  );
  const IconStar = () => (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        stroke={COLORS.sageLight}
        strokeWidth="1.3"
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      />
      <path
        stroke={COLORS.sageLight}
        strokeWidth="1.3"
        strokeOpacity="0.2"
        d="M12 6v12M6 9l12 6M6 15l12-6"
      />
    </svg>
  );

  const features = [
    {
      icon: <IconBar />,
      title: "Premium Bar",
      desc: "Curated cocktails, aged spirits, and artisan blends crafted by expert mixologists.",
    },
    {
      icon: <IconDJ />,
      title: "Live DJs",
      desc: "World-class DJ performances every weekend, creating an electric atmosphere.",
    },
    {
      icon: <IconFood />,
      title: "Fusion Cuisine",
      desc: "Jain-friendly menu featuring Turkish, Italian, and Indian fusion in one elegant space.",
    },
    {
      icon: <IconBooth />,
      title: "Private Booths",
      desc: "Intimate booth seating perfect for romantic dinners or celebratory gatherings.",
    },
    {
      icon: <IconTV />,
      title: "Sports Screening",
      desc: "Live sports on high-definition screens — never miss a moment of the action.",
    },
    {
      icon: <IconStar />,
      title: "Happy Hours",
      desc: "Daily happy hours with exclusive offers to keep the good times flowing.",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "7rem 2.5rem",
        maxWidth: 1200,
        margin: "0 auto",
        background: COLORS.bg,
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "start",
        }}
        className="about-grid"
      >
        {/* Left */}
        <div
          style={{
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(-30px)",
            transition: "all 0.9s ease",
          }}
        >
          <div
            style={{
              width: 40,
              height: 1.5,
              background: COLORS.crimsonMid,
              marginBottom: "1.5rem",
            }}
          />
          <div style={{ display: "flex", alignItems: "center" }}>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                color: COLORS.cream,
                marginBottom: "1.5rem",
              }}
            >
              Not Just
              <br />
              <em style={{ color: COLORS.sage }}>a Night Out.</em>
            </h2>
            <AnimatedDiscoBall show={inView} />
          </div>
          <p
            style={{
              color: COLORS.muted,
              lineHeight: 1.9,
              fontSize: "0.9rem",
              marginBottom: "1.5rem",
            }}
          >
            Welcome to the best nightclub in Thane, where unforgettable nights
            come to life. Enjoy a full bar featuring an array of cocktails,
            complemented by delicious Jain food.
          </p>
          <p
            style={{
              color: COLORS.muted,
              lineHeight: 1.9,
              fontSize: "0.9rem",
              marginBottom: "2.5rem",
            }}
          >
            With ample parking and family-friendly amenities, our indoor seating
            and cozy booth options create the perfect ambiance — whether you're
            in the mood for romantic dining or a lively gathering.
          </p>

          {/* Hours */}
          <div
            style={{
              padding: "1.5rem",
              border: `1px solid ${COLORS.borderGold}`,
              background: `${COLORS.forest}18`,
              borderRadius: "4px",
            }}
          >
            <div
              style={{
                fontSize: "0.65rem",
                letterSpacing: "0.2em",
                color: COLORS.gold,
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Opening Hours
            </div>
            <AutoScrollHours />
          </div>
        </div>

        {/* Right — Feature Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateX(0)" : "translateX(30px)",
            transition: "all 0.9s ease 0.2s",
          }}
        >
          {features.map((feature) => (
            <motion.button
              layoutId={`feature-${feature.title}`}
              key={feature.title}
              onClick={() => setActiveFeature(feature)}
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "2rem 1rem",
                background: `linear-gradient(145deg, ${COLORS.bgCard}, ${COLORS.bg})`,
                border: `1px solid ${COLORS.gold}60`,
                borderRadius: "12px",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1.2rem",
                boxShadow: `0 4px 20px rgba(0,0,0,0.2), inset 0 0 10px ${COLORS.gold}10`,
              }}
            >
              <motion.div
                layoutId={`feature-icon-${feature.title}`}
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "14px",
                  background: `${COLORS.forest}30`,
                  border: `1px solid ${COLORS.gold}40`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: `inset 0 1px 0 ${COLORS.gold}22`,
                }}
              >
                {feature.icon}
              </motion.div>
              <motion.div
                layoutId={`feature-title-${feature.title}`}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: COLORS.gold,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {feature.title}
              </motion.div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeFeature && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveFeature(null)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(10, 13, 10, 0.8)",
                backdropFilter: "blur(8px)",
                zIndex: 1000,
              }}
            />
            <div
              style={{
                position: "fixed",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1001,
                pointerEvents: "none",
              }}
            >
              <motion.div
                layoutId={`feature-${activeFeature.title}`}
                style={{
                  width: "90%",
                  maxWidth: 400,
                  background: `linear-gradient(145deg, ${COLORS.bgCard}, ${COLORS.bg})`,
                  border: `1px solid ${COLORS.gold}40`,
                  borderRadius: "20px",
                  padding: "3rem 2rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  pointerEvents: "auto",
                  boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px ${COLORS.gold}20`,
                  position: "relative",
                }}
              >
                <motion.button
                  onClick={() => setActiveFeature(null)}
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    background: "none",
                    border: "none",
                    color: COLORS.muted,
                    cursor: "pointer",
                    padding: "0.5rem",
                  }}
                  whileHover={{ scale: 1.1, color: COLORS.cream }}
                  whileTap={{ scale: 0.9 }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </motion.button>

                <motion.div
                  layoutId={`feature-icon-${activeFeature.title}`}
                  style={{
                    width: 80,
                    height: 80,
                    borderRadius: "20px",
                    background: `${COLORS.forest}40`,
                    border: `1px solid ${COLORS.gold}50`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                    boxShadow: `0 0 30px ${COLORS.forest}40, inset 0 1px 0 ${COLORS.gold}40`,
                  }}
                >
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  >
                    {activeFeature.icon}
                  </motion.div>
                </motion.div>

                <motion.h3
                  layoutId={`feature-title-${activeFeature.title}`}
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: COLORS.gold,
                    marginBottom: "1rem",
                    fontFamily: "'Playfair Display', serif",
                    letterSpacing: "0.02em",
                  }}
                >
                  {activeFeature.title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ delay: 0.1 }}
                  style={{
                    fontSize: "0.95rem",
                    color: COLORS.sageLight,
                    lineHeight: 1.6,
                  }}
                >
                  {activeFeature.desc}
                </motion.p>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}

// ─── GALLERY ──────────────────────────────────────────────────
function Gallery() {
  const [ref, inView] = useInView(0.1);
  const [lightbox, setLightbox] = useState(null);
  const [showGallery, setShowGallery] = useState(false);
  const [activeCategory, setActiveCategory] = useState("bar");

  // Lock scroll when gallery is open
  useEffect(() => {
    if (showGallery) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showGallery]);

  const categories = [
    { id: "bar", label: "Bar" },
    { id: "dj", label: "DJ" },
    { id: "festivals", label: "Festivals" },
  ];

  return (
    <section
      id="gallery"
      className="gallery-section"
      ref={ref}
      style={{
        padding: "6rem 2.5rem",
        background: `linear-gradient(180deg, ${COLORS.bg} 0%, ${COLORS.bgCard} 30%, ${COLORS.bgCard} 70%, ${COLORS.bg} 100%)`,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem", display: "flex", justifyContent: "center" }}>
          <motion.svg
            width="280"
            height="280"
            viewBox="0 0 140 140"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="beer-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={COLORS.gold} stopOpacity="0.85" />
                <stop offset="100%" stopColor="#8B6508" stopOpacity="0.95" />
              </linearGradient>
              <linearGradient id="glass-shine" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="white" stopOpacity="0.5" />
                <stop offset="20%" stopColor="white" stopOpacity="0.0" />
                <stop offset="80%" stopColor="white" stopOpacity="0.0" />
                <stop offset="100%" stopColor="white" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            {/* Left Glass */}
            <motion.g
              animate={{
                rotate: [0, 12, 0],
                x: [0, 15, 0],
                y: [0, -8, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: "35px 110px" }}
            >
              {/* Handle */}
              <path d="M25 55 L12 55 Q5 55 5 70 L5 85 Q5 100 12 100 L32 100" fill="none" stroke={COLORS.gold} strokeWidth="3" strokeLinecap="round" />
              
              {/* Glass Body */}
              <path d="M20 30 L28 110 Q29 115 35 115 L55 115 Q61 115 62 110 L70 30 Z" fill="url(#beer-grad)" stroke={COLORS.gold} strokeWidth="2" strokeLinejoin="round" />
              
              {/* Shine */}
              <path d="M20 30 L28 110 Q29 115 35 115 L55 115 Q61 115 62 110 L70 30 Z" fill="url(#glass-shine)" />
              
              {/* Bubbles */}
              <motion.circle cx="35" cy="100" r="1.5" fill="white" animate={{ y: [0, -60], opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeIn", delay: 0.2 }} />
              <motion.circle cx="45" cy="95" r="2" fill="white" animate={{ y: [0, -50], opacity: [0, 1, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeIn", delay: 0.7 }} />
              <motion.circle cx="55" cy="105" r="1" fill="white" animate={{ y: [0, -65], opacity: [0, 1, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeIn", delay: 0.4 }} />

              {/* Foam */}
              <path d="M18 30 Q25 15 35 25 Q45 15 55 25 Q65 15 72 30 Q70 45 45 45 Q20 45 18 30 Z" fill="white" />
              
              {/* Details */}
              <path d="M35 45 L40 105 M45 45 L50 105 M55 45 L60 105" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" />
            </motion.g>

            {/* Right Glass */}
            <motion.g
              animate={{
                rotate: [0, -12, 0],
                x: [0, -15, 0],
                y: [0, -8, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ transformOrigin: "105px 110px" }}
            >
              {/* Handle */}
              <path d="M115 55 L128 55 Q135 55 135 70 L135 85 Q135 100 128 100 L108 100" fill="none" stroke={COLORS.gold} strokeWidth="3" strokeLinecap="round" />
              
              {/* Glass Body */}
              <path d="M120 30 L112 110 Q111 115 105 115 L85 115 Q79 115 78 110 L70 30 Z" fill="url(#beer-grad)" stroke={COLORS.gold} strokeWidth="2" strokeLinejoin="round" />
              
              {/* Shine */}
              <path d="M120 30 L112 110 Q111 115 105 115 L85 115 Q79 115 78 110 L70 30 Z" fill="url(#glass-shine)" />
              
              {/* Bubbles */}
              <motion.circle cx="105" cy="100" r="1.5" fill="white" animate={{ y: [0, -60], opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeIn", delay: 0.5 }} />
              <motion.circle cx="95" cy="95" r="2" fill="white" animate={{ y: [0, -50], opacity: [0, 1, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeIn", delay: 0.1 }} />
              <motion.circle cx="85" cy="105" r="1" fill="white" animate={{ y: [0, -65], opacity: [0, 1, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeIn", delay: 0.8 }} />

              {/* Foam */}
              <path d="M122 30 Q115 15 105 25 Q95 15 85 25 Q75 15 68 30 Q70 45 95 45 Q120 45 122 30 Z" fill="white" />
              
              {/* Details */}
              <path d="M105 45 L100 105 M95 45 L90 105 M85 45 L80 105" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" />
            </motion.g>

            {/* Clink Effect */}
            <motion.g
              animate={{
                opacity: [0, 0, 1, 0, 0],
                scale: [0.5, 0.5, 1.3, 0.5, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                times: [0, 0.45, 0.5, 0.55, 1]
              }}
              style={{ transformOrigin: "70px 40px" }}
            >
              <circle cx="70" cy="40" r="3" fill="white" />
              <path d="M70 30 L70 15 M80 40 L95 40 M70 50 L70 65 M60 40 L45 40 M77 33 L87 23 M63 47 L53 57 M63 33 L53 23 M77 47 L87 57" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </motion.g>
          </motion.svg>
        </div>

        <AnimatePresence mode="wait">
          {!showGallery ? (
            <motion.div
              id="captured-moments"
              key="button-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "4rem 0",
                gap: "3rem",
                scrollMarginTop: "100px",
              }}
            >
              <motion.div
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                  fontWeight: 300,
                  letterSpacing: "0.02em",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1.5rem",
                  flexWrap: "wrap",
                }}
              >
                <motion.span
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    fontFamily: "'Corben', serif",
                    fontStyle: "normal",
                    fontSize: "clamp(3rem, 7vw, 5.5rem)",
                    fontWeight: 700,
                    letterSpacing: "0.03em",
                    background: `linear-gradient(to right, ${COLORS.cream}, ${COLORS.gold}, ${COLORS.cream})`,
                    backgroundSize: "200% auto",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                    paddingRight: "0.5rem",
                    paddingBottom: "0.5rem",
                  }}
                >
                  see the love
                </motion.span>

                {/* Bouncing Heart with Arrow */}
                <motion.svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 40 40"
                  style={{ overflow: "visible", fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
                >
                  <defs>
                    <linearGradient id="heart-grad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor={COLORS.crimsonLight} />
                      <stop offset="100%" stopColor={COLORS.crimsonMid} />
                    </linearGradient>
                    <linearGradient id="arrow-grad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor={COLORS.goldLight} />
                      <stop offset="100%" stopColor={COLORS.gold} />
                    </linearGradient>
                    <filter id="glow-arrow">
                      <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>

                  <motion.g
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    {/* Heart Path */}
                    <path
                      d="M20 34.5l-2.4-2.2C8.6 23.5 3 18.4 3 12.1 3 7 7 3 12.1 3c2.9 0 5.7 1.4 7.5 3.5C21.4 4.4 24.2 3 27.1 3 32.2 3 36 7 36 12.1c0 6.3-5.6 11.4-14.6 20.2L20 34.5z"
                      fill="url(#heart-grad)"
                      style={{ filter: "drop-shadow(0px 8px 16px rgba(181, 34, 54, 0.4))" }}
                    />

                    {/* Arrow Group */}
                    <motion.g
                      initial={{ x: -50, y: -50, opacity: 0 }}
                      whileInView={{ x: 0, y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 1.2, type: "spring", stiffness: 200, damping: 15 }}
                    >
                      {/* Top Left Shaft */}
                      <line x1="-14" y1="-14" x2="8" y2="8" stroke="url(#arrow-grad)" strokeWidth="2.5" strokeLinecap="round" filter="url(#glow-arrow)" />
                      {/* Fletching */}
                      <path d="M -8 -8 L -12 -4 M -8 -8 L -4 -12 M -14 -14 L -18 -10 M -14 -14 L -10 -18" stroke="url(#arrow-grad)" strokeWidth="2" strokeLinecap="round" />
                      
                      {/* Bottom Right Shaft */}
                      <line x1="25" y1="25" x2="42" y2="42" stroke="url(#arrow-grad)" strokeWidth="2.5" strokeLinecap="round" filter="url(#glow-arrow)" />
                      {/* Arrow Head */}
                      <polygon points="46,46 36,42 42,36" fill="url(#arrow-grad)" filter="url(#glow-arrow)" />
                    </motion.g>
                  </motion.g>
                </motion.svg>
              </motion.div>

              <motion.button
                onClick={() => setShowGallery(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: `linear-gradient(135deg, ${COLORS.bgCard}, ${COLORS.forest}22)`,
                  border: `1px solid ${COLORS.gold}40`,
                  padding: "8rem 2rem",
                  width: "90%",
                  maxWidth: "1000px",
                  borderRadius: "8px",
                  color: COLORS.gold,
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "1.5rem",
                  fontSize: "0.9rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  fontFamily: "inherit",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: `0 20px 50px rgba(0,0,0,0.5), inset 0 1px 0 ${COLORS.gold}15`,
                }}
              >
                {/* Camera Animation */}
                <div style={{ position: "relative" }}>
                  <motion.div
                    animate={{
                      rotate: [0, -5, 5, 0],
                      y: [0, -2, 2, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 4,
                      ease: "easeInOut",
                    }}
                  >
                    <svg
                      width="64"
                      height="64"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                      <circle cx="12" cy="13" r="4" />
                      <motion.circle
                        cx="12"
                        cy="13"
                        r="1.5"
                        fill={COLORS.gold}
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      />
                    </svg>
                  </motion.div>

                  {/* Lens Shimmer */}
                  <motion.div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      background: "white",
                      filter: "blur(8px)",
                      pointerEvents: "none",
                      zIndex: -1,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0, 0.3, 0],
                    }}
                    transition={{ repeat: Infinity, duration: 3 }}
                  />
                </div>

                <span style={{ position: "relative", zIndex: 1 }}>
                  Captured Moments
                </span>

                {/* Premium Shimmer Line */}
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    repeat: Infinity,
                    duration: 2.5,
                    ease: "linear",
                  }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: `linear-gradient(90deg, transparent, ${COLORS.gold}15, transparent)`,
                    pointerEvents: "none",
                  }}
                />
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="gallery-popup"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: "fixed",
                inset: 0,
                zIndex: 2000,
                background: `${COLORS.bg}f2`,
                backdropFilter: "blur(15px)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "4rem 2rem",
                overflowY: "auto",
              }}
            >
              {/* Header Area for Toggles and Close Button */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  maxWidth: "1200px",
                  marginBottom: "3rem",
                  gap: "1rem",
                }}
              >
                {/* Spacer to keep toggles centered on larger screens */}
                <div style={{ width: "40px", flexShrink: 0 }} className="nav-desktop" />

                {/* Category Toggles */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "0.5rem",
                    background: `linear-gradient(to right, rgba(200, 169, 110, 0.02), rgba(200, 169, 110, 0.08), rgba(200, 169, 110, 0.02))`,
                    padding: "0.5rem",
                    borderRadius: "100px",
                    border: `1px solid ${COLORS.borderGold}`,
                    width: "100%",
                    maxWidth: "450px",
                    boxShadow: "inset 0 0 20px rgba(0,0,0,0.5)",
                    flex: 1,
                  }}
                >
                  {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    style={{
                      position: "relative",
                      padding: "0.8rem 0",
                      flex: 1,
                      borderRadius: "100px",
                      border: "none",
                      background: "transparent",
                      color:
                        activeCategory === cat.id ? COLORS.bg : COLORS.gold,
                      cursor: "pointer",
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "0.85rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      transition: "all 0.3s ease",
                      fontWeight: activeCategory === cat.id ? 600 : 400,
                      zIndex: 1,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      textAlign: "center",
                    }}
                  >
                    {activeCategory === cat.id && (
                      <motion.div
                        layoutId="activeCategory"
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: `linear-gradient(135deg, ${COLORS.goldLight}, ${COLORS.gold})`,
                          borderRadius: "100px",
                          zIndex: -1,
                          boxShadow: `0 4px 15px rgba(200, 169, 110, 0.3), inset 0 1px 1px rgba(255, 255, 255, 0.4)`,
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span style={{ position: "relative", zIndex: 2 }}>{cat.label}</span>
                  </button>
                ))}
                </div>

                {/* Exit Button */}
                <motion.button
                  onClick={() => setShowGallery(false)}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    width: "40px",
                    height: "40px",
                    flexShrink: 0,
                    borderRadius: "50%",
                    background: "rgba(139, 26, 42, 0.15)",
                    border: `1px solid ${COLORS.crimson}66`,
                    backdropFilter: "blur(12px)",
                    color: COLORS.crimsonLight,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 2100,
                    boxShadow: "0 4px 15px rgba(139, 26, 42, 0.2)",
                  }}
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </motion.button>
              </div>

              {/* Gallery Grid */}
              <motion.div
                key={activeCategory}
                className="gallery-grid"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  display: "grid",
                  gap: "1.5rem",
                  justifyContent: "center",
                  width: "100%",
                  maxWidth: "1200px",
                }}
              >
                {CATEGORIZED_IMAGES[activeCategory].map(({ url, label }, i) => (
                  <motion.div
                    key={url}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => setLightbox(url)}
                    style={{
                      position: "relative",
                      aspectRatio: "4/3",
                      overflow: "hidden",
                      borderRadius: "8px",
                      cursor: "pointer",
                      border: `1px solid ${COLORS.border}`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.querySelector("img").style.transform =
                        "scale(1.08)";
                      e.currentTarget.querySelector(".overlay").style.opacity =
                        "1";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.querySelector("img").style.transform =
                        "scale(1)";
                      e.currentTarget.querySelector(".overlay").style.opacity =
                        "0";
                    }}
                  >
                    <img
                      src={url}
                      alt={label}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.6s ease",
                        display: "block",
                      }}
                    />
                    <div
                      className="overlay"
                      style={{
                        position: "absolute",
                        inset: 0,
                        opacity: 0,
                        background: `linear-gradient(to top, ${COLORS.bg}dd 0%, ${COLORS.forest}66 100%)`,
                        display: "flex",
                        alignItems: "flex-end",
                        padding: "1.2rem",
                        transition: "opacity 0.4s ease",
                      }}
                    >
                      <span
                        style={{
                          color: COLORS.cream,
                          fontSize: "0.78rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                        }}
                      >
                        {label}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setLightbox(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 2500,
              background: "rgba(0,0,0,0.85)",
              backdropFilter: "blur(12px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "zoom-out",
            }}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              src={lightbox}
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                objectFit: "contain",
                borderRadius: "8px",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                cursor: "default",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// ─── REVIEWS ──────────────────────────────────────────────────
function Reviews() {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [ref, inView] = useInView(0.15);
  const [heartBurst, setHeartBurst] = useState(false);
  const timerRef = useRef(null);

  const goTo = (i) => {
    if (animating || i === active) return;
    setAnimating(true);
    setPrev(active);
    setTimeout(() => {
      setActive(i);
      setAnimating(false);
      setPrev(null);
      // trigger heart burst on each change
      setHeartBurst(false);
      setTimeout(() => setHeartBurst(true), 50);
    }, 420);
  };

  useEffect(() => {
    setHeartBurst(true);
    timerRef.current = setInterval(() => {
      setActive((a) => {
        const next = (a + 1) % REVIEWS.length;
        goTo(next);
        return a; // goTo handles actual change
      });
    }, 5500);
    return () => clearInterval(timerRef.current);
  }, []);

  // auto-advance properly
  useEffect(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      goTo((active + 1) % REVIEWS.length);
    }, 5500);
    return () => clearInterval(timerRef.current);
  }, [active]);

  // Floating hearts config
  const hearts = [
    { x: "-60px", y: "-80px", s: 0.7, d: "0s", dur: "3.5s" },
    { x: "60px", y: "-90px", s: 0.5, d: "0.4s", dur: "4s" },
    { x: "-30px", y: "-110px", s: 0.9, d: "0.8s", dur: "3.2s" },
    { x: "40px", y: "-70px", s: 0.4, d: "0.2s", dur: "4.5s" },
    { x: "-80px", y: "-60px", s: 0.55, d: "1.1s", dur: "3.8s" },
    { x: "80px", y: "-85px", s: 0.45, d: "0.6s", dur: "4.2s" },
    { x: "10px", y: "-120px", s: 0.65, d: "1.4s", dur: "3.6s" },
    { x: "-50px", y: "-95px", s: 0.35, d: "0.9s", dur: "5s" },
  ];

  const HeartSVG = ({
    size = 16,
    color = COLORS.crimsonLight,
    opacity = 1,
    style = {},
  }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      style={{ opacity, ...style }}
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );

  return (
    <section
      ref={ref}
      style={{
        padding: "7rem 2.5rem",
        position: "relative",
        overflow: "hidden",
        background: `linear-gradient(180deg, ${COLORS.bg} 0%, ${COLORS.bgCard} 50%, ${COLORS.bg} 100%)`,
      }}
    >
      {/* Large ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 700,
          height: 500,
          background: `radial-gradient(ellipse, ${COLORS.crimson}12 0%, ${COLORS.forest}0a 40%, transparent 70%)`,
          pointerEvents: "none",
          animation: "reviewGlow 6s ease-in-out infinite",
        }}
      />

      {/* Large decorative quote mark */}
      <div
        style={{
          position: "absolute",
          top: "6%",
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "'Playfair Display', serif",
          fontSize: "18rem",
          lineHeight: 1,
          color: COLORS.gold,
          opacity: 0.025,
          pointerEvents: "none",
          userSelect: "none",
          letterSpacing: "-0.05em",
        }}
      >
        "
      </div>

      {/* Top ornament */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          marginBottom: "3rem",
          opacity: inView ? 1 : 0,
          transition: "opacity 0.9s ease",
        }}
      >
        <div
          style={{
            width: 60,
            height: 1,
            background: `linear-gradient(to right, transparent, ${COLORS.gold}50)`,
          }}
        />
        <HeartSVG size={11} color={COLORS.crimsonLight} opacity={0.7} />
        <span
          style={{
            fontSize: "0.58rem",
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: COLORS.gold,
          }}
        >
          Guest Experiences
        </span>
        <HeartSVG size={11} color={COLORS.crimsonLight} opacity={0.7} />
        <div
          style={{
            width: 60,
            height: 1,
            background: `linear-gradient(to left, transparent, ${COLORS.gold}50)`,
          }}
        />
      </div>

      <div
        style={{
          maxWidth: 860,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Review card */}
        <div
          style={{
            position: "relative",
            padding: "3.5rem 3rem 2.8rem",
            background: `linear-gradient(145deg, ${COLORS.bgCard}, ${COLORS.forest}12)`,
            border: `1px solid ${COLORS.gold}22`,
            borderRadius: "16px",
            boxShadow: `0 30px 80px ${COLORS.bg}cc, 0 0 0 1px ${COLORS.gold}0a, inset 0 1px 0 ${COLORS.gold}18`,
            overflow: "visible",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          {/* Corner accents */}
          {[
            {
              top: -1,
              left: -1,
              borderRadius: "16px 0 0 0",
              border: `1px solid ${COLORS.gold}40`,
            },
            {
              top: -1,
              right: -1,
              borderRadius: "0 16px 0 0",
              border: `1px solid ${COLORS.gold}40`,
            },
            {
              bottom: -1,
              left: -1,
              borderRadius: "0 0 0 16px",
              border: `1px solid ${COLORS.gold}40`,
            },
            {
              bottom: -1,
              right: -1,
              borderRadius: "0 0 16px 0",
              border: `1px solid ${COLORS.gold}40`,
            },
          ].map((s, i) => (
            <div
              key={i}
              style={{ position: "absolute", width: 20, height: 20, ...s }}
            />
          ))}

          {/* Heart burst anchor */}
          <div
            style={{
              position: "absolute",
              top: -14,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 10,
            }}
          >
            {/* Central heart */}
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: `radial-gradient(circle, ${COLORS.crimson}55, ${COLORS.bgCard})`,
                border: `1px solid ${COLORS.crimsonLight}55`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 4px 20px ${COLORS.crimson}50, 0 0 0 4px ${COLORS.bgCard}`,
                animation: heartBurst
                  ? "heartPulse 1.2s cubic-bezier(0.22,1,0.36,1)"
                  : "none",
              }}
            >
              <HeartSVG size={18} color={COLORS.crimsonLight} />
            </div>

            {/* Orbiting mini hearts that burst out */}
            {hearts.map((h, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: heartBurst
                    ? `translate(calc(-50% + ${h.x}), calc(-50% + ${h.y})) scale(${h.s})`
                    : "translate(-50%, -50%) scale(0)",
                  opacity: heartBurst ? 0 : 0,
                  animation: heartBurst
                    ? `heartFloat ${h.dur} cubic-bezier(0.22,1,0.36,1) ${h.d} forwards`
                    : "none",
                  pointerEvents: "none",
                }}
              >
                <HeartSVG size={14} color={COLORS.crimsonLight} opacity={0.8} />
              </div>
            ))}
          </div>

          {/* Stars */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "5px",
              marginBottom: "1.6rem",
              marginTop: "0.5rem",
            }}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                style={{
                  color: i < REVIEWS[active].stars ? COLORS.gold : COLORS.muted,
                  fontSize: "0.9rem",
                  display: "inline-block",
                  animation: heartBurst
                    ? `starPop 0.5s cubic-bezier(0.22,1,0.36,1) ${
                        i * 0.07
                      }s both`
                    : "none",
                }}
              >
                ★
              </span>
            ))}
          </div>

          {/* Quote text with fade transition */}
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.15rem, 2.4vw, 1.7rem)",
              fontStyle: "italic",
              color: COLORS.cream,
              lineHeight: 1.7,
              marginBottom: "2rem",
              minHeight: 90,
              opacity: animating ? 0 : 1,
              transform: animating ? "translateY(8px)" : "translateY(0)",
              transition: "all 0.42s cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <span
              style={{
                color: COLORS.gold,
                opacity: 0.5,
                fontFamily: "serif",
                fontSize: "1.5em",
                lineHeight: 0,
                verticalAlign: "-0.3em",
              }}
            >
              "
            </span>
            {REVIEWS[active].text}
            <span
              style={{
                color: COLORS.gold,
                opacity: 0.5,
                fontFamily: "serif",
                fontSize: "1.5em",
                lineHeight: 0,
                verticalAlign: "-0.3em",
              }}
            >
              "
            </span>
          </div>

          {/* Divider */}
          <div
            style={{
              width: 40,
              height: 1,
              margin: "0 auto 1.4rem",
              background: `linear-gradient(to right, transparent, ${COLORS.gold}60, transparent)`,
            }}
          />

          {/* Author */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.7rem",
              opacity: animating ? 0 : 1,
              transition: "opacity 0.4s ease",
            }}
          >
            {/* Avatar ring */}
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${COLORS.forest}80, ${COLORS.crimson}40)`,
                border: `1px solid ${COLORS.gold}33`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.8rem",
                fontFamily: "'Playfair Display', serif",
                color: COLORS.gold,
                fontWeight: 600,
              }}
            >
              {REVIEWS[active].name[0]}
            </div>
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  color: COLORS.sageLight,
                  fontSize: "0.75rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                }}
              >
                {REVIEWS[active].name}
              </div>
              <div
                style={{
                  color: COLORS.muted,
                  fontSize: "0.6rem",
                  letterSpacing: "0.08em",
                }}
              >
                Verified Guest
              </div>
            </div>
          </div>

          {/* Bottom glow line */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: "20%",
              right: "20%",
              height: 1,
              background: `linear-gradient(to right, transparent, ${COLORS.crimsonLight}50, transparent)`,
              borderRadius: "0 0 16px 16px",
            }}
          />
        </div>

        {/* Navigation dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.7rem",
            marginTop: "2.5rem",
          }}
        >
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === active ? 32 : 8,
                height: 8,
                background:
                  i === active
                    ? `linear-gradient(to right, ${COLORS.crimsonLight}, ${COLORS.gold})`
                    : COLORS.muted + "66",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
                transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
                padding: 0,
                boxShadow:
                  i === active ? `0 0 12px ${COLORS.crimsonLight}60` : "none",
              }}
            />
          ))}
        </div>

        {/* Love quote */}
        <div
          style={{
            marginTop: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.8rem",
            opacity: inView ? 0.9 : 0,
            transition: "opacity 1s ease 0.5s",
          }}
        >
          <div
            style={{
              width: 40,
              height: 1,
              background: `linear-gradient(to right, transparent, ${COLORS.crimsonLight}80)`,
            }}
          />
          <HeartSVG size={12} color={COLORS.crimsonLight} opacity={0.9} />
          <span
            style={{
              fontSize: "0.8rem",
              letterSpacing: "0.15em",
              color: "rgba(255, 255, 255, 0.85)",
              fontStyle: "italic",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Loved by thousands every month
          </span>
          <HeartSVG size={12} color={COLORS.crimsonLight} opacity={0.9} />
          <div
            style={{
              width: 40,
              height: 1,
              background: `linear-gradient(to left, transparent, ${COLORS.crimsonLight}80)`,
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes reviewGlow { 0%,100%{opacity:0.8;transform:translate(-50%,-50%) scale(1)} 50%{opacity:1;transform:translate(-50%,-50%) scale(1.1)} }
        @keyframes heartPulse { 0%{transform:scale(1)} 30%{transform:scale(1.4)} 60%{transform:scale(0.9)} 100%{transform:scale(1)} }
        @keyframes heartFloat {
          0%{opacity:0;transform:translate(-50%,-50%) scale(0)}
          20%{opacity:0.9}
          100%{opacity:0;transform:translate(calc(-50% + var(--tx,0px)), calc(-50% + var(--ty,-80px))) scale(var(--s,0.5))}
        }
        @keyframes starPop { 0%{transform:scale(0.5);opacity:0} 60%{transform:scale(1.3)} 100%{transform:scale(1);opacity:1} }
      `}</style>
    </section>
  );
}
// ─── CONTACT ──────────────────────────────────────────────────
function Contact() {
  const [ref, inView] = useInView(0.08);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(null);
  const [activeCard, setActiveCard] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: "", phone: "", date: "", message: "" });
  };

  const infoItems = [
    {
      key: "location",
      label: "Our Address",
      value:
        "Centrum, Plot C8, Unit 4–6, opp. Raila Devi Lake, Wagle Industrial Estate, Thane West 400604",
      color: COLORS.gold,
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ overflow: "visible" }}
        >
          <motion.g
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <path
              d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
              stroke={COLORS.gold}
              strokeWidth="1.3"
            />
            <motion.circle
              cx="12"
              cy="9"
              r="2.5"
              stroke={COLORS.gold}
              strokeWidth="1.3"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: "12px 9px" }}
            />
          </motion.g>
          <motion.path
            d="M8 21h8"
            stroke={COLORS.gold}
            strokeWidth="1"
            animate={{ opacity: [0.8, 0.2, 0.8], scaleX: [1, 0.4, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "12px 21px" }}
          />
        </svg>
      ),
      bgGlow: COLORS.gold,
    },
    {
      key: "phone",
      label: "Reservations",
      value: "+91 7304673043   ·   +91 7304873043",
      color: COLORS.sage,
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ overflow: "visible" }}
        >
          <motion.path
            d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 5.18 2 2 0 015.09 3h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 10.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
            stroke={COLORS.sage}
            strokeWidth="1.3"
            animate={{ rotate: [0, -8, 8, -8, 8, 0, 0, 0, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "12px 12px" }}
          />
          <motion.path
            d="M14.5 2a4.5 4.5 0 014.5 4.5M14.5 6a1 1 0 011-1"
            stroke={COLORS.sage}
            strokeWidth="1.2"
            animate={{ 
              pathLength: [0, 1, 1, 0],
              opacity: [0, 1, 1, 0]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      ),
      bgGlow: COLORS.sage,
    },
    {
      key: "hours",
      label: "Opening Hours",
      value: null,
      color: COLORS.roseLight,
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ overflow: "visible" }}
        >
          <circle
            cx="12"
            cy="12"
            r="9"
            stroke={COLORS.roseLight}
            strokeWidth="1.3"
          />
          <motion.path 
            d="M12 7v5l3 3" 
            stroke={COLORS.roseLight} 
            strokeWidth="1.5" 
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            style={{ originX: 0, originY: 0.625 }}
          />
          <motion.path
            d="M12 3v1M12 20v1M3 12h1M20 12h1"
            stroke={COLORS.roseLight}
            strokeWidth="1"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      ),
      bgGlow: COLORS.crimsonLight,
      hours: [
        { day: "Tuesday – Thursday", time: "5:00 PM – 1:30 AM", open: true },
        { day: "Friday – Sunday", time: "1:00 PM – 1:30 AM", open: true },
        { day: "Monday", time: "Closed", open: false },
      ],
    },
  ];

  const inputBase = (key) => ({
    width: "100%",
    padding: "1rem 1.2rem",
    background: focused === key ? `${COLORS.forest}20` : `${COLORS.forest}0c`,
    border: `1px solid ${focused === key ? COLORS.sage + "80" : COLORS.border}`,
    borderRadius: "8px",
    color: COLORS.cream,
    fontSize: "0.85rem",
    outline: "none",
    fontFamily: "inherit",
    transition: "all 0.3s cubic-bezier(0.22,1,0.36,1)",
    boxShadow:
      focused === key
        ? `0 0 0 3px ${COLORS.sage}12, 0 4px 20px ${COLORS.forest}20`
        : "none",
  });

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: "8rem 2.5rem",
        background: `linear-gradient(180deg, ${COLORS.bg} 0%, ${COLORS.bgCard} 25%, ${COLORS.bgCard} 75%, ${COLORS.bg} 100%)`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient orbs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "-5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.forest}18, transparent 70%)`,
          pointerEvents: "none",
          animation: "contactOrb1 12s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          right: "-8%",
          width: 600,
          height: 400,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${COLORS.crimson}10, transparent 70%)`,
          pointerEvents: "none",
          animation: "contactOrb2 15s ease-in-out infinite",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "5rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.9s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                width: 50,
                height: 1,
                background: `linear-gradient(to right, transparent, ${COLORS.gold}55)`,
              }}
            />
            <svg width="10" height="10" viewBox="0 0 10 10">
              <path
                d="M5 0L6.2 3.8H10L6.9 6.1L8.1 10L5 7.6L1.9 10L3.1 6.1L0 3.8H3.8Z"
                fill={COLORS.gold}
                opacity="0.7"
              />
            </svg>
            <span
              style={{
                fontSize: "0.58rem",
                letterSpacing: "0.38em",
                textTransform: "uppercase",
                color: COLORS.gold,
              }}
            >
              Reserve Your Evening
            </span>
            <svg width="10" height="10" viewBox="0 0 10 10">
              <path
                d="M5 0L6.2 3.8H10L6.9 6.1L8.1 10L5 7.6L1.9 10L3.1 6.1L0 3.8H3.8Z"
                fill={COLORS.gold}
                opacity="0.7"
              />
            </svg>
            <div
              style={{
                width: 50,
                height: 1,
                background: `linear-gradient(to left, transparent, ${COLORS.gold}55)`,
              }}
            />
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.4rem, 5.5vw, 4.2rem)",
              fontWeight: 400,
              color: COLORS.cream,
              letterSpacing: "0.01em",
              lineHeight: 1.1,
              textAlign: "center",
            }}
          >
            <span style={{ whiteSpace: "nowrap", display: "block" }}>Come, Experience</span>
            <motion.em
              animate={{
                backgroundPosition: ["200% center", "-200% center"],
                opacity: [0.9, 1, 0.9],
                textShadow: [
                  `0 0 10px ${COLORS.gold}20`,
                  `0 0 25px ${COLORS.gold}50`,
                  `0 0 10px ${COLORS.gold}20`,
                ],
              }}
              transition={{
                backgroundPosition: {
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                },
                opacity: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                textShadow: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              style={{
                background: `linear-gradient(110deg, transparent 35%, ${COLORS.goldLight} 50%, transparent 65%)`,
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                WebkitTextStroke: `1px ${COLORS.gold}aa`,
                fontStyle: "italic",
                display: "inline-block",
                fontSize: "1.15em",
                marginTop: "0.2rem",
                textAlign: "center",
              }}
            >
              La Cena
            </motion.em>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr",
            gap: "3.5rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* ── LEFT: INFO CARDS ── */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
          >
            {infoItems.map(
              ({ key, label, value, color, icon, bgGlow, hours }, idx) => (
                <div
                  key={key}
                  onMouseEnter={() => setActiveCard(key)}
                  onMouseLeave={() => setActiveCard(null)}
                  style={{
                    padding: "1.6rem 1.8rem",
                    background:
                      activeCard === key
                        ? `linear-gradient(135deg, ${bgGlow}14, ${COLORS.bgCard})`
                        : `linear-gradient(135deg, ${COLORS.bgCard}, ${COLORS.bg})`,
                    border: `1px solid ${
                      activeCard === key ? color + "40" : COLORS.border
                    }`,
                    borderRadius: "12px",
                    display: "flex",
                    gap: "1.4rem",
                    alignItems: "flex-start",
                    cursor: "default",
                    boxShadow:
                      activeCard === key
                        ? `0 12px 40px ${bgGlow}18, inset 0 1px 0 ${color}15`
                        : "0 2px 12px rgba(0,0,0,0.3)",
                    opacity: inView ? 1 : 0,
                    transform: inView ? "translateX(0)" : "translateX(-30px)",
                    transition: `opacity 0.8s ease ${
                      idx * 0.12
                    }s, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${
                      idx * 0.12
                    }s, background 0.35s ease, border 0.35s ease, box-shadow 0.35s ease`,
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* Animated corner glow */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      width: 100,
                      height: 100,
                      background: `radial-gradient(circle at top right, ${color}${
                        activeCard === key ? "20" : "00"
                      }, transparent 70%)`,
                      transition: "background 0.4s ease",
                      pointerEvents: "none",
                    }}
                  />

                  {/* Icon container */}
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "12px",
                      flexShrink: 0,
                      background: `${color}14`,
                      border: `1px solid ${color}28`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow:
                        activeCard === key ? `0 0 20px ${color}28` : "none",
                      transition: "box-shadow 0.3s ease",
                      transform:
                        activeCard === key ? "scale(1.05)" : "scale(1)",
                    }}
                  >
                    {icon}
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: "0.58rem",
                        letterSpacing: "0.28em",
                        textTransform: "uppercase",
                        color: color,
                        marginBottom: "0.5rem",
                        fontWeight: 500,
                      }}
                    >
                      {label}
                    </div>

                    {value && (
                      <div
                        style={{
                          color: COLORS.sageLight,
                          fontSize: "0.85rem",
                          lineHeight: 1.65,
                        }}
                      >
                        {value}
                      </div>
                    )}

                    {hours && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.35rem",
                        }}
                      >
                        {hours.map(({ day, time, open }) => (
                          <div
                            key={day}
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "flex-start",
                              gap: "0.5rem",
                            }}
                          >
                            <span
                              style={{
                                color: COLORS.muted,
                                fontSize: "0.78rem",
                              }}
                            >
                              {day}
                            </span>
                            <span
                              style={{
                                color: open
                                  ? COLORS.sageLight
                                  : COLORS.crimsonLight,
                                fontSize: "0.78rem",
                                fontWeight: open ? 400 : 500,
                                textAlign: "right",
                                whiteSpace: "nowrap",
                              }}
                            >
                              {time}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Animated left border accent */}
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: "20%",
                      bottom: "20%",
                      width: 2,
                      borderRadius: 2,
                      background: activeCard === key ? color : "transparent",
                      boxShadow:
                        activeCard === key ? `0 0 8px ${color}` : "none",
                      transition: "all 0.35s ease",
                    }}
                  />
                </div>
              )
            )}

            {/* Social row */}
            <div
              style={{
                display: "flex",
                gap: "0.8rem",
                marginTop: "0.4rem",
                opacity: inView ? 1 : 0,
                transition: "opacity 0.8s ease 0.4s",
              }}
            >
              <SocialButton
                label="Instagram"
                href="https://www.instagram.com/lacena.thane/"
                color="#F9A8D4"
                iconType="instagram"
              />
              <SocialButton
                label="WhatsApp"
                href="https://wa.me/917304673043"
                color="#4ADE80"
                iconType="whatsapp"
              />
              <SocialButton
                label="Call Now"
                href="tel:7304673043"
                color="#60A5FA"
                iconType="phone"
              />
            </div>
          </div>

          {/* ── RIGHT: FORM ── */}
          <div
            style={{
              padding: "2.8rem",
              background: `linear-gradient(145deg, ${COLORS.bgCard}, ${COLORS.bg})`,
              border: `1px solid ${COLORS.border}`,
              borderRadius: "16px",
              boxShadow: `0 30px 80px rgba(0,0,0,0.4), inset 0 1px 0 ${COLORS.gold}10`,
              position: "relative",
              overflow: "hidden",
              opacity: inView ? 1 : 0,
              transform: inView ? "translateX(0)" : "translateX(30px)",
              transition: "all 0.9s cubic-bezier(0.22,1,0.36,1) 0.2s",
            }}
          >
            {/* Form card ambient glow */}
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: 250,
                height: 250,
                background: `radial-gradient(circle at top right, ${COLORS.forest}20, transparent 70%)`,
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: 200,
                height: 200,
                background: `radial-gradient(circle at bottom left, ${COLORS.crimson}10, transparent 70%)`,
                pointerEvents: "none",
              }}
            />

            {/* Form header */}
            <div style={{ marginBottom: "2.2rem", position: "relative" }}>
              <div
                style={{
                  fontSize: "0.58rem",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: COLORS.gold,
                  marginBottom: "0.5rem",
                }}
              >
                Make a Reservation
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  color: COLORS.cream,
                  lineHeight: 1.2,
                }}
              >
                Book Your Table
              </h3>
              <div
                style={{
                  width: 30,
                  height: 1,
                  background: COLORS.gold,
                  marginTop: "0.8rem",
                  opacity: 0.5,
                }}
              />
            </div>

            <form
              onSubmit={submit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                position: "relative",
              }}
            >
              {/* Name & Phone row */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.8rem",
                }}
                className="form-row"
              >
                <div style={{ position: "relative" }}>
                  <label
                    style={{
                      fontSize: "0.6rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: COLORS.muted,
                      display: "block",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Full Name
                  </label>
                  <input
                    placeholder="Your name"
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    style={inputBase("name")}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                  />
                </div>
                <div style={{ position: "relative" }}>
                  <label
                    style={{
                      fontSize: "0.6rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: COLORS.muted,
                      display: "block",
                      marginBottom: "0.4rem",
                    }}
                  >
                    Phone
                  </label>
                  <input
                    placeholder="+91 00000 00000"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    style={inputBase("phone")}
                    onFocus={() => setFocused("phone")}
                    onBlur={() => setFocused(null)}
                  />
                </div>
              </div>

              {/* Date */}
              <div>
                <label
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: COLORS.muted,
                    display: "block",
                    marginBottom: "0.4rem",
                  }}
                >
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, date: e.target.value }))
                  }
                  style={{ ...inputBase("date"), colorScheme: "dark" }}
                  onFocus={() => setFocused("date")}
                  onBlur={() => setFocused(null)}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: COLORS.muted,
                    display: "block",
                    marginBottom: "0.4rem",
                  }}
                >
                  Special Requests
                </label>
                <textarea
                  placeholder="Any special occasion, dietary preferences or seating requests..."
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, message: e.target.value }))
                  }
                  style={{ ...inputBase("message"), resize: "none" }}
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused(null)}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                style={{
                  padding: "1.1rem",
                  background: sent
                    ? `linear-gradient(135deg, ${COLORS.forest}, ${COLORS.forestMid})`
                    : `linear-gradient(135deg, ${COLORS.gold}, ${COLORS.goldLight})`,
                  border: `1px solid ${
                    sent ? COLORS.sage + "60" : COLORS.forestMid
                  }`,
                  color: sent ? COLORS.cream : COLORS.forest,
                  cursor: "pointer",
                  fontSize: "0.95rem",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  borderRadius: "8px",
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 700,
                  boxShadow: sent
                    ? `0 8px 30px ${COLORS.forest}55, inset 0 1px 0 ${COLORS.forestLight}25`
                    : `0 8px 30px ${COLORS.gold}55, inset 0 1px 0 rgba(255,255,255,0.5)`,
                  transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.7rem",
                  marginTop: "0.4rem",
                }}
                onMouseEnter={(e) => {
                  if (!sent) {
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.boxShadow = `0 16px 50px ${COLORS.gold}80, inset 0 1px 0 rgba(255,255,255,0.8)`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!sent) {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = `0 8px 30px ${COLORS.gold}55, inset 0 1px 0 rgba(255,255,255,0.5)`;
                  }
                }}
              >
                {sent ? (
                  <>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={COLORS.sage}
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Reservation Received
                  </>
                ) : (
                  <>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    >
                      <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
                    </svg>
                    Send Reservation
                  </>
                )}
              </button>

              <p
                style={{
                  fontSize: "0.68rem",
                  color: COLORS.muted,
                  textAlign: "center",
                  marginTop: "0.2rem",
                }}
              >
                Or call us directly at{" "}
                <a
                  href="tel:7304673043"
                  style={{
                    color: COLORS.gold,
                    textDecoration: "none",
                    borderBottom: `1px solid ${COLORS.gold}40`,
                  }}
                >
                  +91 7304673043
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes contactOrb1 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(30px,-20px)} }
        @keyframes contactOrb2 { 0%,100%{transform:translate(0,0)} 50%{transform:translate(-20px,15px)} }
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
// ─── FOOTER ──────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      style={{
        padding: "2rem 2.5rem",
        background: COLORS.bg,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <div
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "1.1rem",
          color: COLORS.cream,
          opacity: 0.6,
        }}
      >
        La Cena
      </div>
      <div
        style={{
          fontSize: "0.68rem",
          color: COLORS.muted,
          letterSpacing: "0.06em",
        }}
      >
        © 2025 La Cena, Thane. All rights reserved.
      </div>
      <div style={{ fontSize: "0.68rem", color: COLORS.muted }}>
        <a
          href="tel:7304673043"
          style={{ color: COLORS.muted, textDecoration: "none" }}
        >
          +91 7304673043
        </a>
      </div>
    </footer>
  );
}

// ─── SCROLL TO TOP ─────────────────────────────────────────────
function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const contactSec = document.getElementById("contact");
      if (contactSec) {
        const rect = contactSec.getBoundingClientRect();
        // Activate when the bottom of the contact section is near the bottom of the viewport
        if (rect.bottom <= window.innerHeight + 150) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      } else {
        if (window.scrollY > 2000) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          style={{
            position: "fixed",
            bottom: "2rem",
            right: "2rem",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            background: COLORS.gold,
            color: COLORS.bg,
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: `0 4px 15px ${COLORS.gold}60`,
            zIndex: 9999,
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* Foam top (bubbly) */}
            <path d="M5 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2" />
            {/* Mug Body */}
            <path d="M5 5v14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5" />
            {/* Handle */}
            <path d="M15 8h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2" />
            {/* Upward Arrow inside */}
            <path d="M10 16v-6" />
            <path d="M7 13l3-3 3 3" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// ─── APP ─────────────────────────────────────────────────────
export default function App() {
  return (
    <div style={{ background: COLORS.bg, minHeight: "100vh" }}>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
