import Link from "next/link";
import React from "react";
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
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
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

function NavBar() {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <header className="w-full px-32 py-8 font-medium flex bg-light dark:bg-dark items-center justify-between">
      <nav>
        <CustomLink
          href="/"
          title="Home"
          className="mr-4 text-dark dark:text-light"
        />
        <CustomLink
          href="/about"
          title="About"
          className="mr-4 text-dark dark:text-light"
        />
        <CustomLink
          href="/projects"
          title="Projects"
          className="mr-4 text-dark dark:text-light"
        />
        <CustomLink
          href="/articles"
          title="Articles"
          className="mr-4 text-dark dark:text-light"
        />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="http://github.com"
          target="_blank"
          className="w-6 mx-3 social-icon"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <GitHub />
        </motion.a>
        <motion.a
          href="http://facebook.com"
          target="_blank"
          className="w-6 mx-3 text-dark dark:text-light"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <LinkedIn />
        </motion.a>
        <motion.a
          href="http://instagram.com"
          target="_blank"
          className="w-6 mx-3 text-dark dark:text-light"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Facebook />
        </motion.a>
        <motion.a
          href="http://github.com"
          target="_blank"
          className="w-6 mx-3 text-dark dark:text-light"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <Instagram />
        </motion.a>
        <motion.a
          href="http://linkedin.com"
          target="_blank"
          className="w-6 mx-3 social-icon"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <TwitterIcon />
        </motion.a>

        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className="ml-3 flex items-center justify-center rounded-full p-1"
        >
          {mode === "dark" ? (
            <div className="text-gray-300">
              <SunIcon />
            </div>
          ) : (
            <div className="text-yellow-500">
              <MoonIcon />
            </div>
          )}
        </button>
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}

export default NavBar;
