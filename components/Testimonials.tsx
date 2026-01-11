"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
    id: number,
    message: string,
    client: string;
    company: string;
};

const testimonials: Testimonial[] = [
    {
        id: 0,
        message: "Building a product is easy, but building an experience is an art. Working together felt like having a partner who cares about the vision as much as I do.",
        client: "Milan Kešelj",
        company: "Studio Zid"
    },
    {
        id: 1,
        message: "Collaborating on our platform redesign was a game-changer. The attention to detail and the ability to translate complex requirements into a seamless user journey is what sets this work apart. Absolute recommendation for high-stakes projects.",
        client: "Krstan Kešelj",
        company: "Precizna Poljoprivreda"
    },
    {
        id: 2,
        message: "Rarely do you find someone who can bridge the gap between creative ambition and technical feasibility. The new platform architecture doesn't just look better—it feels more intuitive at every touchpoint. A pivotal partner for any scaling enterprise.",
        client: "Zoran Stanković",
        company: "Precizna Poljoprivreda"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    function handleNextButton() {
        setCurrentIndex((prev) => {
            if (prev + 1 < testimonials.length) {
                return prev + 1;
            }
            return prev;
        });
        setDirection(1);
    }

    function handlePrevButton() {
        setCurrentIndex((prev) => {
            if (prev - 1 >= 0) {
                return prev - 1;
            }
            return prev;
        });
        setDirection(-1)
    }

    const testimonial = testimonials[currentIndex];

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 200 : -200,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 200 : -200,
            opacity: 0
        })
    };
  return (
    <section className='w-full min-h-screen bg-black pt-10 pl-5 pr-5 pb-10 lg:p-20 flex flex-col relative overflow-hidden'>
        <svg width="0" height="0" className="absolute">
            <defs>
                <clipPath id="testiClip" clipPathUnits="objectBoundingBox">
                <path d="M 0.3,0.8 Q 0.32,0.8 0.32,0.82 L 0.32,0.98 Q 0.32,1 0.34,1 L 0.98,1 Q 1,1 1,0.98 L 1,0.02 Q 1,0 0.98,0 L 0.02,0 Q 0,0 0,0.02 L 0,0.78 Q 0,0.8 0.02,0.8 Z" />
                </clipPath>
            </defs>
        </svg>
        <div className='lg:pl-10 lg:pr-10 gap-10 flex flex-col'>
            <div className='z-0 absolute inset-0 opacity-15'>
                <Image src={"/nnnoise.svg"} alt='noise' fill className='object-cover scale-150'/>
            </div>
            <div className='flex flex-col z-1 gap-3'>
                <h1 className="text-4xl md:text-6xl lg:text-[170px] uppercase bg-linear-to-b from-gray-400 via-white to-gray-400 text-transparent bg-clip-text">testimonials</h1>
                <p className='text-md lg:text-xl text-[#ccc] max-w-4xl'>I believe that the best results come from a shared vision. Don&apos;t just take my word for it—here is how some of my partners describe our collaborative journey.</p>
            </div>
            <div className="w-full flex flex-wrap justify-center items-center gap-10">
                <motion.div key={currentIndex} custom={direction} variants={variants} initial="enter" animate="center" exit="exit" transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }} className="testimonial-card relative overflow-hidden p-10 flex flex-col justify-between group">
                    <span className="absolute top-10 left-10 text-8xl text-white/10 font-serif leading-none">“</span>
                        <div className="flex-1 flex items-center justify-center py-10">
                            <p className="text-md md:text-lg lg:text-2xl text-white italic text-center leading-relaxed">
                                {testimonial.message}
                            </p>
                        </div>
                        <div className="flex flex-col items-end self-end">
                            <h2 className="text-2xl font-bold text-white uppercase tracking-tighter">
                                {testimonial.client}
                            </h2>
                            <div className="h-0.5 w-12 bg-[#F54927] my-2 transition-all group-hover:w-full"></div>
                            <p className="text-sm text-right max-w-50 uppercase text-black tracking-widest">
                                {testimonial.company}
                            </p>
                        </div>
                    <span className="absolute bottom-24 right-10 text-8xl text-white/10 font-serif leading-none">”</span>
                </motion.div>
                <div className="flex flex-row justify-between w-full lg:w-1/2">
                    <div className="shrink-0 flex z-30">
                        <button onClick={handlePrevButton} className="cursor-pointer rounded-full p-6 lg:p-10 bg-[#F54927]"><ArrowLeft/></button>
                    </div>
                    <div className="shrink-0 flex z-30">
                        <button onClick={handleNextButton} className="cursor-pointer rounded-full p-6 lg:p-10 bg-[#F54927]"><ArrowUpRight className="rotate-45"/></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonials;