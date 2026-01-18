

'use client'
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const trustedLogos = [
  { src: "https://res.cloudinary.com/dfljnnxln/image/upload/v1768773618/WhatsApp_Image_2026-01-14_at_11.24.59_AM_ojnb7g.jpg", alt: "Project One" },
  { src: "https://res.cloudinary.com/dfljnnxln/image/upload/v1768773619/WhatsApp_Image_2026-01-14_at_11.25.00_AM_ros7w6.jpg", alt: "Project One" },
  { src: "https://res.cloudinary.com/dfljnnxln/image/upload/v1768773618/WhatsApp_Image_2026-01-14_at_11.24.59_AM_1_ag9yfk.jpg", alt: "Project One" },
  { src: "https://res.cloudinary.com/dfljnnxln/image/upload/v1768773933/logo-2_qxikit.jpg", alt: "Project One" },
];


const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const},
  },
};

const stagger = {
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="relative w-full overflow-hidden bg-black pb-14">
      {/* Animated Parallax Glow */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{ backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        style={{
          background: `
            radial-gradient(
              15% 60% at 0% 0%,
              rgba(46, 255, 158, 0.55) 0%,
              rgba(46, 255, 158, 0.15) 50%,
              transparent 100%
            ),
            radial-gradient(
              15% 60% at 100% 0%,
              rgba(46, 255, 158, 0.55) 0%,
              rgba(46, 255, 158, 0.15) 50%,
              transparent 100%
            ),
            linear-gradient(to bottom, rgba(6,27,15,0.9), #000)
          `,
          opacity: Math.max(0.6, 1 - scrollY * 0.001),
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
        {/* Top Bar */}
        <div className="flex items-center justify-between">
          <motion.div
            className="text-base sm:text-lg font-semibold text-white"
          >
            LOGO
          </motion.div>

          <nav className="hidden md:flex gap-6 rounded-full bg-[#052E14] px-8 py-3 text-sm text-gray-300">
            {["Home", "Services", "Result", "About", "Contact"].map(item => (
              <motion.a
                key={item}
                href="#"
                whileHover={{ y: -2 }}
                className="transition hover:text-white"
              >
                {item}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="hidden sm:inline-flex rounded-full border border-[#1eff8e]/30 bg-[#0b2a18] px-6 py-3 text-sm text-white"
            >
              Book a Meeting
            </motion.button>

            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              animate={{ rotate: menuOpen ? 90 : 0 }}
              className="md:hidden h-10 w-10 rounded-full border border-white/10 text-white"
            >
              ☰
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-4 rounded-2xl bg-[#03180d] px-6 py-6 text-sm text-gray-300"
            >
              {["Home", "Services", "Result", "About", "Contact"].map(item => (
                <a
                  key={item}
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 hover:text-white"
                >
                  {item}
                </a>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>

        {/* Hero */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mx-auto mt-24 max-w-3xl text-center"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <motion.div
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity }}
              className="text-yellow-400 text-2xl"
            >
              ★★★★★
            </motion.div>

            <span className="inline-block mt-3 rounded-full bg-[#72D600] px-4 py-2 text-xs font-semibold text-[#053316]">
              Verified Web3 Growth Partner
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-3xl sm:text-5xl font-semibold text-white"
          >
            Grow Your Web3 Project With Real Community,
            <br className="hidden sm:block" />
            Visibility And Trust
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-sm sm:text-base font-semibold text-white"
          >
            DeHawk bridges the gap between crypto projects and their audiences
            through authentic engagements, influencer marketing and community
            activation.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10"
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              animate={{ boxShadow: ["0 0 0 rgba(0,0,0,0)", "0 0 25px rgba(114,214,0,0.35)", "0 0 0 rgba(0,0,0,0)"] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="rounded-full bg-[#000F05] px-8 py-3 text-sm text-white"
            >
              Book a Meeting
            </motion.button>

             <div className="mt-20">
            <h1 className="text-lg lg:text-2xl font-semibold leading-tight tracking-tight text-white capitalize">
            Trusted by
          </h1>

          <p className="mt-5 sm:mt-6 text-sm sm:text-base leading-relaxed text-gray-400">
            Our proven strategies and consistent delivery have earned the trust of leading Web3 projects.
              </p>
                <TrustedLogos />  
          </div>
          </motion.div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;

const TrustedLogos = () => {
  return (
    <div className="relative mt-10 overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="flex gap-10 animate-logo-slide hover:[animation-play-state:paused]">
        {[...trustedLogos, ...trustedLogos].map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center min-w-[140px] opacity-70 hover:opacity-100 transition"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={40}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};


