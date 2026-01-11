import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from "lucide-react";

const Services = () => {
  return (
    <section className='w-full min-h-screen bg-black pt-10 pl-5 pr-5 pb-10 lg:p-20 flex flex-col relative overflow-hidden'>
        <div className='lg:border border-white/12 w-full h-full border-r- border-b-transparent border-t-transparent lg:pl-10 lg:pr-10 gap-10 flex flex-col'>
            <div className='z-0 absolute inset-0 opacity-15'>
                <Image src={"/nnnoise.svg"} alt='noise' fill className='object-cover scale-150'/>
            </div>
            <div className='flex flex-col z-1 gap-3'>
                <h1 className="text-4xl md:text-6xl lg:text-[170px] uppercase bg-linear-to-b from-gray-400 via-white to-gray-400 text-transparent bg-clip-text">services</h1>
                <p className='text-md lg:text-xl text-[#ccc] max-w-4xl'>Building on a foundation of technical excellence, I have established my practice as a digital development powerhouse. Initially focused on crafting interactive interfaces, my work has evolved into a versatile development platform that spans the entire tech stack. Navigating the ever-changing digital landscape with precision, I transform complex ideas into high-performance industry standards.</p>
            </div>
            <div className='flex flex-col lg:flex-row w-full items-center gap-5'>
                <div className='w-full lg:w-[66%] h-[50vh] overflow-hidden flex flex-col items-center justify-center bg-white/2 group/card relative backdrop-blur-sm border border-t-white/20 border-l-white/20 border-b-white/5 border-r-white/5 rounded-3xl'>
                    <div className='absolute inset-0 w-full h-full opacity-0 group/card-hover:opacity-100 bg-grid-pattern transition-opacity duration-500'></div>
                    <h2 className='uppercase text-white text-3xl sm:text-5xl'>web applications</h2>
                    <h3 className='text-white text-5xl uppercase tracking-widest absolute top-10 right-10'>01</h3>
                    <div className='flex flex-row w-full items-center justify-center absolute bottom-5 group'>
                        <Link href={"/"} className='uppercase w-[70%] flex justify-center items-center overflow-hidden pt-7 pb-7 lg:pt-15 lg:pb-15 lg:w-1/2 text-3xl text-center bg-[#F54927] group-hover:bg-[#F54927]/70 rounded-full relative'>
                            <span className='absolute transition-all duration-300 cubic-bounce group-hover:-translate-y-[350%]'>
                                projects
                            </span>
                            <span className='absolute translate-y-[350%] transition-all duration-300 cubic-bounce group-hover:translate-y-0'>
                                view work
                            </span>
                        </Link>
                        <div className='p-3 lg:p-10 rounded-full bg-[#F54927] group-hover:bg-[#F54927]/70'><ArrowUpRight size={40} className='transition-all duration-300 cubic-bounce group-hover:scale-125 group-hover:rotate-45'/></div>
                    </div>
                </div>
                <div className='w-full lg:w-[33%] h-[50vh] bg-[#F54927] rounded-3xl relative overflow-hidden flex flex-col items-center justify-center'>
                    <div className='absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 bg-grid-pattern transition-opacity duration-500'></div>
                    <h2 className='uppercase text-white text-3xl sm:text-5xl'>websites</h2>
                    <h3 className='text-white text-5xl uppercase tracking-widest absolute top-10 right-10'>02</h3>
                    <div className='flex flex-row w-full items-center justify-center absolute bottom-5 group'>
                        <Link href={"/"} className='uppercase justify-center items-center flex overflow-hidden w-[70%] pt-7 pb-7 lg:pt-10 lg:pb-10 lg:w-1/2 text-black text-3xl text-center bg-white group-hover:bg-white/90 rounded-full relative'>
                            <span className='absolute transition-all duration-300 cubic-bounce group-hover:-translate-y-[350%]'>
                                projects
                            </span>
                            <span className='absolute translate-y-[350%] transition-all duration-300 cubic-bounce group-hover:translate-y-0'>
                                view work
                            </span>
                        </Link>
                        <div className='p-3 lg:p-5 rounded-full bg-white group-hover:bg-white/90 text-black'><ArrowUpRight size={40} className='transition-all duration-300 cubic-bounce group-hover:scale-125 group-hover:rotate-45'/></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services;