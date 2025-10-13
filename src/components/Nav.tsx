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
            className={`text-white ${
              link.path === pathname && "text-[#00d4ff] border-b-2 border-[#00d4ff]"
            } capitalize font-medium hover:text-[#00d4ff] transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}
