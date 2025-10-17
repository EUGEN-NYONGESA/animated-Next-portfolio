import Image from "next/image";
import React from "react";
import spinImage from "../../public/images/titlerb.png";
import Link from "next/link";

function HireMe() {
  return (
    <div className="fixed left-6 bottom-6 flex items-center justify-center overflow-hidden z-50">
      {/* Outer Container */}
      <div className="relative flex items-center justify-center w-[150px] h-[150px] rounded-full">
        {/* Outer Border (close to image) */}
        <div className="absolute inset-0 flex items-center justify-center dark:bg-gray-700 rounded-full border-[3px] border-dark dark:border-light">
          {/* Rotating Image */}
          <Image
            src={spinImage}
            width={185}
            height={185}
            className="animate-slow-spin rounded-full object-cover"
            alt="Spinning decorative element"
          />
        </div>

        {/* Center Button */}
        <Link
          href="mailto:digitalblacksmith@gmail.com"
          className="absolute flex items-center justify-center 
          w-[60px] h-[60px] bg-dark dark:bg-primary text-light dark:text-dark rounded-full 
          text-xs font-semibold border-2 border-solid border-dark dark:border-light
          shadow-lg transition-all duration-300 ease-in-out
          hover:bg-primary
          dark:hover:bg-primary
          hover:text-dark dark:hover:text-light hover:scale-110 hover:shadow-2xl"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
}

export default HireMe;