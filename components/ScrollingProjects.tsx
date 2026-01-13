"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface MultiZoomProps {
  images: string[];
}

export default function MultiZoomScroll({ images }: MultiZoomProps) {
  return (
    <div className="relative">
      {images.map((src, index) => (
        <SingleZoomSection key={index} src={src} isFirst={index == 0}/>
      ))}
    </div>
  );
}

function SingleZoomSection({ src, isFirst }: { src: string, isFirst: boolean }) {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);
  return (
    <div ref={sectionRef} className="h-[200vh] relative bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div style={{ scale: isFirst ? scale : 1, opacity: isFirst ? opacity : 1 }} className="relative w-full h-full flex justify-center lg:justify-start items-end p-5">
          <Image src={src} alt="Project image" fill className="w-full h-full object-cover absolute inset-0 z-0"/>
          <Link href={"/projects"} className='relative overflow-hidden uppercase w-[90%] lg:w-0 pt-10 pb-10 lg:pl-50 lg:pr-50 flex items-center group justify-center bg-[#F54927] rounded-full text-black text-3xl font-bold'>
            <span className='absolute transition-all duration-300 cubic-bounce group-hover:-translate-y-[350%]'>
              view work
            </span>
            <span className='absolute translate-y-[350%] transition-all duration-300 cubic-bounce group-hover:translate-y-0'>
              view work
            </span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}