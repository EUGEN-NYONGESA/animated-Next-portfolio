import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "./Icon";
import { motion, AnimatePresence } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const CustomLink = ({ href, title, className = "", onClick }) => {
  const router = useRouter();
  return (
    <Link
      href={href}
      className={`${className} relative group`}
      onClick={onClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
       group-hover:w-full transition-[width] ease duration-300 dark:bg-light ${
         router.asPath === href ? "w-full" : "w-0"
       }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", onClick }) => {
  const router = useRouter();
  const handleClick = () => {
    onClick();
    router.push(href);
  };

  return (
    <button
      className={`${className} relative group text-dark dark:text-light my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
       group-hover:w-full transition-[width] ease duration-300 dark:bg-light ${
         router.asPath === href ? "w-full" : "w-0"
       }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

function NavBar() {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <header className="w-full px-4 sm:px-8 lg:px-16 xl:px-32 py-4 font-medium flex z-10 items-center justify-between relative bg-light dark:bg-dark">
      {/* LEFT: Navigation (Desktop only) */}
      <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
        <CustomLink
          href="/"
          title="Home"
          className="text-dark dark:text-light"
        />
        <div className="h-4 w-[1px] bg-gray-400/30"></div>
        <CustomLink
          href="/about"
          title="About"
          className="text-dark dark:text-light"
        />
        <div className="h-4 w-[1px] bg-gray-400/30"></div>
        <CustomLink
          href="/projects"
          title="Projects"
          className="text-dark dark:text-light"
        />
        <div className="h-4 w-[1px] bg-gray-400/30"></div>
        <CustomLink
          href="/articles"
          title="Articles"
          className="text-dark dark:text-light"
        />
      </nav>

      {/* CENTER: Logo */}
      <div className="absolute left-1/2 top-4 transform -translate-x-1/2">
        <Logo />
      </div>

      {/* RIGHT: Socials + Theme Toggle (Desktop only) */}
      <nav className="hidden lg:flex items-center gap-4">
        <motion.a
          href="http://github.com"
          target="_blank"
          whileHover={{ y: -2 }}
          className="dark:invert"
        >
          <GitHub className="text-dark dark:text-light" />
        </motion.a>
        <div className="h-4 w-[1px] bg-gray-400/30"></div>
        <motion.a
          href="http://linkedin.com"
          target="_blank"
          whileHover={{ y: -2 }}
        >
          <LinkedIn />
        </motion.a>
        <div className="h-4 w-[1px] bg-gray-400/30"></div>
        <motion.a
          href="http://facebook.com"
          target="_blank"
          whileHover={{ y: -2 }}
        >
          <Facebook />
        </motion.a>
        <div className="h-4 w-[1px] bg-gray-400/30"></div>
        <motion.a
          href="http://instagram.com"
          target="_blank"
          whileHover={{ y: -2 }}
        >
          <Instagram />
        </motion.a>
        <div className="h-4 w-[1px] bg-gray-400/30"></div>
        <motion.a
          href="http://twitter.com"
          target="_blank"
          whileHover={{ y: -2 }}
          className="dark:invert"
        >
          <TwitterIcon />
        </motion.a>

        {/* Theme Toggle */}
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className="ml-3 flex items-center justify-center rounded-full p-2"
          aria-label="Toggle Theme"
        >
          {mode === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
      </nav>

      {/* MOBILE: Menu Icon */}
      {!isOpen && (
        <motion.button
          key="menu-btn"
          className="flex lg:hidden items-center justify-center text-dark dark:text-light text-3xl z-50"
          onClick={handleClick}
          aria-label="Open Menu"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
        >
          <FiMenu />
        </motion.button>
      )}

      {/* MOBILE MENU SIDEBAR */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-dark/40 dark:bg-light/30 z-30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClick}
            />

            {/* Sidebar */}
            <motion.div
              className="fixed top-0 left-0 bottom-0 w-4/5 sm:w-3/5 max-w-sm bg-light dark:bg-dark shadow-2xl z-40 flex flex-col items-center justify-start p-6"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Top Row */}
              <div className="flex items-center justify-between w-full mb-8">
                <button
                  onClick={() => setMode(mode === "light" ? "dark" : "light")}
                  aria-label="Toggle Theme"
                >
                  {mode === "dark" ? (
                    <SunIcon className="w-6 h-6 text-light" />
                  ) : (
                    <MoonIcon className="w-6 h-6 text-dark" />
                  )}
                </button>

                <Logo />

                <button onClick={handleClick} aria-label="Close Menu">
                  <IoClose className="text-2xl text-dark dark:text-light" />
                </button>
              </div>

              {/* Mobile Links */}
              <nav className="flex flex-col items-center justify-center w-full mt-8 space-y-4">
                <CustomMobileLink
                  href="/"
                  title="Home"
                  onClick={handleClick}
                  className="text-2xl font-semibold"
                />
                <CustomMobileLink
                  href="/about"
                  title="About"
                  onClick={handleClick}
                  className="text-2xl font-semibold"
                />
                <CustomMobileLink
                  href="/projects"
                  title="Projects"
                  onClick={handleClick}
                  className="text-2xl font-semibold"
                />
                <CustomMobileLink
                  href="/articles"
                  title="Articles"
                  onClick={handleClick}
                  className="text-2xl font-semibold"
                />
              </nav>

              {/* Separator */}
              <div className="w-full h-[1px] bg-gray-400/30 my-8"></div>

              {/* Social Icons */}
              <div className="flex items-center justify-center gap-5 mt-2">
                <motion.a
                  href="http://github.com"
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  className="dark:invert"
                >
                  <GitHub className="text-dark dark:text-light" />
                </motion.a>
                <motion.a
                  href="http://linkedin.com"
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                >
                  <LinkedIn className="text-dark dark:text-light" />
                </motion.a>
                <motion.a
                  href="http://facebook.com"
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                >
                  <Facebook className="text-dark dark:text-light" />
                </motion.a>
                <motion.a
                  href="http://instagram.com"
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                >
                  <Instagram className="text-dark dark:text-light" />
                </motion.a>
                <motion.a
                  href="http://twitter.com"
                  target="_blank"
                  whileHover={{ scale: 1.1 }}
                  className="dark:invert"
                >
                  <TwitterIcon className="text-dark dark:text-light" />
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

export default NavBar;
