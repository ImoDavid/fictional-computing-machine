'use client'
import { FiMail } from "react-icons/fi";
import { MdSend } from "react-icons/md";
import { motion } from "framer-motion";

/* =====================
   ANIMATION VARIANTS
===================== */
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const ContactUs = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      variants={container}
      className="mx-auto max-w-7xl px-6 lg:px-8 pt-6 mt-24"
    >
      {/* Header */}
      <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl lg:text-4xl font-semibold tracking-tight text-[#72D600] capitalize">
          Let’s build together
        </h2>

        <p className="mt-2 text-sm sm:text-lg text-white">
          Ready to grow your Web3 community? Reach out to us directly or fill
          out the form.
        </p>
      </motion.div>

      {/* Content */}
      <motion.div
        variants={container}
        className="mt-14 flex flex-col lg:flex-row gap-12 w-full"
      >
        {/* Left: Contact Info */}
        <motion.div variants={fadeUp} className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-lg lg:text-3xl font-semibold text-[#72D600]">
            Contact us
          </h2>

          <motion.div variants={fadeUp}>
            <a
              href="mailto:contact@dehawk.xyz"
              className="flex items-center gap-5 group p-4 -ml-4 rounded-2xl hover:bg-white/5 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#72D600]/10 group-hover:bg-[#72D600] transition-all duration-300">
                <FiMail
                  className="text-[#72D600] group-hover:text-black transition-colors"
                  size={24}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Email</span>
                <span className="text-lg font-semibold text-white">
                  contact@dehawk.xyz
                </span>
              </div>
            </a>
          </motion.div>

          <motion.div variants={fadeUp}>
            <a
              href="https://t.me/EhDhizy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 group p-4 -ml-4 rounded-2xl hover:bg-white/5 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#72D600]/10 group-hover:bg-[#72D600] transition-all duration-300">
                <MdSend
                  className="text-[#72D600] group-hover:text-black transition-colors"
                  size={24}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500">Telegram</span>
                <span className="text-lg font-semibold text-white">
                  Message us on Telegram
                </span>
              </div>
              <span className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 text-[#72D600]">
                →
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Form */}
        <motion.form variants={fadeUp} className="w-full lg:w-1/2 space-y-4">
          <form
            action="https://formspree.io/f/mgonvkkj"
            method="POST"
            className="space-y-6"
          >
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-700 bg-white px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-[#72D600]"
                />
              </div>

              <div className="w-full">
                <label className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-700 bg-white px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-[#72D600]"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">
                Company (optional)
              </label>
              <input
                type="text"
                name="company"
                className="mt-1 block w-full rounded-md border border-gray-700 bg-white px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-[#72D600]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                required
                className="mt-1 block w-full rounded-md border border-gray-700 bg-white px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-[#72D600]"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-md bg-[#053316] px-6 py-3 font-medium text-white transition hover:bg-[#064d20] focus:outline-none focus:ring-2 focus:ring-[#72D600]"
            >
              Send Inquiry
            </button>
          </form>
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default ContactUs;
