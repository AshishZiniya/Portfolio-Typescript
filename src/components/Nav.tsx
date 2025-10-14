"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`text-black ${
              link.path === pathname && "text-[#6366f1] border-b-2 border-[#6366f1]"
            } capitalize font-medium hover:text-[#6366f1] transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
