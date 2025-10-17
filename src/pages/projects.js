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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
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
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const featuredVariants = {
  hidden: { 
    opacity: 0, 
    y: 80,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut"
    }
  }
};

const imageHoverVariants = {
  initial: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { 
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const cardHoverVariants = {
  initial: { 
    y: 0,
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
  },
  hover: { 
    y: -8,
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    transition: {
      duration: 0.3,
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
    x: 4,
    y: 4,
    transition: {
      duration: 0.3,
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
      viewport={{ once: true, amount: 0.3 }}
      whileHover="hover"
      className="w-full flex items-center justify-between rounded-3xl border-2 
  border-solid border-dark dark:border-gray-700 bg-light dark:bg-gray-900 shadow-2xl p-8 gap-8 relative"
    >
      <motion.div 
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-gray-400 rounded-br-3xl"
        variants={backgroundFloatVariants}
      />
      
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-xl border border-solid border-dark/20 dark:border-gray-600"
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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </motion.div>
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between gap-4">
        <motion.span 
          className="text-primary dark:text-primary font-medium text-xl border-b-2 border-dark/20 dark:border-light/20 pb-2 w-full"
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
            className="w-full text-left text-4xl font-bold text-dark dark:text-light hover:text-primary dark:hover:text-primary transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ x: 5 }}
          >
            {title}
          </motion.h2>
        </Link>

        <motion.p 
          className="font-medium text-dark/75 dark:text-light/75 leading-relaxed border-t border-dark/10 dark:border-light/10 pt-4 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          {summary}
        </motion.p>

        <motion.div 
          className="mt-4 flex items-center gap-6 border-t border-dark/10 dark:border-light/10 pt-4 w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={github}
              target="_blank"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-dark dark:bg-light text-light dark:text-dark hover:bg-primary dark:hover:bg-primary transition-all duration-300"
            >
              <FaGithub className="text-2xl" />
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={link}
              target="_blank"
              className="rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-3 px-8 text-lg font-semibold hover:bg-primary dark:hover:bg-primary transition-all duration-300"
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
      viewport={{ once: true, amount: 0.2 }}
      whileHover="hover"
      className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-gray-700 bg-light dark:bg-gray-900 p-6 relative shadow-lg"
    >
      <motion.div 
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-gray-400 rounded-br-3xl"
        variants={backgroundFloatVariants}
      />
      
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg border border-solid border-dark/20 dark:border-gray-600 mb-4"
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
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          />
        </motion.div>
      </Link>

      <div className="w-full flex flex-col items-start justify-between gap-3">
        <motion.span 
          className="text-primary dark:text-primary font-medium text-lg border-b border-dark/20 dark:border-light/20 pb-1 w-full"
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
            className="w-full text-left text-2xl font-bold text-dark dark:text-light hover:text-primary dark:hover:text-primary transition-colors duration-300"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ x: 3 }}
          >
            {title}
          </motion.h2>
        </Link>

        <motion.div 
          className="mt-2 flex items-center gap-4 border-t border-dark/10 dark:border-light/10 pt-3 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={github}
              target="_blank"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-dark dark:bg-light text-light dark:text-dark hover:bg-primary dark:hover:bg-primary transition-all duration-300"
            >
              <FaGithub className="text-xl" />
            </Link>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={link}
              target="_blank"
              className="rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 text-base font-semibold hover:bg-primary dark:hover:bg-primary transition-all duration-300"
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
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:bg-dark">
        <Layout className="pt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AnimateText
              text="Where ideas meet execution, and vision becomes reality."
              className="mb-16 dark:text-light"
            />
          </motion.div>

          <motion.div 
            className="grid grid-cols-12 gap-8 gap-y-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div className="col-span-12" variants={featuredVariants}>
              <FeaturedProject
                title="Crypto Screener Application"
                img={project1}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
local currency."
                link="/"
                github="/"
                type="Featured Project"
              />
            </motion.div>

            <motion.div className="col-span-6" variants={itemVariants}>
              <Project
                title="E-Commerce Platform"
                img={project2}
                link="/"
                github="/"
                type="Web Application"
              />
            </motion.div>

            <motion.div className="col-span-6" variants={itemVariants}>
              <Project
                title="Task Management App"
                img={project3}
                link="/"
                github="/"
                type="Mobile App"
              />
            </motion.div>

            <motion.div className="col-span-12" variants={featuredVariants}>
              <FeaturedProject
                title="AI-Powered Analytics Dashboard"
                img={project4}
                summary="An advanced analytics dashboard with machine learning capabilities, real-time data processing, and interactive visualizations for business intelligence."
                link="/"
                github="/"
                type="Featured Project"
              />
            </motion.div>

            <motion.div className="col-span-6" variants={itemVariants}>
              <Project
                title="Weather Forecast App"
                img={project5}
                link="/"
                github="/"
                type="Web Application"
              />
            </motion.div>

            <motion.div className="col-span-6" variants={itemVariants}>
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