import AnimateText from "@/components/AnimateText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/ProfilePic.webp";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";
import Resume from "@/components/Resume";
import Experience from "@/components/Experience";

// Enhanced animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8
    }
  }
};

const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: [0.25, 0.46, 0.45, 0.94],
      scale: {
        duration: 0.6,
        ease: "backOut"
      }
    },
  },
};

const fadeInLeft = {
  hidden: { 
    opacity: 0, 
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut"
    },
  },
};

const fadeInRight = {
  hidden: { 
    opacity: 0, 
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { 
      duration: 0.8, 
      ease: "easeOut"
    },
  },
};

const imageVariants = {
  hidden: { 
    opacity: 0, 
    scale: 1.1,
    rotateY: -10 
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: { 
      duration: 1, 
      ease: "easeOut",
      scale: {
        duration: 1.2,
        ease: "backOut"
      }
    },
  },
};

const floatingAnimation = {
  initial: { y: 0 },
  animate: { 
    y: [-10, 10, -10],
    transition: { 
      duration: 4, 
      repeat: Infinity, 
      ease: "easeInOut" 
    } 
  }
};

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { 
    duration: 3000,
    bounce: 0.2
  });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value)
        ref.current.textContent = latest.toFixed(0);
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

function About() {
  return (
    <>
      <Head>
        <title>Digital Blacksmith | About Page</title>
        <meta name="description" content="Learn more about Digital Blacksmith - Web App Developer & Data Analyst with 2 years of experience crafting digital solutions." />
      </Head>

      <main className="flex w-full flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AnimateText
              text="Where Imagination meets Innovation!"
              className="mb-12"
            />
          </motion.div>

          {/* Main Content Layout */}
          <motion.div
            className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Biography Section */}
            <motion.div
              className="w-full lg:w-2/5 flex flex-col items-start justify-start text-left"
              variants={fadeInLeft}
              whileHover={{ 
                x: 5,
                transition: { duration: 0.3 }
              }}
            >
              <motion.h2 
                className="mb-4 text-lg font-bold uppercase text-primary"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Biography
              </motion.h2>

              {[
                "Hey, I'm Eugen — a Digital Blacksmith (Web App Developer & Data Analyst) with 2 years of experience crafting digital solutions and transforming data into actionable insights.",
                "With a passion for crafting digital experiences that resonate, I bridge the gap between visionary ideas and technical excellence. Every project is an opportunity to push boundaries and create something truly remarkable.",
                "I see technology as a space where imagination breathes life into innovation. Through thoughtful design and precise development, I transform abstract ideas into digital realities that connect, inspire, and endure.",
                "Your vision deserves more than just code—it deserves commitment, clarity, and creative partnership. I'm dedicated to bringing your ideas to life with precision and care, ensuring every solution not only meets but exceeds expectations."
              ].map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="my-4 font-medium text-dark/75 dark:text-light/75"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02,
                    x: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="w-full lg:w-2/5 flex items-stretch"
              variants={imageVariants}
            >
              <motion.div 
                className="relative w-full rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark p-6 shadow-2xl flex items-center"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-transparent"
                  variants={floatingAnimation}
                  initial="initial"
                  animate="animate"
                />
                <Image
                  src={profilePic}
                  alt="Eugen"
                  className="w-full h-full object-cover rounded-2xl bg-gray-800"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </motion.div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              className="col-span-2 flex flex-col items-end justify-between gap-8"
              variants={fadeInRight}
            >
              {[
                { value: 30, label: "Satisfied clients" },
                { value: 25, label: "Projects completed" },
                { value: 2, label: "Years of experience" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-end justify-center"
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: i * 0.3, 
                    duration: 0.7,
                    scale: {
                      type: "spring",
                      stiffness: 100
                    }
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    x: -5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <span className="inline-block text-7xl font-bold dark:text-primary bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                    <AnimatedNumbers value={stat.value} />+
                  </span>
                  <motion.h2 
                    className="text-xl font-medium capitalize text-dark/75 dark:text-light whitespace-nowrap mt-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.3 + 0.5 }}
                  >
                    {stat.label}
                  </motion.h2>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Work Experience Section */}
          <motion.section
            className="mt-32"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="mb-16 text-6xl font-bold text-center text-dark dark:text-light"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Work Experience
            </motion.h2>
            <Experience />
          </motion.section>

          {/* Resume Section */}
          <motion.section
            className="mt-32"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="mb-16 text-6xl font-bold text-center text-dark dark:text-light"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              More Info
            </motion.h2>
            <Resume />
          </motion.section>
        </Layout>
      </main>
    </>
  );
}

export default About;