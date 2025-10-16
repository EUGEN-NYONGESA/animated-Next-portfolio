import AnimateText from "@/components/AnimateText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/ProfilePic.webp";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Resume from "@/components/Resume";
import Experience from "@/components/Experience";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

function About() {
  return (
    <>
      <Head>
        <title>Digital Blacksmith | About Page</title>
        <meta name="description" content="my description" />
      </Head>

      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimateText
            text="Where Imagination meets Innovation!"
            className="mb-12"
          />

          {/* Main Content Layout */}
          <div className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-12">
            {/* Biography Section (Left-Aligned) */}
            <div className="w-full lg:w-2/5 flex flex-col items-start justify-start text-left">
              <h2 className="mb-4 text-lg font-bold uppercase text-primary">
                Biography
              </h2>

              <p className="my-4 font-medium">
                Hey, I'm Eugen — a Digital Blacksmith (Web App Developer & Data
                Analyst) with 2 years of experience crafting digital solutions
                and transforming data into actionable insights.
              </p>

              <p className="my-4 font-medium">
                With a passion for crafting digital experiences that resonate, I
                bridge the gap between visionary ideas and technical excellence.
                Every project is an opportunity to push boundaries and create
                something truly remarkable.
              </p>

              <p className="my-4 font-medium">
                I see technology as a space where imagination breathes life into
                innovation. Through thoughtful design and precise development, I
                transform abstract ideas into digital realities that connect,
                inspire, and endure.
              </p>

              <p className="my-4 font-medium">
                Your vision deserves more than just code—it deserves commitment,
                clarity, and creative partnership. I'm dedicated to bringing
                your ideas to life with precision and care, ensuring every
                solution not only meets but exceeds expectations.
              </p>
            </div>

            {/* Image Section (Right-Aligned & Balanced Height) */}
            <div className="w-full lg:w-2/5 flex items-stretch">
              <div className="relative w-full rounded-2xl border-2 border-solid border-dark bg-light p-6 shadow-lg flex items-center">
                <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
                <Image
                  src={profilePic}
                  alt="Eugen"
                  className="w-full h-full object-cover rounded-2xl bg-gray-800"
                  priority
                />
              </div>
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={30} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 whitespace-nowrap">
                  Satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={25} />+
                </span>
                <h2 className="text-lg font-medium capitalize text-dark/75 whitespace-nowrap">
                  Projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="text-lg font-medium capitalize text-dark/75 whitespace-nowrap">
                  Years of experience
                </h2>
              </div>
            </div>
          </div>

          <section className="mt-20">
            <h2 className="mb-12 text-6xl font-bold text-center text-dark dark:text-light">
              Work Experience
            </h2>
            <Experience />
          </section>

          {/* Resume Section with Title */}
          <section className="mt-20">
            <h2 className="mb-12 text-6xl font-bold text-center text-dark dark:text-light">
              More Info
            </h2>
            <Resume />
          </section>
        </Layout>
      </main>
    </>
  );
}

export default About;
