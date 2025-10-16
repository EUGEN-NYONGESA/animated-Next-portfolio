import AnimateText from "@/components/AnimateText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="w-full flex items-center justify-between rounded-3xl border-2 
  border-solid border-dark bg-light shadow-2xl p-8 gap-8 relative"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-xl border border-solid border-dark/20"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto hover:scale-105 transition-transform duration-300"
        />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between gap-4">
        <span className="text-primary font-medium text-xl border-b-2 border-dark/20 pb-2 w-full">
          {type}
        </span>

        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-4 w-full"
        >
          <h2 className="w-full text-left text-4xl font-bold text-dark hover:text-primary transition-colors duration-300">
            {title}
          </h2>
        </Link>

        <p className="font-medium text-dark/75 leading-relaxed border-t border-dark/10 pt-4 w-full">
          {summary}
        </p>

        <div className="mt-4 flex items-center gap-6 border-t border-dark/10 pt-4 w-full">
          <Link
            href={github}
            target="_blank"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-dark text-light hover:bg-primary transition-all duration-300"
          >
            <FaGithub className="text-2xl" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="rounded-lg bg-dark text-light p-3 px-8 text-lg font-semibold hover:bg-primary hover:scale-105 transition-all duration-300"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg border border-solid border-dark/20 mb-4"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto hover:scale-105 transition-transform duration-300"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between gap-3">
        <span className="text-primary font-medium text-lg border-b border-dark/20 pb-1 w-full">
          {type}
        </span>

        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2 w-full"
        >
          <h2 className="w-full text-left text-2xl font-bold text-dark hover:text-primary transition-colors duration-300">
            {title}
          </h2>
        </Link>

        <div className="mt-2 flex items-center gap-4 border-t border-dark/10 pt-3 w-full">
          <Link
            href={github}
            target="_blank"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-dark text-light hover:bg-primary transition-all duration-300"
          >
            <FaGithub className="text-xl" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="rounded-lg bg-dark text-light p-2 px-6 text-base font-semibold hover:bg-primary hover:scale-105 transition-all duration-300"
          >
            Visit
          </Link>
        </div>
      </div>
    </article>
  );
};

function projects() {
  return (
    <>
      <Head>
        <title>Digital Blacksmith | Projects Page</title>
        <meta name="description" content="my description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimateText
            text="Where ideas meet execution, and vision becomes reality."
            className="mb-16"
          />

          <div className="grid grid-cols-12 gap-8 gap-y-16">
            <div className="col-span-12">
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
            </div>

            <div className="col-span-6">
              <Project
                title="E-Commerce Platform"
                img={project1}
                link="/"
                github="/"
                type="Web Application"
              />
            </div>

            <div className="col-span-6">
              <Project
                title="Task Management App"
                img={project1}
                link="/"
                github="/"
                type="Mobile App"
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                title="AI-Powered Analytics Dashboard"
                img={project1}
                summary="An advanced analytics dashboard with machine learning capabilities, real-time data processing, and interactive visualizations for business intelligence."
                link="/"
                github="/"
                type="Featured Project"
              />
            </div>

            <div className="col-span-6">
              <Project
                title="Weather Forecast App"
                img={project1}
                link="/"
                github="/"
                type="Web Application"
              />
            </div>

            <div className="col-span-6">
              <Project
                title="Social Media Dashboard"
                img={project1}
                link="/"
                github="/"
                type="Web Application"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}

export default projects;
