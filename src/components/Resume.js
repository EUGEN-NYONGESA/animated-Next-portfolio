"use client";

import React, { useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import {
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiPostman,
  SiTableau,
  SiExpress,
  SiTailwindcss,
  SiPandas,
  SiNumpy,
} from "react-icons/si";
import { RiFileExcel2Fill, RiNextjsLine } from "react-icons/ri";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";

const about = {
  title: "More Information",
  description:
    "Full Stack Developer and Data Analyst with 2+ years experience building digital solutions. I combine technical skills with creative problem-solving to deliver applications that meet both user needs and business objectives.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Eugen Walubengo Nyongesa",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+254) 79 6120 585",
    },
    {
      fieldName: "Email",
      fieldValue: "nyongesajunior2@gmail.com",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Kenyan",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Kiswahili",
    },
  ],
};

const education = {
  icon: "",
  title: "Education",
  description:
    "Formal software engineering education complemented by continuous learning in modern web technologies and data analysis techniques.",
  items: [
    {
      institution: "Online Course Platforms",
      degree: "Full Stack Web App Development & Data Analysis",
      duration: "2024 - 2025",
    },
    {
      institution: "Murang'a University of Technology",
      degree: "Bs. of Science in Software Engineering",
      duration: "2017 - 2023",
    },
    {
      institution: "St Lukes Boy's High School Kimilili",
      degree: "Kenya Certificate of Secondary Education (K.C.S.E)",
      duration: "2012 - 2015",
    },
    {
      institution: "St Joseph's Primary School Webuye",
      degree: "Kenya Certificate of Primary Education (K.C.P.E)",
      duration: "Completed in 2011",
    },
  ],
};

function Resume() {
  const [activeCategory, setActiveCategory] = useState(0);

  const skillsData = {
    title: "My Skills & Expertise",
    description:
      "Technologies and tools I work with to deliver exceptional results",
    categories: [
      {
        title: "Web & Mobile App Development",
        description:
          "Building responsive, scalable applications including SAAS platforms, blogs, portfolios, institutional systems, delivery apps, marketplaces, and AI-integrated solutions",
        skills: [
          {
            icon: <FaReact className="text-6xl text-cyan-400" />,
            name: "React",
          },
          {
            icon: (
              <RiNextjsLine className="text-6xl text-dark hover:text-light dark:text-light dark:hover:text-dark" />
            ),
            name: "Next.js",
          },
          {
            icon: <FaNodeJs className="text-6xl text-green-500" />,
            name: "Node.js",
          },
          {
            icon: (
              <SiExpress className="text-6xl text-gray-600 dark:text-gray-300" />
            ),
            name: "Express.js",
          },
          {
            icon: <FaJs className="text-6xl text-yellow-400" />,
            name: "JavaScript",
          },
          {
            icon: <FaHtml5 className="text-6xl text-orange-500" />,
            name: "HTML5",
          },
          { icon: <FaCss3 className="text-6xl text-blue-500" />, name: "CSS3" },
          {
            icon: <SiTailwindcss className="text-6xl text-cyan-500" />,
            name: "Tailwind CSS",
          },
          {
            icon: <SiPostman className="text-6xl text-orange-500" />,
            name: "Postman",
          },
          {
            icon: <SiPostgresql className="text-6xl text-blue-600" />,
            name: "PostgreSQL",
          },
          {
            icon: <SiMongodb className="text-6xl text-green-600" />,
            name: "MongoDB",
          },
        ],
      },
      {
        title: "Data Analysis",
        description:
          "Transforming raw data into actionable insights through comprehensive analysis and visualization",
        skills: [
          {
            icon: <FaPython className="text-6xl text-blue-500" />,
            name: "Python",
          },
          {
            icon: <SiPandas className="text-6xl text-red-500" />,
            name: "Pandas",
          },
          {
            icon: <SiNumpy className="text-6xl text-blue-700" />,
            name: "NumPy",
          },
          {
            icon: <RiFileExcel2Fill className="text-6xl text-green-600" />,
            name: "Excel",
          },
          {
            icon: <SiMysql className="text-6xl text-blue-500" />,
            name: "MySQL",
          },
          {
            icon: <SiPostgresql className="text-6xl text-blue-600" />,
            name: "PostgreSQL",
          },
          {
            icon: <SiTableau className="text-6xl text-orange-500" />,
            name: "Tableau",
          },
        ],
      },
    ],
  };

  const currentCategory = skillsData.categories[activeCategory];

  // Animation variants
  const pageVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const tabContentVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      x: -40,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  };

  const skillItemVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 20,
    },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.4,
        type: "spring",
        stiffness: 100,
      },
    }),
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const infoRowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut",
      },
    }),
    hover: {
      x: 5,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  const tabButtonVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={pageVariants}
      className="w-full"
    >
      <Tabs
        defaultValue="education"
        className="w-full flex flex-col lg:flex-row gap-8 lg:gap-12"
      >
        <TabsList className="flex flex-row lg:flex-col w-full lg:w-64 gap-4 p-0">
          {["education", "skills", "more"].map((tab) => (
            <motion.div
              key={tab}
              variants={tabButtonVariants}
              whileHover="hover"
              whileTap="tap"
              className="flex-1 lg:flex-none"
            >
              <TabsTrigger
                value={tab}
                className="w-full min-w-32 lg:min-w-40 h-12 data-[state=active]:bg-dark data-[state=active]:text-light dark:data-[state=active]:bg-light dark:data-[state=active]:text-dark border border-solid border-dark dark:border-light px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark text-center flex items-center justify-center"
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </TabsTrigger>
            </motion.div>
          ))}
        </TabsList>

        <div className="flex-1 min-h-[600px]">
          <AnimatePresence mode="wait">
            {/* Education Tab */}
            <TabsContent value="education" className="w-full mt-0">
              <motion.div
                key="education"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col gap-8"
              >
                <div>
                  <h3 className="text-3xl font-bold text-dark dark:text-primary mb-4">
                    {education.title}
                  </h3>
                  <p className="text-dark dark:text-light/75 max-w-2xl">
                    {education.description}
                  </p>
                </div>

                <ScrollArea className="h-[500px] pr-4">
                  <motion.ul
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6"
                  >
                    {education.items.map((item, index) => (
                      <motion.li
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate="visible"
                        whileHover="hover"
                        className="bg-light dark:bg-dark border border-solid border-dark dark:border-light p-6 rounded-xl flex flex-col justify-center gap-3 cursor-pointer transition-all duration-300 hover:bg-gray-700 hover:border-gray-500 dark:hover:bg-gray-900 group"
                      >
                        <span className="text-primary dark:text-primary font-medium group-hover:text-light transition-colors duration-300">
                          {item.duration}
                        </span>
                        <h3 className="text-xl font-semibold text-dark dark:text-light min-h-[60px] group-hover:text-light transition-colors duration-300">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-2 h-2 rounded-full bg-primary dark:bg-primary group-hover:bg-light transition-colors duration-300"></span>
                          <p className="text-dark/75 dark:text-light/75 group-hover:text-light/90 transition-colors duration-300">
                            {item.institution}
                          </p>
                        </div>
                      </motion.li>
                    ))}
                  </motion.ul>
                </ScrollArea>
              </motion.div>
            </TabsContent>

            {/* Skills Tab */}
            <TabsContent value="skills" className="w-full mt-0">
              <motion.div
                key="skills"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col gap-8"
              >
                <div>
                  <h3 className="text-3xl font-bold text-dark dark:text-primary mb-4">
                    {skillsData.title}
                  </h3>
                  <p className="text-dark dark:text-light/75 max-w-2xl mb-6">
                    {skillsData.description}
                  </p>

                  {/* Category Toggle Buttons */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    {skillsData.categories.map((category, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveCategory(index)}
                        className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 border border-solid ${
                          activeCategory === index
                            ? "bg-dark text-light dark:bg-light dark:text-dark border-dark dark:border-light"
                            : "bg-light text-dark dark:bg-dark dark:text-light border-dark dark:border-light hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark"
                        }`}
                      >
                        {category.title}
                      </motion.button>
                    ))}
                  </div>

                  {/* Category Description */}
                  <p className="text-dark dark:text-light/75 text-lg max-w-3xl mb-8">
                    {currentCategory.description}
                  </p>
                </div>

                {/* Skills Grid */}
                <div className="relative">
                  <ScrollArea className="h-[400px] w-full rounded-lg border border-solid border-dark dark:border-light">
                    <motion.ul
                      initial="hidden"
                      animate="visible"
                      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-6"
                    >
                      {currentCategory.skills.map((skill, index) => (
                        <motion.li
                          key={index}
                          custom={index}
                          variants={skillItemVariants}
                          initial="hidden"
                          animate="visible"
                          whileHover="hover"
                          className="min-h-[140px]"
                        >
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger
                                className="w-full h-[140px] bg-light dark:bg-dark border border-solid border-dark dark:border-light rounded-xl flex flex-col 
                              justify-center items-center gap-3 group hover:bg-gray-800 hover:text-light dark:hover:bg-light dark:hover:text-dark transition-all duration-300 p-4 cursor-pointer"
                              >
                                <motion.div
                                  className="text-5xl"
                                  whileHover={{ scale: 1.2 }}
                                  transition={{
                                    type: "spring",
                                    stiffness: 300,
                                  }}
                                >
                                  {skill.icon}
                                </motion.div>
                                <span className="text-sm font-medium capitalize text-center">
                                  {skill.name}
                                </span>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </ScrollArea>
                </div>
              </motion.div>
            </TabsContent>

            {/* About Tab */}
            <TabsContent value="more" className="w-full mt-0">
              <motion.div
                key="more"
                variants={tabContentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col gap-8"
              >
                <div>
                  <h3 className="text-3xl font-bold text-dark dark:text-primary mb-4">
                    {about.title}
                  </h3>
                  <p className="text-dark dark:text-light/75 text-lg leading-relaxed max-w-3xl mb-8">
                    {about.description}
                  </p>
                </div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl"
                  initial="hidden"
                  animate="visible"
                >
                  {about.info.map((item, index) => (
                    <motion.div
                      key={index}
                      custom={index}
                      variants={infoRowVariants}
                      initial="hidden"
                      animate="visible"
                      whileHover="hover"
                      className="group relative overflow-hidden border-b border-dark/20 dark:border-light/20 pb-4 cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      <div className="relative flex justify-between items-center py-3 z-10">
                        <span className="text-dark/75 dark:text-light/75 font-medium group-hover:text-dark dark:group-hover:text-light transition-colors duration-300">
                          {item.fieldName}:
                        </span>
                        <span className="text-dark dark:text-light font-semibold group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300">
                          {item.fieldValue}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </TabsContent>
          </AnimatePresence>
        </div>
      </Tabs>
    </motion.div>
  );
}

export default Resume;
