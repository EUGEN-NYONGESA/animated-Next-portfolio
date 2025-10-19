import React from "react";
import { motion, useScroll } from "framer-motion";

function LiIcon({reference}) {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["start end", "center start"],
    layoutEffect: false,
  });
  
  return (
    <figure className="absolute left-0 sm:left-1 md:left-2 stroke-dark dark:stroke-primary">
      <svg 
        className="-rotate-90 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14" 
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r="20"
          className="stroke-primary stroke-1 fill-none"
        />
        <motion.circle 
          cx="50" 
          cy="50" 
          r="20" 
          className="stroke-[3px] sm:stroke-[4px] md:stroke-[5px] fill-light dark:fill-dark"
          style={{
            pathLength: scrollYProgress
          }} 
        />
        <circle 
          cx="50" 
          cy="50" 
          r="8" 
          className="animate-pulse stroke-1 fill-primary dark:fill-light" 
        />
      </svg>
    </figure>
  );
}

export default LiIcon;