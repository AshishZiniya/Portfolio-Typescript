"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 9510310683",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ashishziniya1234@gmail.com",
  },
];

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6 min-h-screen"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-[60px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-8 p-8 sm:p-12 bg-[#27272c] rounded-xl shadow-lg relative z-10">
              <h3 className="text-4xl text-accent font-semibold">Let&#39;s Work together</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="Firstname"
                  className="bg-background border border-white/10 text-white placeholder:text-white focus-visible:ring-1 focus-visible:ring-accent hover:border-white/20 transition-colors"
                />
                <Input
                  type="text"
                  placeholder="Lastname"
                  className="bg-background border border-white/10 text-white placeholder:text-white focus-visible:ring-1 focus-visible:ring-accent hover:border-white/20 transition-colors"
                />
                <Input
                  type="email"
                  placeholder="Email address"
                  className="bg-background border border-white/10 text-white placeholder:text-white focus-visible:ring-1 focus-visible:ring-accent hover:border-white/20 transition-colors"
                />
                <Input
                  type="tel"
                  placeholder="Phone number"
                  className="bg-background border border-white/10 text-white placeholder:text-white focus-visible:ring-1 focus-visible:ring-accent hover:border-white/20 transition-colors"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full bg-background border border-white/10 text-white focus:ring-1 focus:ring-accent hover:border-white/20 transition-colors">
                  <SelectValue placeholder="Select a Service" />
                </SelectTrigger>
                <SelectContent className="bg-[#27272c] border border-white/10 shadow-xl">
                  <SelectGroup>
                    <SelectLabel className="text-white bg-[#27272c]">Select a Service</SelectLabel>
                    <SelectItem
                      value="web-dev"
                      className="text-white focus:bg-accent focus:text-white hover:bg-accent/20 cursor-pointer"
                    >
                      Web Development
                    </SelectItem>
                    <SelectItem
                      value="frontend"
                      className="text-white focus:bg-accent focus:text-white hover:bg-accent/20 cursor-pointer"
                    >
                      Frontend Development
                    </SelectItem>
                    <SelectItem
                      value="android"
                      className="text-white focus:bg-accent focus:text-white hover:bg-accent/20 cursor-pointer"
                    >
                      Android App Development
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className="h-[200px] bg-background border border-white/10 text-white placeholder:text-white focus-visible:ring-1 focus-visible:ring-accent resize-none hover:border-white/20 transition-colors"
                placeholder="Type your message here."
              />
              <Button size="default" className="max-w-40 bg-accent hover:bg-accent/90 text-white font-medium border border-white/10 hover:border-white/20 transition-colors">
                Send message
              </Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl text-white">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
