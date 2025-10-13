"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

interface ServiceItem {
  num: string;
  title: string;
  description: string;
  href: string;
}

const services: ServiceItem[] = [
  {
    num: "01",
    title: "Web Development",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    href: "",
  },
  {
    num: "02",
    title: "Frontend Development",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    href: "",
  },
  {
    num: "03",
    title: "Logo Design",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    href: "",
  },
  {
    num: "04",
    title: "Database Management",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    href: "",
  },
];

export default function Services() {
  return (
    <section className="min-h-screen flex flex-col py-12 xl:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-start gap-8 group p-8 bg-[#27272c] rounded-xl hover:bg-[#2a2a2e] transition-all duration-300"
              >
                {/* Top */}
                <div className="w-full flex justify-between items-start">
                  <div className="text-6xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[60px] h-[60px] rounded-full bg-white
                    group-hover:bg-accent transition-all duration-500 flex
                    justify-center items-center hover:-rotate-45 shadow-lg"
                  >
                    <BsArrowDownRight className="text-primary text-2xl" />
                  </Link>
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl font-bold leading-tight text-white group-hover:text-accent transition-all duration-500">
                    {service.title}
                  </h2>
                  <p className="text-white/70 leading-relaxed">{service.description}</p>
                </div>
                <div className="border-b border-white/10 w-full mt-4"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
