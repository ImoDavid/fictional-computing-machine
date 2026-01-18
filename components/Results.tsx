'use client'
import { motion } from "framer-motion";

/* =========================
   DATA
========================= */
const stats = [
  {
    value: "6×",
    sub: "Reach",
    label:
      "Break into wider audiences through coordinated influencer and community-driven strategies.",
  },
  {
    value: "4×",
    sub: "User engagement",
    label:
      "Spark organic conversations that lead to deeper user engagement and brand recognition.",
  },
  {
    value: "1,190%",
    sub: "Interactions",
    label:
      "Increased engagement across platforms, turning passive followers into active supporters.",
  },
  {
    value: "426%",
    sub: "Positive sentiments",
    label:
      "Strengthen sentiment and loyalty, ensuring communities genuinely connect with the project’s mission.",
  },
];

/* =========================
   ANIMATION VARIANTS
========================= */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.25,
    },
  },
};

const statCard = {
  hidden: {
    opacity: 0,
    y: 70,
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
      stiffness: 90,
      damping: 18,
    },
  },

};

/* =========================
   STAT ITEM
========================= */
const AnimatedStat = ({ item }: any) => {
  return (
    <motion.div
  variants={statCard}
  whileHover={{ scale: 1.06 }}
  transition={{ type: "spring", stiffness: 260, damping: 14 }}
  className="
    relative
    flex flex-col
    gap-3
    h-full
    px-2
    items-start sm:items-center
    text-left sm:text-center
  "
>

      {/* Glow pulse */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-[#72D600]/10 blur-xl"
        animate={{ opacity: [0.15, 0.5, 0.15] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      {/* Value */}
      <motion.h1
  className="w-full text-2xl sm:text-5xl font-extrabold text-white text-left sm:text-center"
>
  {item.value}
</motion.h1>


      {/* Sub */}
     <p className="text-sm sm:text-base capitalize font-bold text-[#72D600]">
  {item.sub}
</p>


      {/* Label */}
     <p className="text-sm font-medium text-white/80 leading-relaxed min-h-[3.5rem] sm:min-h-0">
  {item.label}
</p>

    </motion.div>
  );
};

/* =========================
   MAIN COMPONENT
========================= */
const Results = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      variants={container}
      className="mx-auto max-w-7xl px-6 lg:px-8 pt-6 mt-24"
    >
      {/* Header */}
      <motion.div variants={statCard} className="text-center">
        <h1 className="text-2xl lg:text-4xl font-semibold tracking-tight text-[#72D600] capitalize">
          Results
        </h1>

        <p className="mt-2 text-sm sm:text-lg text-white">
          Our campaigns drive sustainable growth by scaling your visibility,
          engagement, and user loyalty.
        </p>
      </motion.div>

      {/* Stats Container */}
      <motion.div
        variants={container}
        className="bg-[#053316] px-4 sm:px-6 py-10 rounded-2xl mt-14"
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-stretch">
          {stats.map((item, index) => (
            <AnimatedStat key={index} item={item} />
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Results;
