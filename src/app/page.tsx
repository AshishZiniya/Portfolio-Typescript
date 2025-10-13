import Socials from '@/components/Socials';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';
import Photo from '@/components/Photo';
import Stats from '@/components/Stats';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#0a0a0f] to-[#1a1a2e]"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none animate-fade-in">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent border border-accent/30 rounded-full text-sm font-medium">
                Available for Projects
              </span>
            </div>
            <span className="text-xl text-[#64748b] mb-4 block">
              Full-Stack Developer
            </span>
            <h1 className="h1 mb-6">
              Hello I&#39;m <br />{' '}
              <span className="bg-gradient-to-r from-accent via-accent to-accent/80 bg-clip-text text-transparent">
                Ashish Ziniya
              </span>
            </h1>
            <p className="max-w-[600px] mb-9 text-[#cbd5e1] text-lg leading-relaxed">
              Computer Engineer and MERN Stack Developer with experience in
              building scalable, user-focused web applications using React.js,
              Next.js, Node.js, and MongoDB. Proficient in modern front-end
              frameworks and UI design with Tailwind CSS and Bootstrap. Strong
              problem-solving mindset with a passion for continuous learning,
              innovation, and delivering high-quality software solutions that
              drive organizational success.
            </p>

            {/* Tech stack badges */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center xl:justify-start">
              {['React', 'Next.js', 'Node.js', 'TypeScript', 'AWS'].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-[#1a1a2e]/50 text-[#cbd5e1] border border-[#334155] rounded-md text-sm"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2 border border-white/10 text-white hover:bg-white hover:text-[#0a0a0f] hover:border-white/20 transition-all duration-300"
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
                  iconstyles="w-9 h-9 border border-accent/30 rounded-full flex
                  justify-center items-center text-accent text-base hover:bg-accent
                  hover:text-[#0a0a0f] hover:transition-all duration-500 hover:border-accent"
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
    </motion.section>
  );
}
