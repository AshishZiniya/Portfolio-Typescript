import Socials from '@/components/Socials';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';

export default function Home() {
  return (
    <section className="max-h-[89vh] bg-gradient-to-b from-[#f3f3f3] via-[#f3f3f3] to-[#d1d1d1] overflow-y-scroll scroll-container">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none animate-fade-in">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-[#6366f1]/10 text-[#6366f1] border border-[#6366f1]/30 rounded-full text-sm font-medium">
                Available for Projects
              </span>
            </div>
            <span className="text-xl text-black mb-4 block">
              Full-Stack Developer
            </span>
            <h1 className="h1 mb-6 text-black">
              Hello I&#39;m <br />{' '}
              <span className="bg-gradient-to-r from-[#6366f1] via-[#6366f1] to-[#6366f1]/80 bg-clip-text text-transparent">
                Ashish Ziniya
              </span>
            </h1>
            <p className="max-w-[600px] mb-9 text-black text-lg leading-relaxed">
              Computer Engineer and MERN Stack Developer with experience in
              building scalable, user-focused web applications using React.js,
              Next.js, Node.js, and MongoDB. Proficient in modern front-end
              frameworks and UI design with Tailwind CSS and Bootstrap. Strong
              problem-solving mindset with a passion for continuous learning,
              innovation, and delivering high-quality software solutions that
              drive organizational success.
            </p>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 border border-[#cccccc] text-black hover:bg-[#f3f3f3] hover:text-[#6366f1] hover:border-[#6366f1] transition-all duration-300"
              >
                <span>
                  <a
                    href="https://drive.google.com/uc?export=download&id=17WUknvgBOHn7NxIhMpg89HhHcbjKZ28p"
                    download
                  >
                    Download Resume
                  </a>
                </span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerstyles="flex gap-6"
                  iconstyles="w-9 h-9 border border-[#6366f1]/50 rounded-full flex
                  justify-center items-center text-[#6366f1] text-base hover:bg-[#6366f1]
                  hover:text-white hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
