"use client";

import AnimateText from "@/components/AnimateText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaClock } from "react-icons/fa";

import picArticle from "../../public/images/articles/create loading screen in react js.jpg";
import picArticle1 from "../../public/images/articles/create modal component in react using react portals.png";
import picArticle2 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import picArticle3 from "../../public/images/articles/pagination component in reactjs.jpg";
import picArticle4 from "../../public/images/articles/smooth scrolling in reactjs.png";
import picArticle5 from "../../public/images/articles/todo list app built using react redux and framer motion.png";
import picArticle6 from "../../public/images/articles/What is higher order component in React.jpg";
import picArticle7 from "../../public/images/articles/What is Redux with easy explanation.png";

const FeaturedArticle = ({ img, title, time, summary, link }) => (
  <motion.li
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeInOut" }}
    viewport={{ once: true }}
    className="col-span-12 w-full p-6 bg-light border-2 border-solid border-dark rounded-2xl shadow-xl transition-all duration-300"
    whileHover={{ 
      scale: 1.02,
      y: -5,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
    }}
  >
    <div className="flex flex-col lg:flex-row items-center gap-6">
      {/* Image */}
      <div className="w-full lg:w-2/5">
        <Link
          href={link}
          target="_blank"
          className="w-full cursor-pointer overflow-hidden rounded-lg border border-solid border-dark/20 block"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Image
              src={img}
              alt={title}
              className="w-full h-48 object-cover rounded-lg"
              priority
            />
          </motion.div>
        </Link>
      </div>

      {/* Text */}
      <div className="w-full lg:w-3/5 flex flex-col items-start justify-between gap-3">
        <div className="flex items-center gap-4 text-primary font-medium text-base">
          <span>Featured Article</span>
          <span className="flex items-center gap-1">
            <FaClock className="text-sm" />
            {time}
          </span>
        </div>

        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-4 w-full"
        >
          <h2 className="w-full text-left text-2xl font-bold text-dark hover:text-primary transition-colors duration-300">
            {title}
          </h2>
        </Link>

        <p className="font-medium text-dark/75 leading-relaxed border-t border-dark/10 pt-3 w-full text-base">
          {summary}
        </p>

        <Link
          href={link}
          target="_blank"
          className="mt-3 flex items-center gap-2 text-base font-semibold text-primary hover:gap-4 transition-all duration-300"
        >
          Read More <FaArrowRight />
        </Link>
      </div>
    </div>
  </motion.li>
);

const Article = ({ img, title, time, summary, link }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className="w-full flex flex-col items-center justify-center rounded-xl border border-solid border-dark bg-light p-4 shadow-lg transition-all duration-300 cursor-pointer"
      whileHover={{ 
        scale: 1.05,
        y: -8,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <motion.div
        className="w-full cursor-pointer overflow-hidden rounded-lg border border-solid border-dark/20 mb-3"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-32 object-cover"
          priority
        />
      </motion.div>

      <div className="w-full flex flex-col items-start justify-between gap-2">
        <div className="flex items-center justify-between w-full">
          <span className="text-primary font-medium text-xs border-b border-dark/20 pb-1">
            {time}
          </span>
          <motion.span
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="text-dark/60 text-sm"
          >
            ▼
          </motion.span>
        </div>

        <h2 className="w-full text-left text-lg font-bold text-dark hover:text-primary transition-colors duration-300">
          {title}
        </h2>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="text-dark/75 text-sm leading-relaxed border-t border-dark/10 pt-2">
                {summary}
              </p>
              <Link
                href={link}
                target="_blank"
                className="mt-2 inline-flex items-center gap-1 text-primary font-medium text-sm hover:gap-2 transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                Read Full Article <FaArrowRight className="text-xs" />
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
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
      summary:
        "Learn how to create engaging and user-friendly loading screens using React.js, CSS animations, and modern loading techniques that enhance user experience.",
      link: "#",
    },
    {
      img: picArticle1,
      title: "Building Modal Components with React Portals",
      time: "6 min read",
      summary:
        "Discover how to create accessible and reusable modal components using React Portals for better DOM structure and improved user interactions.",
      link: "#",
    },
    {
      img: picArticle2,
      title: "Advanced Form Validation with Custom React Hooks",
      time: "10 min read",
      summary:
        "Implement robust form validation using custom React hooks, covering error handling, real-time validation, and user feedback patterns.",
      link: "#",
    },
    {
      img: picArticle3,
      title: "Building a Reusable Pagination Component",
      time: "7 min read",
      summary:
        "Create a flexible pagination component for React applications with features like page navigation, item counting, and responsive design.",
      link: "#",
    },
    {
      img: picArticle4,
      title: "Smooth Scrolling Techniques in React.js",
      time: "5 min read",
      summary:
        "Explore various methods to implement smooth scrolling in React applications, including native CSS, JavaScript, and library-based solutions.",
      link: "#",
    },
    {
      img: picArticle5,
      title: "Todo App with React Redux & Framer Motion",
      time: "12 min read",
      summary:
        "Build a complete todo application using React Redux for state management and Framer Motion for beautiful animations and transitions.",
      link: "#",
    },
    {
      img: picArticle6,
      title: "Understanding Higher Order Components in React",
      time: "9 min read",
      summary:
        "Deep dive into Higher Order Components (HOCs) in React, learning how to create reusable logic and enhance component functionality.",
      link: "#",
    },
    {
      img: picArticle7,
      title: "Redux Explained: State Management Made Simple",
      time: "11 min read",
      summary:
        "A comprehensive guide to understanding Redux, its core concepts, and how to implement efficient state management in React applications.",
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

      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimateText text="Sharing insights, sparking ideas." className="mb-4" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="inline-block w-full text-dark font-semibold text-center capitalize mb-16 text-3xl"
          >
            – where code meets clarity and complexity finds simplicity
          </motion.h2>

          {/* Featured Articles */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="grid grid-cols-12 gap-6 gap-y-12 mb-16"
          >
            {articlesData.slice(0, 2).map((article, index) => (
              <FeaturedArticle key={index} {...article} />
            ))}
          </motion.ul>

          {/* Regular Articles */}
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-10 text-dark"
          >
            More Articles
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {articlesData.map((article, index) => (
              <Article key={index} {...article} />
            ))}
          </motion.div>
        </Layout>
      </main>
    </>
  );
}

export default Articles;