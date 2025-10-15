import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePic from "../../public/images/profile/AfroBlack.png";
import AnimateText from "@/components/AnimateText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icon";
import HireMe from "@/components/HireMe";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";

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

      <main className="flex flex-col justify-between items-center text-dark w-full h-screen relative overflow-hidden bg-light dark:bg-dark">
        {/* Top Section */}
        <Layout className="pt-3 w-full flex-1 flex items-center justify-between">
          <div className="flex flex-col lg:flex-row items-center justify-between w-full relative">
            {/* IMAGE SECTION */}
            <div className="relative w-full lg:w-1/2 flex justify-center items-center">
              <Image
                src={profilePic}
                alt="Digital Blacksmith"
                priority
                className="w-full h-auto object-cover"
              />

              {/* Gradient overlay */}
              <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-light to-transparent dark:from-dark/90 pointer-events-none z-10"></div>
            </div>

            {/* TEXT SECTION */}
            <div className="w-full lg:w-1/2 flex flex-col items-start justify-center text-center lg:text-left px-6 relative z-20">
              <AnimateText
                text="Building the future, one line of Code at a Time."
                className="!text-4xl !text-left sm:!text-5xl lg:!text-6xl font-bold leading-tight"
              />

              <p className="my-4 text-base font-medium text-gray-700 dark:text-gray-300">
                Driven by curiosity and innovation, I turn complex ideas into
                powerful digital solutions. I'm passionate about creating
                technology that not only works flawlessly but also inspires
                progress. <br />– Because the future is written in code.
              </p>

              {/* BUTTONS */}
              <div className="flex items-center gap-4 mt-4 flex-wrap justify-center lg:justify-start">
                <Link
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center 
                  bg-dark text-light p-2.5 px-6 rounded-lg
                  text-lg font-semibold border-2 border-solid border-dark
                  transition-all duration-500 ease-in-out hover:bg-gray-300 
                  hover:text-dark hover:shadow-xl hover:scale-105 active:scale-95
                  z-30"
                  download
                >
                  Resume <LinkArrow className="w-6 ml-2" />
                </Link>

                <Link
                  href="mailto:digitalblacksmith@gmail.com"
                  className="relative flex items-center justify-center 
                  bg-dark text-light p-2.5 px-6 rounded-lg
                  text-lg font-semibold border-2 border-solid border-dark
                  transition-all duration-500 ease-in-out hover:bg-gray-300
                  hover:text-dark hover:shadow-xl hover:scale-105 active:scale-95
                  z-30"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-12 inline-block w-24 mb-14">
          <Image src={lightBulb} className="w-full h-auto" alt="" />
        </div>
      </main>
    </>
  );
}
