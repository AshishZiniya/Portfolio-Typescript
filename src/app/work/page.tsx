'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.css';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Link from 'next/link';
import WorkSlideButton from '@/components/WorkSlideButton';

interface Project {
  num: string;
  categories: string;
  title: string;
  stack: { name: string }[];
  image: string;
  live?: string;
  github?: string;
}

const projects: Project[] = [
  {
    num: '01',
    categories: 'Frontend',
    title: 'Project 1 :- Portfolio',
    stack: [
      { name: 'NextJs' },
      { name: 'TailwindCSS' },
      { name: 'TypeScript' },
      { name: 'Framer-Motion' },
    ],
    image: '/assets/desktop.png',
    live: 'https://portfolio-typescript-iota.vercel.app/',
    github: 'https://github.com/AshishZiniya/Portfolio-Typescript.git',
  },
  {
    num: '02',
    categories: 'Frontend',
    title: 'Project 2 :- Project Management Dashboard',
    stack: [
      { name: 'NextJs' },
      { name: 'TailwindCSS' },
      { name: 'TypeScript' },
      { name: 'Framer-Motion' },
    ],
    image: '/assets/desktop4.png',
    live: 'https://project-app-indol.vercel.app',
    github: 'https://github.com/AshishZiniya/ProjectApp.git',
  },
  {
    num: '03',
    categories: 'Full-Stack',
    title: 'Project 3 :- Book E-Commerce',
    stack: [
      { name: 'ReactJs' },
      { name: 'TailwindCSS' },
      { name: 'Firebase' },
      { name: 'JSON' },
    ],
    image: '/assets/desktop2.png',
    live: 'https://book-store-nextjs-alpha.vercel.app',
    github: 'https://github.com/AshishZiniya/book-store-nextjs.git',
  },
  {
    num: '04',
    categories: 'Full-Stack',
    title: 'Project 4 :- Spotem - Ai Camera Alert Detection',
    stack: [
      { name: 'NextJs' },
      { name: 'TailwindCSS' },
      { name: 'typeScript' },
      { name: 'NodeJs' },
      { name: 'REST API' },
      { name: '.Net' },
      { name: 'AI' },
      { name: 'Machine Learning' },
    ],
    image: '/assets/desktop3.png',
    live: 'https://spotem.ai/',
    github: '',
  },
];

export default function Work() {
  const [project, setProject] = useState<Project>(projects[0]);

  const handleSlideChange = (swiper: { activeIndex: number }) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <div className="min-h-[89vh] flex items-center justify-center py-6 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[40%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-black/80">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-black group-hover:text-[#6366f1] transition-all duration-500 capitalize">
                {project.categories} Project
              </h2>
              <h3 className="text-3xl font-semibold leading-tight text-black">
                {project.title}
              </h3>
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-[#6366f1]">
                    {item.name}
                    {index !== project.stack.length - 1 && ','}
                  </li>
                ))}
              </ul>


              <div className="border border-[#cccccc]"></div>
              <div className="flex items-center gap-4">
                {project.live && (
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-[#f3f3f3]/20 flex justify-center items-center group">
                          <BsArrowUpRight className="text-[#6366f1] text-3xl group-hover:text-white" />
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
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-[#f3f3f3]/20 flex justify-center items-center group">
                          <BsGithub className="text-[#6366f1] text-3xl group-hover:text-white" />
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
          <div className="w-full xl:w-[60%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[550px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[490px] w-[900px] relative group flex justify-center items-center bg-[#d1d1d1]/40">
                    <div className="w-full h-full relative">
                      <Image
                        src={project.image}
                        fill
                        className="flex object-cover duration-500 border border-[#cccccc] shadow-lg rounded-lg"
                        alt={project.title}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSlideButton
                containerStyle="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none -translate-x-2"
                btnStyle="bg-accent text-primary text-black text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
