import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="bg-white backdrop-blur-sm border-b border-[#cccccc] py-4 xl:py-6 text-black shadow-sm">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/">
          <h1 className="text-4xl font-semibold text-black">
            Ashish<span className="text-[#6366f1]">.</span>
          </h1>
        </Link>
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="border border-[#cccccc] bg-white text-black hover:bg-[#f3f3f3] hover:border-[#aaaaaa] transition-colors">Hire Me</Button>
          </Link>
        </div>

        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
