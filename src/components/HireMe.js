import Image from "next/image";
import React from "react";
import spinImage from "../../public/images/titlerb.png";
import Link from "next/link";

function HireMe({ size = "default" }) {
  // Size configurations
  const sizes = {
    small: {
      container: "w-[100px] h-[100px]",
      image: "w-[120px] h-[120px]",
      button: "w-[45px] h-[45px] text-[10px]"
    },
    default: {
      container: "w-[150px] h-[150px]",
      image: "w-[185px] h-[185px]",
      button: "w-[60px] h-[60px] text-xs"
    }
  };

  const config = sizes[size];

  return (
    <div className={`fixed ${size === 'small' ? 'top-4 right-4' : 'left-6 bottom-6'} flex items-center justify-center overflow-hidden z-[60]`}>
      {/* Outer Container */}
      <div className={`relative flex items-center justify-center ${config.container} rounded-full`}>
        {/* Outer Border (close to image) */}
        <div className="absolute inset-0 flex items-center justify-center rounded-full border-[3px] border-dark dark:border-light">
          {/* Rotating Image */}
          <Image
            src={spinImage}
            width={size === 'small' ? 120 : 185}
            height={size === 'small' ? 120 : 185}
            className="animate-slow-spin rounded-full object-cover 
                       dark:invert dark:brightness-150 transition duration-500 ease-in-out"
            alt="Spinning decorative element"
          />
        </div>

        {/* Center Button */}
        <Link
          href="mailto:digitalblacksmith@gmail.com"
          className={`absolute flex items-center justify-center 
          ${config.button} bg-dark dark:bg-primary text-light dark:text-dark rounded-full 
          font-semibold border-2 border-solid border-dark dark:border-light
          shadow-lg transition-all duration-300 ease-in-out
          hover:bg-primary
          dark:hover:bg-primary
          hover:text-dark dark:hover:text-light hover:scale-110 hover:shadow-2xl`}
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
}

export default HireMe;