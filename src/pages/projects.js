import AnimateText from "@/components/AnimateText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import project2 from "../../public/images/projects/agency-website-cover-image.jpg";
import project3 from "../../public/images/projects/devdreaming.jpg";
import project4 from "../../public/images/projects/fashion-studio-website.jpg";
import project5 from "../../public/images/projects/nft-collection-website-cover-image.jpg";
import project6 from "../../public/images/projects/portfolio-cover-image.jpg";
import { motion } from "framer-motion";
import TransitionPage from "@/components/TransitionPage";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const featuredVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const imageHoverVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.03,
    transition: { 
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const cardHoverVariants = {
  initial: { 
    y: 0,
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
  },
  hover: { 
    y: -6,
    boxShadow: "0 12px 28px rgba(0,0,0,0.12)",
    transition: {
      duration: 0.25,
      ease: "easeOut"
    }
  }
};

const backgroundFloatVariants = {
  initial: { 
    x: 0,
    y: 0 
  },
  hover: { 
    x: 3,
    y: 3,
    transition: {
      duration: 0.25,
      ease: "easeOut"
    }
  }
};

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <motion.article
      variants={featuredVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover="hover"
      className="w-full flex flex-col lg:flex-row items-center justify-between rounded-2xl lg:rounded-3xl border-2 
  border-solid border-dark dark:border-gray-700 bg-light dark:bg-gray-900 shadow-lg lg:shadow-2xl p-4 sm:p-6 lg:p-8 gap-6 lg:gap-8 relative"
    >
      <motion.div 
        className="absolute top-0 -right-2 lg:-right-3 -z-10 w-[101%] h-[102%] rounded-2xl lg:rounded-[2rem] bg-dark dark:bg-gray-400 rounded-br-2xl lg:rounded-br-3xl"
        variants={backgroundFloatVariants}
      />
      
      <Link
        href={link}
        target="_blank"
        className="w-full lg:w-1/2 cursor-pointer overflow-hidden rounded-lg lg:rounded-xl border border-solid border-dark/20 dark:border-gray-600"
      >
        <motion.div
          variants={imageHoverVariants}
          whileHover="hover"
        >
          <Image
            src={img}
            alt={title}
            className="w-full h-auto"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 45vw, 40vw"
          />
        </motion.div>
      </Link>

      <div className="w-full lg:w-1/2 flex flex-col items-start justify-between gap-3 sm:gap-4">
        <motion.span 
          className="text-primary dark:text-primary font-medium text-base sm:text-lg lg:text-xl border-b-2 border-dark/20 dark:border-light/20 pb-1 sm:pb-2 w-full"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          {type}
        </motion.span>

        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-4 w-full"
        >
          <motion.h2 
            className="w-full text-left text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-dark dark:text-light hover:text-primary dark:hover:text-primary transition-colors duration-300"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ x: 3 }}
          >
            {title}
          </motion.h2>
        </Link>

        <motion.p 
          className="font-medium text-dark/75 dark:text-light/75 leading-relaxed text-sm sm:text-base border-t border-dark/10 dark:border-light/10 pt-3 sm:pt-4 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          {summary}
        </motion.p>

        <motion.div 
          className="mt-3 sm:mt-4 flex items-center gap-4 sm:gap-6 border-t border-dark/10 dark:border-light/10 pt-3 sm:pt-4 w-full"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={github}
              target="_blank"
              className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-dark dark:bg-light text-light dark:text-dark hover:bg-primary dark:hover:bg-primary transition-all duration-300"
            >
              <FaGithub className="text-lg sm:text-xl" />
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={link}
              target="_blank"
              className="rounded-lg bg-dark dark:bg-light text-light dark:text-dark py-2 px-4 sm:py-3 sm:px-6 text-sm sm:text-base font-semibold hover:bg-primary dark:hover:bg-primary transition-all duration-300"
            >
              Visit Project
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <motion.article
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      whileHover="hover"
      className="w-full flex flex-col items-center justify-center rounded-xl sm:rounded-2xl border border-solid border-dark dark:border-gray-700 bg-light dark:bg-gray-900 p-4 sm:p-6 relative shadow-md sm:shadow-lg"
    >
      <motion.div 
        className="absolute top-0 -right-2 sm:-right-3 -z-10 w-[101%] h-[102%] rounded-xl sm:rounded-[2rem] bg-dark dark:bg-gray-400 rounded-br-xl sm:rounded-br-3xl"
        variants={backgroundFloatVariants}
      />
      
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg border border-solid border-dark/20 dark:border-gray-600 mb-3 sm:mb-4"
      >
        <motion.div
          variants={imageHoverVariants}
          whileHover="hover"
        >
          <Image
            src={img}
            alt={title}
            className="w-full h-auto"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 25vw"
          />
        </motion.div>
      </Link>

      <div className="w-full flex flex-col items-start justify-between gap-2 sm:gap-3">
        <motion.span 
          className="text-primary dark:text-primary font-medium text-sm sm:text-base lg:text-lg border-b border-dark/20 dark:border-light/20 pb-1 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          {type}
        </motion.span>

        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 w-full"
        >
          <motion.h2 
            className="w-full text-left text-lg sm:text-xl lg:text-2xl font-bold text-dark dark:text-light hover:text-primary dark:hover:text-primary transition-colors duration-300"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ x: 2 }}
          >
            {title}
          </motion.h2>
        </Link>

        <motion.div 
          className="mt-2 sm:mt-3 flex items-center gap-3 sm:gap-4 border-t border-dark/10 dark:border-light/10 pt-2 sm:pt-3 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={github}
              target="_blank"
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-dark dark:bg-light text-light dark:text-dark hover:bg-primary dark:hover:bg-primary transition-all duration-300"
            >
              <FaGithub className="text-base sm:text-lg" />
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={link}
              target="_blank"
              className="rounded-lg bg-dark dark:bg-light text-light dark:text-dark py-1.5 px-3 sm:py-2 sm:px-4 text-xs sm:text-sm font-semibold hover:bg-primary dark:hover:bg-primary transition-all duration-300"
            >
              Visit
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.article>
  );
};

function Projects() {
  return (
    <>
      <Head>
        <title>Digital Blacksmith | Projects Page</title>
        <meta
          name="description"
          content="Explore my portfolio of web development projects, featuring modern technologies and innovative solutions."
        />
      </Head>

      <main className="w-full mb-12 sm:mb-16 flex flex-col items-center justify-center dark:bg-dark">
        <Layout className="pt-12 sm:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 sm:mb-16"
          >
            <AnimateText
              text="Where ideas meet execution, and vision becomes reality."
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl dark:text-light"
            />
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8 gap-y-12 sm:gap-y-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {/* Featured Projects - Full width on all screens */}
            <motion.div className="col-span-1 sm:col-span-2 lg:col-span-12" variants={featuredVariants}>
              <FeaturedProject
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your local currency."
                link="/"
                github="/"
                type="Featured Project"
              />
            </motion.div>

            {/* Regular Projects - Responsive grid */}
            <motion.div className="col-span-1 sm:col-span-2 lg:col-span-6 xl:col-span-6" variants={itemVariants}>
              <Project
                title="E-Commerce Platform"
                img={project2}
                link="/"
                github="/"
                type="Web Application"
              />
            </motion.div>

            <motion.div className="col-span-1 sm:col-span-2 lg:col-span-6 xl:col-span-6" variants={itemVariants}>
              <Project
                title="Task Management App"
                img={project3}
                link="/"
                github="/"
                type="Mobile App"
              />
            </motion.div>

            {/* Second Featured Project */}
            <motion.div className="col-span-1 sm:col-span-2 lg:col-span-12" variants={featuredVariants}>
              <FeaturedProject
                title="AI-Powered Analytics Dashboard"
                img={project4}
                summary="An advanced analytics dashboard with machine learning capabilities, real-time data processing, and interactive visualizations for business intelligence."
                link="/"
                github="/"
                type="Featured Project"
              />
            </motion.div>

            {/* More Regular Projects */}
            <motion.div className="col-span-1 sm:col-span-2 lg:col-span-6 xl:col-span-6" variants={itemVariants}>
              <Project
                title="Weather Forecast App"
                img={project5}
                link="/"
                github="/"
                type="Web Application"
              />
            </motion.div>

            <motion.div className="col-span-1 sm:col-span-2 lg:col-span-6 xl:col-span-6" variants={itemVariants}>
              <Project
                title="Social Media Dashboard"
                img={project6}
                link="/"
                github="/"
                type="Web Application"
              />
            </motion.div>
          </motion.div>
        </Layout>
      </main>
    </>
  );
}

export default Projects;