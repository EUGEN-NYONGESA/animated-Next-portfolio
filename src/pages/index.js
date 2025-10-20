import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/AfroBlack.png";
import AnimateText from "@/components/AnimateText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icon";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import { motion } from "framer-motion";
import TransitionPage from "@/components/TransitionPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Digital Blacksmith | Portfolio</title>
        <meta
          name="description"
          content="Building the future, one line of code at a time."
        />
      </Head>

      <main className="w-full min-h-screen bg-light dark:bg-dark relative">
        {/* HireMe - Top Right (Small & Medium Screens) */}
        <div className="block md:block lg:hidden fixed top-4 right-4 z-[60]">
          <HireMe size="small" />
        </div>

        <Layout className="pt-0 mt-10">
          <div className="flex flex-col lg:flex-row items-center w-full gap-8 lg:gap-12">
            {/* IMAGE SECTION - Responsive sizing */}
            <motion.div
              className="
                w-full lg:w-1/2 relative 
                flex justify-center items-center
                px-4 sm:px-8 md:px-12 lg:px-0
              "
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <div className="
                w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl
                relative
              ">
                <Image
                  src={profilePic}
                  alt="Digital Blacksmith"
                  priority
                  className="
                    w-full h-auto object-cover rounded-2xl
                  "
                  sizes="
                    (max-width: 640px) 320px,
                    (max-width: 768px) 384px, 
                    (max-width: 1024px) 448px,
                    (max-width: 1280px) 512px,
                    576px
                  "
                />
                
                {/* Gradient overlay */}
                <div
                  className="
                    absolute bottom-0 left-0 w-full h-1/3 
                    bg-gradient-to-t from-light via-light/80 to-transparent 
                    dark:from-dark dark:via-dark/80 dark:to-transparent 
                    pointer-events-none
                  "
                ></div>
              </div>
            </motion.div>

            {/* TEXT SECTION */}
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              <AnimateText
                text="Building the future, one line of Code at a Time."
                className="
                  !font-bold text-dark dark:text-light 
                  text-2xl sm:text-2xl md:text-5xl lg:text-6xl xl:text-7xl
                  w-full text-center lg:text-left leading-tight
                "
              />

              <motion.p
                className="
                  my-4 sm:my-5 md:my-6 
                  text-base sm:text-lg md:text-xl lg:text-xl
                  text-gray-700 dark:text-gray-300 
                  w-full text-center lg:text-left 
                  leading-relaxed
                "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Driven by curiosity and innovation, I turn complex ideas into
                powerful digital solutions. I'm passionate about creating
                technology that not only works flawlessly but also inspires
                progress.
                <br />
                <span className="text-primary font-semibold">
                  – Because the future is written in code.
                </span>
              </motion.p>

              {/* BUTTONS */}
              <motion.div
                className="
                  flex items-center gap-4 mt-6 sm:mt-7 md:mt-8 
                  flex-wrap justify-center lg:justify-start
                "
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center 
                    bg-dark dark:bg-light text-light dark:text-dark 
                    py-2.5 sm:py-3 px-6 sm:px-8 
                    rounded-lg 
                    text-base sm:text-lg font-semibold 
                    border-2 border-dark dark:border-light 
                    hover:bg-primary dark:hover:bg-primary 
                    hover:text-dark dark:hover:text-light 
                    transition-all duration-300 
                    min-w-[140px] sm:min-w-[160px]
                    justify-center
                  "
                  download
                >
                  Resume <LinkArrow className="w-5 sm:w-6 ml-2" />
                </Link>

                <Link
                  href="mailto:digitalblacksmith@gmail.com"
                  className="
                    flex items-center 
                    bg-dark dark:bg-light text-light dark:text-dark 
                    py-2.5 sm:py-3 px-6 sm:px-8 
                    rounded-lg 
                    text-base sm:text-lg font-semibold 
                    border-2 border-dark dark:border-light 
                    hover:bg-primary dark:hover:bg-primary 
                    hover:text-dark dark:hover:text-light 
                    transition-all duration-300 
                    min-w-[140px] sm:min-w-[160px]
                    justify-center
                  "
                >
                  Contact
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </Layout>

        {/* Light Bulb */}
        <motion.div 
          className="hidden lg:inline-block absolute right-6 bottom-12 w-20 sm:w-24 z-20"
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            type: "spring",
            stiffness: 100,
          }}
          whileHover={{
            scale: 1.1,
            rotate: 10,
            transition: { duration: 0.2 },
          }}
        >
          <Image
            src={lightBulb}
            className="w-full h-auto filter dark:invert dark:brightness-200"
            alt="Light bulb icon"
          />
        </motion.div>

        {/* HireMe - Bottom Left (Large Screens) */}
        <div className="hidden lg:block fixed left-8 bottom-12 z-[60]">
          <HireMe />
        </div>
      </main>
    </>
  );
}