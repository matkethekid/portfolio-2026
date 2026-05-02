"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface MultiZoomProps {
  images: string[];
};

export default function MultiZoomScroll({ images }: MultiZoomProps) {
  return (
    <div className="relative">
      <TitleZoomSection />
      <div className="w-ful flex flex-wrap gap-3 p-5">
        {images.map((src, index) => (
          <SingleImage key={index} src={src} />
        ))}
      </div>
    </div>
  );
}

function TitleZoomSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const opacity = useTransform(scrollYProgress, [0.7, 1], [1, 0]);
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["rgb(255, 255, 255)", "rgb(0, 0, 0)"]
  );
  const textColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["rgb(0, 0, 0)", "rgb(255, 255, 255)"]
  );
  return (
    <div ref={sectionRef} className="h-[200vh] relative">
      <motion.div 
        style={{ backgroundColor: bgColor }}
        className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center"
      >
        <motion.h1
          style={{ 
            scale,
            opacity,
            color: textColor
          }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold pointer-events-none whitespace-nowrap"
        >
          PROJECTS
        </motion.h1>
      </motion.div>
    </div>
  );
}

function SingleImage({ src }: { src: string }) {
  return (
    <div className="relative flex-1 basis-125 h-125 2xl:basis-150 2xl:h-150 overflow-hidden rounded-3xl flex items-end justify-center pb-5">
      <Image
        src={src}
        alt="Project image"
        fill
        className="object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/20 z-10" />
      <div className='flex flex-row w-fit z-11 group justify-center items-center lg:justify-start'>
        <Link href={"/contact"} className='relative overflow-hidden uppercase px-25 lg:px-40 h-12 lg:h-25 flex items-center justify-center bg-[#F54927] rounded-full text-black text-xl md:text-2xl lg:text-3xl font-bold'>
          <span className='absolute transition-all duration-300 cubic-bounce group-hover:-translate-y-[350%]'>
            collaborate
          </span>
          <span className='absolute translate-y-[350%] transition-all duration-300 cubic-bounce group-hover:translate-y-0'>
            view project
          </span>
        </Link>
        <div className='relative overflow-hidden p-3 lg:p-10 rounded-full bg-[#F54927] text-black h-12 lg:h-25 w-12 lg:w-25 flex items-center justify-center shrink-0'>
          <ArrowUpRight size={40} className='transition-all duration-300 cubic-bounce group-hover:scale-125 group-hover:rotate-45' />
        </div>
      </div>
    </div>
  );
}