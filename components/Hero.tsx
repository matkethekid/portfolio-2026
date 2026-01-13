import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="relative h-screen w-full overflow-hidden bg-black">
      <video src="/herovideo.mp4" autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover z-0"/>
      <div className="absolute inset-0 z-2 pointer-events-none opacity-5">
        <Image src="/nnnoise.svg" alt="noise overlay" fill className="object-cover scale-150"/>
      </div>
      <div className="bg-red-900/50 absolute inset-0 opacity-[0.5] z-1"></div>
      <div className="relative z-30 flex flex-col justify-end h-full w-full p-6 lg:p-12 text-white">
        <div className="mb-10 pb-10 justify-end flex flex-col lg:flex-row lg:justify-between lg:items-end w-full min-h-[50%] gap-8">
          <div className="flex flex-col justify-end gap-6 lg:gap-20 w-full lg:w-1/2">
            <h1 className="uppercase text-4xl md:text-6xl lg:text-[100px] leading-none font-bold text-center lg:text-left">
              mateja stoev
            </h1>
            <div className='flex flex-row w-full z-3 group justify-center items-center lg:justify-start'>
              <Link href={"/"} className='relative overflow-hidden uppercase w-[90%] lg:w-1/2 h-15 lg:h-25 flex items-center justify-center bg-[#F54927] rounded-full text-black text-3xl font-bold'>
                <span className='absolute transition-all duration-300 cubic-bounce group-hover:-translate-y-[350%]'>
                  collaborate
                </span>
                <span className='absolute translate-y-[350%] transition-all duration-300 cubic-bounce group-hover:translate-y-0'>
                  book call
                </span>
              </Link>
              <div className='relative overflow-hidden p-3 lg:p-10 rounded-full bg-[#F54927] text-black h-15 lg:h-25 w-15 lg:w-25 flex items-center justify-center shrink-0'>
                <ArrowUpRight size={40} className='transition-all duration-300 cubic-bounce group-hover:scale-125 group-hover:rotate-45' />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end w-full lg:w-1/2 lg:text-right pb-4">
            <h2 className="uppercase tracking-tighter text-2xl md:text-4xl lg:text-5xl text-center lg:text-right">
              full stack developer
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
}