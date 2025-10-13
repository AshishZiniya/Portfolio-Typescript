'use client';

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiNestjs,
  SiExpress,
  SiSwagger,
  SiPostman,
} from 'react-icons/si';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';

const about = {
  title: 'About Me',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Ziniya Ashish',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+91) 9510310683',
    },
    {
      fieldName: 'Experience',
      fieldValue: '10+ Months',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'India',
    },
    {
      fieldName: 'Email',
      fieldValue: 'ashishziniya1234@gmail.com',
    },
    {
      fieldName: 'Language',
      fieldValue: 'English, Hindi, Gujarati',
    },
  ],
};

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  item: [
    {
      company: 'WebClues Infotech - A CMMI Level 5 Certified Company',
      position: 'Developer Trainee',
      duration: '04/2025 to Present',
    },
    {
      company: 'Infolabz It Services Pvt. Ltd.',
      position: 'React Js Intern',
      duration: '01/2024 to 04/2024',
    },
  ],
};

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education',
  item: [
    {
      institution: 'WebClues Infotech - A CMMI Level 5 Certified Company',
      degree: 'MERN Stack Developer',
      duration: '04/2025 to Present',
    },
    {
      institution: 'Internship at Infolabz IT Services Pvt. Ltd.',
      degree: 'React Js Framework',
      duration: '01/2024 to 04/2024',
    },
    {
      institution: 'Gujarat Technological University',
      degree: 'B.E. in Computer Engineering',
      duration: '06/2020 to 06/2024',
    },
  ],
};

const skills = {
  title: 'My Skills',
  skillset: [
    {
      icon: <FaHtml5 />,
      name: 'HTML',
    },
    {
      icon: <FaCss3 />,
      name: 'CSS',
    },
    {
      icon: <FaJs />,
      name: 'JavaScript',
    },
    {
      icon: <FaReact />,
      name: 'ReactJs',
    },
    {
      icon: <FaNodeJs />,
      name: 'Node Js',
    },
    {
      icon: <SiExpress/>,
      name: 'Express Js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next Js',
    },
    {
      icon: <FaFigma />,
      name: 'Figma',
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwindcss',
    },
    {
      icon: <SiMongodb />,
      name: 'MongoDB',
    },
    {
      icon: <SiPostgresql />,
      name: 'PostgreSQL',
    },
    {
      icon: <SiNestjs />,
      name: 'Nest Js',
    },
    {
      icon: <SiSwagger/>,
      name: 'Swagger',
    },
    {
      icon : <SiPostman/>,
      name : 'Postman',
    },
    
  ],
};

export default function Resume() {
  return (
    <div className="min-h-[80vh] items-center justify-center py-22">
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 py-14">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full -translate-12 -translate-x-16">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
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
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.item.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[360px] min-h-[40px] lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-white"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="h-[65vh] overflow-y-scroll">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
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
                <ul className="grid grid-cols-1 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
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
