"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedCount = ({ finalCount, duration = 1, className }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const controls = useAnimation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      });

      let start = 0;
      const end = finalCount;
      if (start === end) return;

      let totalFrames = duration * 60; // Assuming 60 frames per second
      let incrementSize = end / totalFrames;

      let animateCountUp = () => {
        start += incrementSize;
        setCount(start);
        if (start < end) {
          requestAnimationFrame(animateCountUp);
        }
      };

      animateCountUp();
    }
  }, [controls, inView, finalCount, duration]);

  return (
    <motion.p
      ref={ref}
      animate={controls}
      className={`text-ogPrimary  md:font-semibold p-0 py-0 px-0 w-fit h-min leading-none ${className} `}
      style={{
        lineHeight: "1",
      }}
    >
      {Math.floor(count / 1000)}K
    </motion.p>
  );
};

export default AnimatedCount;
