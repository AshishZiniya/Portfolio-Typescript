"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { HiMenu } from "react-icons/hi";
import Link from "next/link";
import Nav from "./Nav";
import { Button } from "./ui/button";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
        <button className="flex justify-center items-center">
          <HiMenu className="text-[32px] text-black" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="bg-white border-[#6366f1]"
      >
        <div className="flex flex-col gap-8 mt-8">
          <Link href="/" className="text-2xl font-semibold text-black">
            Ashish<span className="text-[#6366f1]">.</span>
          </Link>
          <Nav />
          <Link href="/contact">
            <Button
              className="border border-[#cccccc] bg-white text-black hover:bg-[#f3f3f3] hover:border-[#aaaaaa] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Hire Me
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
