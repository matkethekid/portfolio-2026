import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const frontend_tech = [
    {
        id: 0,
        src: "/tech/reacticon.svg",
        name: "React"
    },
    {
        id: 1,
        src: "/tech/typescripticon.svg",
        name: "Typescript"
    },
    {
        id: 2,
        src: "/tech/javascripticon.svg",
        name: "Javascript"
    },
    {
        id: 3,
        src: "/tech/nextjsicon.svg",
        name: "Next.js"
    },
    {
        id: 4,
        src: "/tech/tailwindicon.svg",
        name: "Tailwind"
    },
    {
        id: 5,
        src: "/tech/htmlicon.svg",
        name: "HTML"
    },
    {
        id: 6,
        src: "/tech/cssicon.svg",
        name: "CSS"
    },
];

const backend_tech = [
    {
        id: 0,
        src: "/tech/nodejs.svg",
        name: "Node.js"
    },
    {
        id: 1,
        src: "/tech/express.svg",
        name: "Express"
    },
    {
        id: 2,
        src: "/tech/nestjs.webp",
        name: "NestJS"
    },
];

const databases_tech = [
    {
        id: 0,
        src: "/tech/mysql.svg",
        name: "MySQL"
    },
    {
        id: 1,
        src: "/tech/mongodb.svg",
        name: "MongoDB"
    },
    {
        id: 2,
        src: "/tech/postgres.svg",
        name: "Postgres"
    },
];

const Techstack = () => {
  return (
    <section className='w-full lg:h-[80vh] bg-black flex flex-col lg:flex-row pt-20 pb-20 pl-5 pr-5 lg:pl-20 lg:pr-20 gap-3'>
        <div className='w-full lg:w-[40%] bg-[#F54927] border border-zinc-800 rounded-[40px] p-10 flex flex-col gap-10'>
            <h1 className='uppercase text-3xl md:text-4xl lg:text-5xl'>frontend</h1>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-3'>
                {frontend_tech.map((tech, index) => (
                    <div key={index} className='h-14 bg-white/30 backdrop-blur-md backdrop-saturate-150 rounded-[20px] flex items-center pl-3 gap-x-3 border border-white/5 transition-colors'>
                        <div className='w-9 h-9 flex items-center justify-center bg-white/10 rounded-xl'>
                            <Image src={tech.src} alt={tech.name} width={20} height={20} loading='lazy' />
                        </div>
                        <p className='font-semibold text-sm tracking-tight text-slate-200'>{tech.name}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className='w-full lg:w-[60%] h-full flex flex-col gap-3'>
            <div className='w-full h-[70%] rounded-[40px] bg-[#d5d2cf] pt-10 pb-7 lg:pt-15 lg:pb-15 pl-15 pr-15 relative px-2 flex flex-col gap-7 justify-between'>
                <h1 className='text-black text-2xl md:text-4xl xl:text-5xl uppercase leading-tight'>
                    Building 
                    <span className="relative inline-block mx-2">
                        <span className="relative z-10">Robust</span>
                        <div className="absolute inset-0 -skew-x-6 border-2 md:border-4 border-[#F54927] rounded-[50%_40%] -rotate-2 scale-110 pointer-events-none" />
                    </span> 
                    Apps for Ambitious Brands
                </h1>
                <div className='flex flex-row w-full z-3 group justify-center items-center lg:justify-start'>
                    <Link href={"/"} className='relative overflow-hidden uppercase w-[90%] lg:w-full xl:w-1/2 h-12 lg:h-25 flex items-center justify-center bg-[#F54927] rounded-full text-black text-xl md:text-2xl lg:text-3xl font-bold'>
                        <span className='absolute transition-all duration-300 cubic-bounce group-hover:-translate-y-[350%]'>
                            collaborate
                        </span>
                        <span className='absolute translate-y-[350%] transition-all duration-300 cubic-bounce group-hover:translate-y-0'>
                            book call
                        </span>
                    </Link>
                    <div className='relative overflow-hidden p-3 lg:p-10 rounded-full bg-[#F54927] text-black h-12 lg:h-25 w-12 lg:w-25 flex items-center justify-center shrink-0'>
                        <ArrowUpRight size={40} className='transition-all duration-300 cubic-bounce group-hover:scale-125 group-hover:rotate-45' />
                    </div>
                </div>
            </div>
            <div className='w-full h-[30%] flex flex-col lg:flex-row gap-3'>
                <div className='w-full lg:w-1/2 bg-[#4A2C10] rounded-[40px] pt-7 pb-7 pl-5 pr-5 gap-5 flex justify-start items-start flex-col'>
                    <h2>BACKEND</h2>
                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
                        {backend_tech.map((tech, index) => (
                            <div key={index} className='h-14 bg-white/30 backdrop-blur-md backdrop-saturate-150 rounded-[20px] flex items-center pl-3 gap-x-3 border border-white/5 transition-colors'>
                                <div className='w-9 h-9 flex items-center justify-center bg-white/10 rounded-xl'>
                                    <Image src={tech.src} alt={tech.name} width={20} height={20} loading='lazy' />
                                </div>
                                <p className='font-semibold text-sm tracking-tight text-slate-200'>{tech.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='w-full lg:w-1/2 bg-[#2D3321] rounded-[40px] pt-7 pb-7 pl-5 pr-5 gap-5 flex justify-start items-start flex-col'>
                    <h2>DATABASES</h2>
                    <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
                        {databases_tech.map((tech, index) => (
                            <div key={index} className='h-14 bg-white/30 backdrop-blur-md backdrop-saturate-150 rounded-[20px] flex items-center pl-3 gap-x-3 border border-white/5 transition-colors'>
                                <div className='w-9 h-9 flex items-center justify-center bg-white/10 rounded-xl'>
                                    <Image src={tech.src} alt={tech.name} width={20} height={20} loading='lazy' />
                                </div>
                                <p className='font-semibold text-sm tracking-tight text-slate-200'>{tech.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Techstack;