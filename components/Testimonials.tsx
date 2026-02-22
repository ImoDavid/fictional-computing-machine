"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa6";

/* =========================
   DATA
========================= */
const TestimonialsData = [
  {
    name: "Sarah",
    role: "OnRe Finance",
    testimony:
     

`We’ve enjoyed working with DeHawk to enhance OnRe’s exposure to crypto-native audiences. They’re highly receptive to feedback and adapt their approach as market conditions evolve, which has been valuable across different cycles.
`,
  },
  {
    name: "Margaret Kim",
    role: "Community Lead",
    testimony:
      "Their community management is unmatched. Conversations stayed active, positive, and aligned with our vision at all times.",
  },
  {
    name: "David Chen",
    role: "Marketing Director",
    testimony:
      "From KOL outreach to AMAs, everything felt natural and well-executed. The credibility boost alone was worth it.",
  },
  {
    name: "James Ortega",
    role: "Protocol Advisor",
    testimony:
      "The exposure and trust we gained from their campaigns translated directly into real adoption and retention.",
  },
];

/* =========================
   ANIMATION VARIANTS
========================= */
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.92,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 90,
      damping: 18,
    },
  },
};

/* =========================
   CARD
========================= */
const TestimonialCard = ({ item }: any) => {
  return (
    <div className="bg-[#053316] rounded-xl p-6 h-full flex flex-col gap-4">
      <FaQuoteLeft size={24} className="text-[#72D600]" />

      <p className="text-sm text-white/80 leading-relaxed">{item.testimony}</p>

      <div className="mt-auto">
        <p className="text-sm font-semibold text-white">{item.name}</p>
        <p className="text-xs text-white/60">{item.role}</p>
      </div>
    </div>
  );
};

/* =========================
   AUTOPLAY SLIDER
========================= */
const AUTO_PLAY_INTERVAL = 4000;
const RESUME_DELAY = 2500;

const TestimonialsSlider = ({ testimonials }: any) => {
  const [index, setIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(1);
  const resumeTimeout = useRef<any>(null);

  const total = testimonials.length;

  /* =========================
     RESPONSIVE LOGIC
  ========================= */
  useEffect(() => {
    const updateCardsPerView = () => {
      setCardsPerView(window.innerWidth >= 640 ? 3 : 1);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  /* =========================
     AUTOPLAY
  ========================= */
  useEffect(() => {
    if (isInteracting) return;

    const timer = setInterval(() => {
      setIndex((prev) => {
        if (cardsPerView === 1) {
          // Mobile: normal looping
          return (prev + 1) % total;
        }

        // Desktop: sliding window of 3
        return prev >= total - cardsPerView ? 0 : prev + 1;
      });
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isInteracting, total, cardsPerView]);

  const handleInteractionEnd = () => {
    clearTimeout(resumeTimeout.current);
    resumeTimeout.current = setTimeout(
      () => setIsInteracting(false),
      RESUME_DELAY,
    );
  };

  /* =========================
     CALCULATED OFFSET
  ========================= */
  const step = 100 / cardsPerView;
  const translateX = `-${index * step}%`;

  return (
    <div className="relative mt-14 overflow-hidden">
      <motion.div
        className="flex"
        animate={{ x: translateX }}
        transition={{ type: "spring", stiffness: 120, damping: 22 }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.12}
        onPointerDown={() => setIsInteracting(true)}
        onDragEnd={(_, info) => {
          setIndex((prev) => {
            if (cardsPerView === 1) {
              if (info.offset.x > 80) return (prev - 1 + total) % total;
              if (info.offset.x < -80) return (prev + 1) % total;
              return prev;
            }

            // Desktop logic
            if (info.offset.x > 80)
              return prev <= 0 ? total - cardsPerView : prev - 1;

            if (info.offset.x < -80)
              return prev >= total - cardsPerView ? 0 : prev + 1;

            return prev;
          });

          handleInteractionEnd();
        }}
      >
        {testimonials.map((item: any, i: number) => (
          <div key={i} className="px-3 flex-shrink-0 w-full sm:w-1/3">
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{
                scale: 1.04,
                boxShadow: "0px 20px 50px rgba(114,214,0,0.25)",
              }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
              <TestimonialCard item={item} />
            </motion.div>
          </div>
        ))}
      </motion.div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_: any, i: number) => (
          <button
            key={i}
            onClick={() => {
              setIsInteracting(true);
              setIndex(i);
              handleInteractionEnd();
            }}
            className={`h-2 w-2 rounded-full transition-all ${
              i === index ? "bg-[#72D600] scale-125" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

/* =========================
   MAIN SECTION
========================= */
const Testimonials = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      variants={containerVariants}
      className="mx-auto max-w-7xl px-6 lg:px-8 pt-6 mt-24"
    >
      {/* Header */}
      <motion.div variants={cardVariants} className="text-center">
        <h1 className="text-2xl lg:text-4xl font-semibold tracking-tight text-[#72D600] capitalize">
          testimonials
        </h1>
        <p className="mt-2 text-sm sm:text-lg text-white">
          What founders and communities say about working with us.
        </p>
      </motion.div>

      <TestimonialsSlider testimonials={TestimonialsData} />
    </motion.section>
  );
};

export default Testimonials;
