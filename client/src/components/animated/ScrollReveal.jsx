// src/components/animated/ScrollReveal.js
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export default function ScrollReveal({
  children,
  threshold = 0.2,
  delay = 0,
  duration = 0.5,
  yOffset = 20,
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold });
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: { delay, duration },
      });
      hasAnimated.current = true;
    }
  }, [controls, inView, delay, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: yOffset, opacity: 0 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
}
