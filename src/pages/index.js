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

      <main className="flex flex-col justify-between items-center text-dark dark:text-light w-full h-screen relative overflow-hidden bg-light dark:bg-dark">
        <Layout className="pt-3 w-full flex-1 flex items-center justify-between">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full relative">
            {/* IMAGE SECTION */}
            <motion.div
              className="relative w-full lg:w-1/2 flex justify-center items-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <Image
                src={profilePic}
                alt="Digital Blacksmith"
                priority
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />

              {/* Fixed Gradient overlay */}
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-light via-light/80 to-transparent dark:from-dark dark:via-dark/80 dark:to-transparent pointer-events-none z-10"></div>
            </motion.div>

            {/* TEXT SECTION */}
            <motion.div
              className="w-full lg:w-1/2 flex flex-col items-start justify-center text-center lg:text-left px-6 relative z-20"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            >
              <AnimateText
                text="Building the future, one line of Code at a Time."
                className="!text-4xl !text-left sm:!text-5xl lg:!text-6xl font-bold leading-tight text-dark dark:text-light"
              />

              <motion.p
                className="my-4 text-base font-medium text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
              >
                Driven by curiosity and innovation, I turn complex ideas into
                powerful digital solutions. I'm passionate about creating
                technology that not only works flawlessly but also inspires
                progress. <br />
                <span className="text-primary">
                  – Because the future is written in code.
                </span>
              </motion.p>

              {/* BUTTONS */}
              <motion.div
                className="flex items-center gap-4 mt-4 flex-wrap justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center 
                    bg-dark dark:bg-light text-light dark:text-dark p-2.5 px-6 rounded-lg
                    text-lg font-semibold border-2 border-solid border-dark dark:border-light
                    transition-all duration-500 ease-in-out hover:bg-primary dark:hover:bg-primary
                    hover:text-dark dark:hover:text-light hover:shadow-xl hover:scale-105 active:scale-95
                    z-30"
                  download
                >
                  Resume <LinkArrow className="w-6 ml-2" />
                </Link>

                <Link
                  href="mailto:digitalblacksmith@gmail.com"
                  className="relative flex items-center justify-center 
                    bg-dark dark:bg-light text-light dark:text-dark p-2.5 px-6 rounded-lg
                    text-lg font-semibold border-2 border-solid border-dark dark:border-light
                    transition-all duration-500 ease-in-out hover:bg-primary dark:hover:bg-primary
                    hover:text-dark dark:hover:text-light hover:shadow-xl hover:scale-105 active:scale-95
                    z-30"
                >
                  Contact
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </Layout>

        <HireMe />

        {/* Light Bulb */}
        <motion.div
          className="absolute right-8 bottom-12 inline-block w-24 mb-14"
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
      </main>
    </>
  );
}
