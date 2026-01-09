'use client'
import { motion } from "framer-motion";

/* =========================
   DATA
========================= */
const services = [
  {
    step: "01",
    title: "Audit & Strategy",
    description:
      "We begin by analyzing your project, identifying key audience gaps, and crafting a personalized, data-driven plan.",
  },
  {
    step: "02",
    title: "Execution & Growth",
    description:
      "We deploy targeted strategies designed to scale visibility, engagement, and adoption across Web3 channels.",
  },
  {
    step: "03",
    title: "Optimization & Scaling",
    description:
      "We continuously refine performance using analytics, ensuring long-term growth and sustainability.",
  },
];

/* =========================
   ANIMATIONS
========================= */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const row = {
  hidden: {
    opacity: 0,
    y: 50,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring" as const,
      stiffness: 90,
      damping: 18,
    },
  },
};

/* =========================
   COMPONENT
========================= */
const HowWeWork = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      variants={container}
      className="mx-auto max-w-7xl px-6 lg:px-8 pt-6 mt-24"
    >
      {/* Header */}
      <motion.div variants={row} className="text-left max-w-3xl">
        <h1 className="text-lg lg:text-4xl font-semibold tracking-tight text-[#72D600] capitalize">
          How we work
        </h1>
        <p className="mt-2 text-sm sm:text-lg text-white">
          Our three-step process for building sustainable Web3 growth.
        </p>
      </motion.div>

      {/* =====================
          MOBILE VIEW
      ====================== */}
      <div className="mt-10 flex flex-col gap-6 md:hidden">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={row}
            className="relative rounded-xl bg-[#053316] p-6"
          >
            {/* Step badge */}
            <div className="absolute -top-4 left-4 bg-[#72D600] text-black text-sm font-bold px-3 py-1 rounded-full">
              Step {service.step}
            </div>

            <h2 className="mt-4 text-xl font-bold text-white">
              {service.title}
            </h2>
            <p className="mt-2 text-sm text-gray-300">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* =====================
          DESKTOP VIEW
      ====================== */}
      <motion.div
        variants={container}
        className="hidden md:flex mt-14 flex-col gap-8 max-w-6xl"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={row}
            className="grid grid-cols-[0.4fr_1fr_1.5fr] gap-6 items-start"
          >
            {/* Step */}
            <div>
              <h2 className="text-white text-5xl font-bold">
                {service.step}
              </h2>
            </div>

            {/* Title */}
            <div>
              <h2 className="text-white text-3xl font-bold max-w-50">
                {service.title}
              </h2>
            </div>

            {/* Description */}
            <div>
              <p className="text-gray-400">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default HowWeWork;
