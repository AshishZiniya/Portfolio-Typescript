"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaPhp,
  FaJava,
  FaPython,
  FaAndroid,
  FaBootstrap,
} from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { BiLogoFlutter } from "react-icons/bi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

const about = {
  title: "About Me",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi libero distinctio porro voluptates quam autem cum sint!",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ziniya Ashish",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 9510310683",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Months",
    },
    {
      fieldName: "Nationality",
      fieldValue: "India",
    },
    {
      fieldName: "Email",
      fieldValue: "ashishziniya1234@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Language",
      fieldValue: "English, Hindi, Gujarati",
    },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi libero distinctio porro voluptates quam autem cum sint!",
  item: [
    {
      company: "Infolabz It Services Pvt. Ltd.",
      position: "React Js Intern",
      duration: "01/2024 to 04/2024",
    },
    {
      company: "CreArt Solutions",
      position: "PHP Intern",
      duration: "07/2023 to 08/2023",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi libero distinctio porro voluptates quam autem cum sint!",
  item: [
    {
      institution: "Gujarat Technological University",
      degree: "B.E. in Computer Engineering",
      duration: "06/2020 to 06/2024",
    },
    {
      institution: "Internship at Infolabz IT Services Pvt. Ltd.",
      degree: "React Js Framework",
      duration: "01/2024 to 04/2024",
    },
    {
      institution: "Internship at CreArt Solutions",
      degree: "PHP Language",
      duration: "07/2023 to 08/2023",
    },
    {
      institution: "Online Course",
      degree: "Android App Development",
      duration: "01/2024 to 06/2024",
    },
    {
      institution: "Online Course",
      degree: "Flutter App Development",
      duration: "01/2024 to 06/2024",
    },
    {
      institution: "S.N. Vidhyalaya - Surendranagar",
      degree: "12th Science - HSC",
      duration: "06/2018 to 03/2020",
    },
    {
      institution: "S.P. Vidhyalaya - Surendranagar",
      degree: "10th - SSC",
      duration: "06/2018 to 03/2020",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi libero distinctio porro voluptates quam autem cum sint!",
  skillset: [
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "ReactJs",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
    {
      icon: <FaPhp />,
      name: "PHP",
    },
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaAndroid />,
      name: "Android",
    },
    {
      icon: <BiLogoFlutter />,
      name: "Flutter",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next Js",
    },
    {
      icon: <FaBootstrap />,
      name: "Bootstrap",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwindcss",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
  ],
};

export default function Resume() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.item.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.item.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                  {skills.skillset.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center gap-4 items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">
                          {item.fieldName}:-
                        </span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
