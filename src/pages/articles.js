"use client";

import AnimateText from "@/components/AnimateText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaClock, FaStar, FaBookOpen } from "react-icons/fa";

import picArticle from "../../public/images/articles/create loading screen in react js.jpg";
import picArticle1 from "../../public/images/articles/create modal component in react using react portals.png";
import picArticle2 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import picArticle3 from "../../public/images/articles/pagination component in reactjs.jpg";
import picArticle4 from "../../public/images/articles/smooth scrolling in reactjs.png";
import picArticle5 from "../../public/images/articles/todo list app built using react redux and framer motion.png";
import picArticle6 from "../../public/images/articles/What is higher order component in React.jpg";
import picArticle7 from "../../public/images/articles/What is Redux with easy explanation.png";
import TransitionPage from "@/components/TransitionPage";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const featuredVariants = {
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

const articleVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const imageHoverVariants = {
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
    scale: 1,
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
  },
  hover: { 
    y: -6,
    scale: 1.02,
    boxShadow: "0 12px 28px rgba(0,0,0,0.12)",
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const FeaturedArticle = ({ img, title, time, summary, link, index }) => (
  <motion.li
    variants={featuredVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    whileHover="hover"
    className="col-span-12 w-full p-4 sm:p-6 lg:p-8 bg-light dark:bg-gray-900 border-2 border-solid border-dark/10 dark:border-gray-700 rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-lg lg:shadow-xl relative overflow-hidden group"
  >
    {/* Background gradient effect */}
    <motion.div 
      className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      initial={false}
    />
    
    {/* Featured badge */}
    <motion.div 
      className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-6 lg:right-6 flex items-center gap-1 sm:gap-2 text-primary dark:text-primary font-semibold text-xs sm:text-sm bg-primary/10 dark:bg-light/75 px-2 sm:px-3 py-1 rounded-full z-20"
      initial={{ opacity: 0, x: 15 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
    >
      <FaStar className="text-xs" />
      Featured
    </motion.div>

    <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8 relative z-10">
      {/* Image */}
      <div className="w-full lg:w-2/5">
        <Link
          href={link}
          target="_blank"
          className="w-full cursor-pointer overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl border border-solid border-dark/20 dark:border-gray-600 block"
        >
          <motion.div
            variants={imageHoverVariants}
            whileHover="hover"
            className="relative overflow-hidden"
          >
            <Image
              src={img}
              alt={title}
              className="w-full h-48 sm:h-56 lg:h-64 object-cover"
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
            />
            <motion.div 
              className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
          </motion.div>
        </Link>
      </div>

      {/* Text */}
      <div className="w-full lg:w-3/5 flex flex-col items-start justify-between gap-3 sm:gap-4">
        <motion.div 
          className="flex items-center gap-3 sm:gap-4 text-primary dark:text-primary font-medium text-sm sm:text-base"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <span className="flex items-center gap-1 sm:gap-2 bg-primary/10 dark:bg-primary/20 px-2 sm:px-3 py-1 rounded-full">
            <FaClock className="text-xs sm:text-sm" />
            {time}
          </span>
          <span className="text-dark/60 dark:text-light/60 text-xs sm:text-sm">
            Article #{index + 1}
          </span>
        </motion.div>

        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 sm:underline-offset-4 w-full group/title"
        >
          <motion.h2 
            className="w-full text-left text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-dark dark:text-light group-hover/title:text-primary dark:group-hover/title:text-primary transition-colors duration-300 leading-tight"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            {title}
          </motion.h2>
        </Link>

        <motion.p 
          className="font-medium text-dark/75 dark:text-light/75 leading-relaxed text-sm sm:text-base lg:text-lg border-t border-dark/10 dark:border-light/10 pt-2 sm:pt-3 lg:pt-4 w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          {summary}
        </motion.p>

        <motion.div 
          className="mt-2 sm:mt-3 lg:mt-4 flex items-center gap-3 sm:gap-4 border-t border-dark/10 dark:border-light/10 pt-2 sm:pt-3 lg:pt-4 w-full"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div 
            whileHover={{ scale: 1.05, x: 3 }} 
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2"
          >
            <Link
              href={link}
              target="_blank"
              className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base lg:text-lg font-semibold text-primary dark:text-primary hover:text-primary dark:hover:text-primary transition-all duration-300 bg-primary/10 hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30 px-4 sm:px-6 py-2 sm:py-3 rounded-full"
            >
              Read Article 
              <motion.span
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <FaArrowRight className="text-xs sm:text-sm" />
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </motion.li>
);

const Article = ({ img, title, time, summary, link, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article
      variants={articleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      whileHover="hover"
      className="w-full flex flex-col items-center justify-center rounded-lg sm:rounded-xl lg:rounded-2xl border border-solid border-dark/10 dark:border-gray-700 bg-light dark:bg-gray-900 p-4 sm:p-6 shadow-md sm:shadow-lg relative overflow-hidden group cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Hover background effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />
      
      <motion.div
        className="w-full cursor-pointer overflow-hidden rounded-lg border border-solid border-dark/20 dark:border-gray-600 mb-3 sm:mb-4"
        variants={imageHoverVariants}
        whileHover="hover"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-32 sm:h-36 lg:h-40 object-cover"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 25vw"
        />
      </motion.div>

      <div className="w-full flex flex-col items-start justify-between gap-2 sm:gap-3 relative z-10">
        <div className="flex items-center justify-between w-full">
          <span className="flex items-center gap-1 sm:gap-2 text-primary dark:text-primary font-medium text-xs sm:text-sm bg-primary/10 dark:bg-primary/20 px-2 sm:px-3 py-1 rounded-full">
            <FaClock className="text-xs" />
            {time}
          </span>
          <motion.span
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="text-dark/60 dark:text-light/60 text-xs bg-dark/5 dark:bg-light/5 p-1 rounded-full"
          >
            ▼
          </motion.span>
        </div>

        <motion.h2 
          className="w-full text-left text-base sm:text-lg lg:text-xl font-bold text-dark dark:text-light leading-tight"
          whileHover={{ color: "rgb(59 130 246)" }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h2>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden w-full"
            >
              <p className="text-dark/75 dark:text-light/75 text-sm sm:text-base leading-relaxed border-t border-dark/10 dark:border-light/10 pt-2 sm:pt-3 mb-2 sm:mb-3">
                {summary}
              </p>
              <motion.div
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <Link
                  href={link}
                  target="_blank"
                  className="inline-flex items-center gap-1 sm:gap-2 text-primary dark:text-primary font-semibold text-xs sm:text-sm hover:text-primary dark:hover:text-primary transition-all duration-300 bg-primary/10 hover:bg-primary/20 dark:bg-primary/20 dark:hover:bg-primary/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full"
                  onClick={(e) => e.stopPropagation()}
                >
                  Read Full Article 
                  <FaArrowRight className="text-xs" />
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {!isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="w-full"
          >
            <motion.div
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <button
                className="inline-flex items-center gap-1 text-dark/60 dark:text-light/60 font-medium text-xs sm:text-sm hover:text-primary dark:hover:text-primary transition-all duration-300 mt-1 sm:mt-2"
              >
                Tap to expand
              </button>
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.article>
  );
};

function Articles() {
  const articlesData = [
    {
      img: picArticle,
      title: "Creating Beautiful Loading Screens in React.js",
      time: "8 min read",
      summary: "Learn how to create engaging and user-friendly loading screens using React.js, CSS animations, and modern loading techniques that enhance user experience.",
      link: "#",
    },
    {
      img: picArticle1,
      title: "Building Modal Components with React Portals",
      time: "6 min read",
      summary: "Discover how to create accessible and reusable modal components using React Portals for better DOM structure and improved user interactions.",
      link: "#",
    },
    {
      img: picArticle2,
      title: "Advanced Form Validation with Custom React Hooks",
      time: "10 min read",
      summary: "Implement robust form validation using custom React hooks, covering error handling, real-time validation, and user feedback patterns.",
      link: "#",
    },
    {
      img: picArticle3,
      title: "Building a Reusable Pagination Component",
      time: "7 min read",
      summary: "Create a flexible pagination component for React applications with features like page navigation, item counting, and responsive design.",
      link: "#",
    },
    {
      img: picArticle4,
      title: "Smooth Scrolling Techniques in React.js",
      time: "5 min read",
      summary: "Explore various methods to implement smooth scrolling in React applications, including native CSS, JavaScript, and library-based solutions.",
      link: "#",
    },
    {
      img: picArticle5,
      title: "Todo App with React Redux & Framer Motion",
      time: "12 min read",
      summary: "Build a complete todo application using React Redux for state management and Framer Motion for beautiful animations and transitions.",
      link: "#",
    },
    {
      img: picArticle6,
      title: "Understanding Higher Order Components in React",
      time: "9 min read",
      summary: "Deep dive into Higher Order Components (HOCs) in React, learning how to create reusable logic and enhance component functionality.",
      link: "#",
    },
    {
      img: picArticle7,
      title: "Redux Explained: State Management Made Simple",
      time: "11 min read",
      summary: "A comprehensive guide to understanding Redux, its core concepts, and how to implement efficient state management in React applications.",
      link: "#",
    },
  ];

  return (
    <>
      <Head>
        <title>Digital Blacksmith | Articles Page</title>
        <meta
          name="description"
          content="Explore technical articles and tutorials on web development, React.js, and modern programming practices."
        />
      </Head>

      <main className="w-full mb-12 sm:mb-16 flex flex-col items-center justify-center overflow-hidden dark:bg-dark">
        <Layout className="pt-12 sm:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12"
          >
            <AnimateText 
              text="Sharing insights, sparking ideas." 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl dark:text-light"
            />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            className="inline-block w-full text-dark/75 dark:text-light/75 font-medium text-center capitalize mb-12 sm:mb-16 text-base sm:text-lg lg:text-xl leading-relaxed px-4"
          >
            Where code meets clarity and complexity finds simplicity
          </motion.h2>

          {/* Featured Articles */}
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-12 gap-4 sm:gap-6 lg:gap-8 gap-y-8 sm:gap-y-12 mb-12 sm:mb-16 lg:mb-20"
          >
            {articlesData.slice(0, 2).map((article, index) => (
              <FeaturedArticle key={index} {...article} index={index} />
            ))}
          </motion.ul>

          {/* Regular Articles Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12"
          >
            <div className="w-6 sm:w-8 h-px bg-dark/20 dark:bg-light/20"></div>
            <motion.h3
              className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-dark dark:text-light flex items-center gap-2 sm:gap-3"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              <FaBookOpen className="text-primary text-lg sm:text-xl" />
              More Articles
            </motion.h3>
            <div className="w-6 sm:w-8 h-px bg-dark/20 dark:bg-light/20"></div>
          </motion.div>

          {/* Regular Articles Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          >
            {articlesData.map((article, index) => (
              <Article key={index} {...article} index={index} />
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-center mt-12 sm:mt-16 lg:mt-20 p-6 sm:p-8 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-xl sm:rounded-2xl lg:rounded-3xl border border-primary/20"
          >
            <motion.h3 
              className="text-lg sm:text-xl lg:text-2xl font-bold text-dark dark:text-light mb-3 sm:mb-4"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            >
              Want more content like this?
            </motion.h3>
            <motion.p className="text-dark/75 dark:text-light/75 mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg">
              Stay tuned for more articles on modern web development and programming insights.
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 sm:gap-3 bg-primary text-light dark:text-dark px-6 sm:px-8 py-2.5 sm:py-3 lg:py-4 rounded-full text-sm sm:text-base lg:text-lg font-semibold hover:bg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get In Touch <FaArrowRight className="text-xs sm:text-sm" />
              </Link>
            </motion.div>
          </motion.div>
        </Layout>
      </main>
    </>
  );
}

export default Articles;