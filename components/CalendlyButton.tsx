"use client";

import { useEffect, useState } from "react";
import { PopupModal } from "react-calendly";
import { motion } from "framer-motion";

interface CalendlyButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function CalendlyButton({
  className,
  children = "Schedule a Call",
}: CalendlyButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    setRootElement(document.body);
  }, []);

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.08 }}
        animate={{
          boxShadow: [
            "0 0 0 rgba(0,0,0,0)",
            "0 0 25px rgba(114,214,0,0.35)",
            "0 0 0 rgba(0,0,0,0)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className={className}
      >
        {children}
      </motion.button>

      {rootElement && (
        <PopupModal
          url="https://calendly.com/dehawkagency/30min"
          open={isOpen}
          onModalClose={() => setIsOpen(false)}
          rootElement={rootElement}
        />
      )}
    </>
  );
}