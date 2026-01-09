'use client'
import { motion } from "framer-motion";

const stats = [
  {
    value: "3.1M+",
    label: "Reach on X (formerly Twitter)",
  },
  {
    value: "50%",
    label: "Increase in followers",
  },
  {
    value: "24/7",
    label: "Community engagement",
  },
  {
    value: "10×",
    label: "Market cap growth",
  },
];

  const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 60,
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


const AnimatedStat = ({ value, label }: { value: string; label: string }) => {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{
        scale: 1.08,
        rotate: [-1, 1, -1, 0],
        boxShadow: "0px 0px 40px rgba(114,214,0,0.45)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 12 }}
      className="relative flex flex-col items-center gap-2 rounded-xl px-6 py-6"
    >
      {/* Glow pulse */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-[#72D600]/10 blur-xl"
        animate={{ opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 2.5, repeat: Infinity }}
      />

      <motion.h1
        className="relative text-2xl sm:text-5xl font-extrabold text-white"
        initial={{ scale: 0.6 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {value}
      </motion.h1>

      <p className="relative text-sm sm:text-base text-gray-400">
        {label}
      </p>
    </motion.div>
  );
};





const About = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="mx-auto max-w-7xl px-6 lg:px-8 pt-6 mt-10"
    >
      {/* Top section */}
      <div className="flex flex-col gap-6 md:flex-row md:gap-10">
        {/* Left */}
        <motion.h1
          variants={itemVariants}
          className="md:w-[30%] text-2xl sm:text-4xl font-bold uppercase tracking-wider text-[#616161]"
        >
          About Us
        </motion.h1>

        {/* Right */}
        <motion.p
          variants={itemVariants}
          className="md:w-[70%] text-sm sm:text-2xl font-medium sm:font-semibold leading-relaxed text-white"
        >
          Through community-first strategies, authentic engagement, and
          consistent marketing execution,
          <span className="text-[#72D600]"> DeHawk</span> bridges the gap between
          blockchain projects and their audience, solving visibility challenges
          and building trust that lasts.
        </motion.p>
      </div>

      {/* Stats */}
      <motion.div
        variants={containerVariants}
        className="mt-24 mx-auto max-w-6xl grid grid-cols-2 sm:grid-cols-4 gap-8 text-center"
      >
          {stats.map((item, index) => (
            <AnimatedStat
              key={index}
              value={item.value}
              label={item.label}
            />
          ))}
      </motion.div>
    </motion.div>
  );
};

export default About;

