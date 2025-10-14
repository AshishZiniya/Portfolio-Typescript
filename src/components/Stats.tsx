'use client';

import CountUp from 'react-countup';

const stats = [
  {
    num: 5,
    text: 'Years of experience',
  },
  {
    num: 25,
    text: 'Projects completed',
  },
  {
    num: 15,
    text: 'Technologies mastered',
  },
  {
    num: 500,
    text: 'Code commits',
  },
];

export default function Stats() {
  return (
    <section className="pt-8 pb-12 xl:pt-0 xl:pb-0 bg-[#a3a3a3]/40 scroll-container">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-8 max-w-[80vw] mx-auto xl:max-w-none justify-center xl:justify-start">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start p-6 bg-gradient-to-r from-[#e5e5e5]/60 to-[#cccccc]/40 rounded-lg border border-[#aaaaaa] hover:border-[#6366f1]/50 transition-all duration-300"
              >
                <div className="text-center xl:text-left">
                  <CountUp
                    end={item.num}
                    duration={5}
                    delay={2}
                    className="text-4xl xl:text-6xl font-extrabold bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent"
                  />
                  <p className="leading-snug text-black/70 mt-2 text-sm xl:text-base">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
