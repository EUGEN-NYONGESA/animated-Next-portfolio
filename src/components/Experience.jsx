import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-6 sm:my-8 first:mt-0 last:mb-0 w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="w-full pl-8 sm:pl-12 md:pl-16"
      >
        <h3 className="capitalize font-bold text-lg sm:text-xl md:text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 text-sm sm:text-base">
          {time} | {address}
        </span>
        <p className="font-medium w-full mt-2 text-sm sm:text-base">{work}</p>
      </motion.div>
    </li>
  );
};

function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-12 sm:my-16 md:my-20">
      <h2 className="font-semibold text-lg sm:text-xl md:text-2xl mb-16 sm:mb-24 md:mb-32 w-full text-center px-4">
        Diverse experience spanning web development, data analysis, and IT
        support across freelance, corporate, and government environments.
      </h2>
      <div ref={ref} className="w-full sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-5 sm:left-6.5 md:left-9 lg:left-9 top-0 w-[2px] sm:w-[3px] md:w-[4px] h-full bg-dark dark:bg-primary origin-top"
        />
        <ul className="w-full flex flex-col items-center justify-between ml-2 sm:ml-4">
          <Details
            position="React Developer"
            company="CloudSystems Ltd"
            companyLink=""
            time="2023 - Present"
            address="Remote"
            work="Specializing in building scalable React applications with modern hooks and context API. Developing custom hooks for shared functionality and implementing responsive designs with CSS-in-JS solutions. Mentoring junior developers and establishing coding standards for the frontend team."
          />

          <Details
            position="Mobile App Developer"
            company="AppWorks Studio"
            companyLink=""
            time="2022 - 2023"
            address="Nairobi, Kenya"
            work="Created cross-platform mobile applications using React Native and Expo. Integrated with third-party APIs for social media features and push notifications. Published apps to both iOS App Store and Google Play Store, handling the entire deployment process from development to submission."
          />

          <Details
            position="UI/UX Developer"
            company="DesignTech Partners"
            companyLink=""
            time="2021 - 2022"
            address="Remote"
            work="Bridged the gap between design and development by implementing complex animations with Framer Motion and GSAP. Created design systems and maintained component libraries in Storybook. Conducted user testing sessions and implemented feedback to improve overall user experience across web applications."
          />

          <Details
            position="Backend Developer"
            company="DataSystems Corp"
            companyLink=""
            time="2020 - 2021"
            address="Dar es Salaam, Tanzania"
            work="Developed RESTful APIs using Express.js and MongoDB with JWT authentication. Implemented database optimization techniques and wrote unit tests with Jest. Collaborated with frontend teams to define API contracts and documented endpoints using Swagger for better team collaboration."
          />
        </ul>
      </div>
    </div>
  );
}

export default Experience;