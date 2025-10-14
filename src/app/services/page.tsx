'use client';

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';

interface ServiceItem {
  num: string;
  title: string;
  href: string;
}

const services: ServiceItem[] = [
  {
    num: '01',
    title: 'Web Development',
    href: '',
  },
  {
    num: '02',
    title: 'Frontend Development',
    href: '',
  },
  {
    num: '03',
    title: 'Backend Development',
    href: '',
  },
  {
    num: '04',
    title: 'Database Management',
    href: '',
  },
  {
    num: '05',
    title: 'API Development',
    href: '',
  },
];

export default function Services() {
  return (
    <section className="max-h-[89vh] flex flex-col py-12 xl:py-8 overflow-y-scroll scroll-container bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-start gap-8 group p-8 bg-[#d1d1d1] rounded-xl hover:bg-[#e5e5e5] transition-all duration-300 shadow-sm"
              >
                {/* Top */}
                <div className="w-full flex justify-between items-start">
                  <div className="text-6xl font-extrabold text-black group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="w-[60px] h-[60px] rounded-full bg-white
                    group-hover:bg-accent transition-all duration-500 flex
                    justify-center items-center hover:-rotate-45 shadow-lg"
                  >
                    <BsArrowDownRight className="text-primary text-2xl text-black" />
                  </Link>
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-3xl font-bold leading-tight text-black group-hover:text-[#6366f1] transition-all duration-500">
                    {service.title}
                  </h2>
                </div>
                <div className="border-b border-[#cccccc] w-full mt-4"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
