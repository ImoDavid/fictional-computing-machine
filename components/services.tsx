'use client'
import { BsChatLeft } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState , useRef} from "react";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { FaBolt, FaPeopleRoof } from "react-icons/fa6";
import { IoIosPeople } from "react-icons/io";
import { MdBarChart } from "react-icons/md";
import BasicCard from "./UI/card";

/* =========================
   DATA
========================= */
const ServicesData = [
  {
    title: "kol marketing",
    description:
      "We work with a trusted network of micro and nano influencers to talk about your project in an organic, authentic, and engaging way. These KOLs create buzz across X (Twitter), Telegram, and other platforms, boosting your project’s visibility and credibility with real, human-driven engagement.",
    icon: <HiMiniSpeakerWave size={40} />,
  },
  {
    title: "Guerilla marketing",
    description:
      "We use creative and fast-moving Guerrilla Marketing techniques to keep your project trending. Through coordinated influencer posts, community discussions, and organic ratings, we make sure your project stays visible and active across the crypto space, all done naturally, without fake hype.",
    icon: <FaBolt size={40} />,
  },
  {
    title: "community building",
    description:
      "We build your project’s community from scratch, creating well-structured and engaging channels on Telegram, Discord, and X. From setup to management, we ensure your project has a vibrant, supportive, and loyal user base ready to grow with you.",
    icon: <IoIosPeople size={40} />,
  },
  {
    title: "community engagement",
    description:
      "Our moderators and managers work 24/7 to keep your community alive and thriving. We encourage conversations, handle inquiries, control FUD, and create activities that keep members active, informed, and connected to your mission.",
    icon: <BsChatLeft size={40} />,
  },
  {
    title: "Token promotion",
    description:
      "Our focus is helping projects gain more visibility and adoption through strategic token promotion. We leverage targeted campaigns, influencer collaborations, and organic community engagement ensuring your token reaches the right audience and drives long-term adoption.",
    icon: <MdBarChart size={40} />,
  },
  {
    title: "AMA sessions",
    description:
      "We host and manage professional AMA sessions that connect your team directly with your audience. From planning and promotion to moderation and reporting, every AMA strengthens community trust and delivers real exposure.",
    icon: <FaPeopleRoof size={40} />,
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
    y: 80,
    scale: 0.9,
    filter: "blur(12px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
   transition: {
   type: "spring" as const,
  stiffness: 80,
  damping: 18,
  mass: 0.6,
},

  },
};

/* =========================
   DESKTOP CARD
========================= */
const AnimatedServiceCard = ({ service }: any) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.06,
        rotateX: 4,
        rotateY: -4,
        boxShadow: "0px 25px 60px rgba(114,214,0,0.35)",
      }}
      transition={{
        scale: { type: "spring", stiffness: 260, damping: 16 },
        rotateX: { type: "tween", duration: 0.25, ease: "easeOut" },
        rotateY: { type: "tween", duration: 0.25, ease: "easeOut" },
        boxShadow: { type: "tween", duration: 0.25 },
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      {/* Glow */}
      <motion.div
        className="absolute -inset-1 rounded-xl bg-[#72D600]/10 blur-xl opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />

      <BasicCard
        vector={service.icon}
        title={service.title}
        description={service.description}
      />
    </motion.div>
  );
};

/* =========================
MOBILE SPOTLIGHT
========================= */

const AUTO_PLAY_INTERVAL = 4000;
const RESUME_DELAY = 2500;

const MobileServiceSpotlight = ({ services }: any) => {
  const [index, setIndex] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const resumeTimeout = useRef<any>(null);

  // Autoplay logic (paused on interaction)
  useEffect(() => {
    if (isInteracting) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isInteracting, services.length]);

  const paginate = (direction: number) => {
    setIndex((prev) => {
      const next = prev + direction;
      if (next < 0) return services.length - 1;
      if (next >= services.length) return 0;
      return next;
    });
  };

  const handleInteractionEnd = () => {
    clearTimeout(resumeTimeout.current);
    resumeTimeout.current = setTimeout(() => {
      setIsInteracting(false);
    }, RESUME_DELAY);
  };

  return (
    <div id="services" className="relative mt-14 overflow-hidden sm:hidden">
      <div className="flex items-center justify-center h-[420px]">
        <AnimatePresence initial={false}>
          {services.map((service: any, i: number) => {
            const position =
              i === index
                ? "center"
                : i === (index - 1 + services.length) % services.length
                ? "left"
                : i === (index + 1) % services.length
                ? "right"
                : "hidden";

            return (
              <motion.div
                key={i}
                className="absolute w-[80%]"
                variants={{
                  center: {
                    x: 0,
                    scale: 1,
                    opacity: 1,
                    zIndex: 2,
                  },
                  left: {
                    x: "-55%",
                    scale: 0.85,
                    opacity: 0.5,
                    zIndex: 1,
                  },
                  right: {
                    x: "55%",
                    scale: 0.85,
                    opacity: 0.5,
                    zIndex: 1,
                  },
                  hidden: {
                    opacity: 0,
                    scale: 0.7,
                    zIndex: 0,
                  },
                }}
                initial="hidden"
                animate={position}
                transition={{
                  type: "spring",
                  stiffness: 140,
                  damping: 20,
                }}
                drag={position === "center" ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onPointerDown={() => setIsInteracting(true)}
                onDragEnd={(_, info) => {
                  if (info.offset.x > 80) paginate(-1);
                  if (info.offset.x < -80) paginate(1);
                  handleInteractionEnd();
                }}
              >
                <BasicCard
                  vector={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {services.map((_: any, i: number) => (
          <button
            key={i}
            onClick={() => {
              setIsInteracting(true);
              setIndex(i);
              handleInteractionEnd();
            }}
            className={`h-2 w-2 rounded-full transition-all ${
              i === index
                ? "bg-[#72D600] scale-125"
                : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};


/* =========================
   MAIN COMPONENT
========================= */
const Services = () => {
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
          our services
        </h1>
        <p className="mt-2 text-sm sm:text-lg text-white">
          Everything you need to grow, scale, and dominate the Web3 space.
        </p>
      </motion.div>

      {/* Mobile */}
      <MobileServiceSpotlight services={ServicesData} />

      {/* Desktop */}
      <motion.div
        variants={containerVariants}
        className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-5 sm:mt-16"
      >
        {ServicesData.map((service, index) => (
          <AnimatedServiceCard key={index} service={service} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Services;
