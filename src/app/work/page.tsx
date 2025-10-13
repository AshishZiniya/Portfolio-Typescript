"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import WorkSlideButton from "@/components/WorkSlideButton";

interface Project {
  num: string;
  categories: string;
  title: string;
  description: string;
  stack: { name: string }[];
  image: string;
  live?: string;
  github?: string;
}

const projects: Project[] = [
  {
    num: "01",
    categories: "Full-Stack",
    title: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut magnam eaque libero non, tempore sit autem inventore.",
    stack: [
      { name: "ReactJs" },
      { name: "MongoDB" },
      { name: "NodeJs" },
      { name: "ExpressJs" },
    ],
    image: "/assets/work/thumb1.png",
    live: "https://www.eonicindia.in/",
    github: "https://github.com/AshishZiniya/EonicIndia",
  },
  {
    num: "02",
    categories: "Frontend",
    title: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut magnam eaque libero non, tempore sit autem inventore.",
    stack: [{ name: "NextJs" }, { name: "TailwindCSS" }],
    image: "/assets/work/thumb2.png",
    live: "https://ashish-portfolio-xi.vercel.app/",
    github: "https://github.com/AshishZiniya/Portfolio",
  },
  {
    num: "03",
    categories: "Full-Stack",
    title: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut magnam eaque libero non, tempore sit autem inventore.",
    stack: [
      { name: "ReactJs" },
      { name: "TailwindCSS" },
      { name: "Firebase" },
      { name: "JSON" },
    ],
    image: "/assets/work/thumb3.png",
    live: "https://book-house-fi.vercel.app/",
    github: "https://github.com/AshishZiniya/book-store",
  },
];

export default function Work() {
  const [project, setProject] = useState<Project>(projects[0]);

  const handleSlideChange = (swiper: { activeIndex: number }) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.categories} Project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {project.live && (
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {project.github && (
                  <Link href={project.github} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[550px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[490px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary rounded-xl flex items-center justify-center text-6xl text-accent">
                      {project.title}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSlideButton
                containerStyle="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyle="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
