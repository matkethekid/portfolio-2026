import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Github, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 0,
    title: "Precizna Poljoprivreda",
    description: "A bright and user-friendly platform for precision agriculture - featuring an interactive map, real-time data visualization, and an intuitive admin panel for streamlined land and crop management.",
    src: "/clients/precizna.avif",
    url: "https://preciznapoljoprivreda.rs/",
    github: ""
  },
  {
    id: 1,
    title: "AI Startup",
    description: "Great design from uistore.design - fully responsive dark theme with violet highlights.",
    src: "/clients/aistartup.avif",
    url: "https://ai-startup-sigma.vercel.app/",
    github: "https://github.com/matkethekid/ai-startup"
  },
  {
    id: 2,
    title: "Hikari Agency",
    description: "Hikari Agency is a modern digital agency specializing in fullstack solutions, combining elegant design with robust, scalable technology. Built with a sleek dark theme, the platform reflects Hikari’s core values: precision, innovation, and aesthetic excellence.",
    src: "/clients/hikari.avif",
    url: "https://hikariagency.org/",
    github: ""
  },
  {
    id: 3,
    title: "Studio Zid",
    description: "A clean and functional website built for a painting service studio - developed with Next.js and integrated backend for Google-based login and client reviews, combining simplicity with user-focused utility.",
    src: "/clients/studiozid2.avif",
    url: "https://studiozid.rs/",
    github: ""
  },
  {
    id: 4,
    title: "Termo Gas",
    description: "A simple and modern website with light themes for the needs of a company for the installation of heating, cooling and sewage systems.",
    src: "/clients/termogas.png",
    url: "https://termogas.rs",
    github: "https://github.com/matkethekid/termogas"
  },
  {
    id: 5,
    title: "Walvayn Shop",
    description: "A clean and modern streetwear e-commerce website with a light theme, featuring minimal black-and-white design, bold typography, and a focus on product presentation.",
    src: "/clients/walvayn.png",
    url: "https://walvayn-ui.vercel.app/",
    github: "https://github.com/matkethekid/walvayn-ui"
  },
  {
    id: 6,
    title: "Real Estate",
    description: "A modern real estate website inspired by a Figma Community design - featuring a sleek dark theme, elegant property listings, and a user-friendly interface focused on seamless browsing and property discovery.",
    src: "/clients/realestate.png",
    url: "https://real-estate-sepia-nine.vercel.app/",
    github: "https://github.com/matkethekid/real-estate"
  }
];

const page = () => {
  return (
    <section className='relative min-h-screen bg-black w-full'>
        <Navbar/>
        <div className="w-full flex flex-col p-5 lg:p-15 gap-5">
          <h1 className="text-4xl md:text-6xl lg:text-[170px] uppercase bg-linear-to-b from-gray-400 via-white to-gray-400 text-transparent bg-clip-text">selected work</h1>
          <p className="text-base text-[#ccc] max-w-4xl">A curated collection of digital experiences, focusing on functionality and aesthetic excellence.</p>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project, index) => (
              <div key={index} className='flex flex-col gap-7 p-5'>
                <div className='aspect-video relative'>
                  <Image src={project.src} alt={project.title} fill sizes="(max-width: 768px) calc(100vw - 40px), calc(50vw - 40px)" className='object-cover rounded-3xl' priority={index < 2 }/>
                </div>
                <div className="flex flex-col gap-3">
                  <h2 className={`text-3xl md:text-4xl lg:text-5xl`}>{project.title}</h2>
                  <p className='max-w-xl text-sm lg:text-base'>{project.description}</p>
                </div>
                <div className="flex flex-row justify-between items-center pr-10">
                  <Link href={project.url} className={`uppercase flex gap-5 group text-xl bg-[#F54927] ${project.github != "" ? "w-1/2 p-3" : "w-full p-5"} lg:w-1/2 justify-center rounded-full items-center`}>
                    View more
                    <div className="overflow-hidden w-7.5 h-7.5 group relative flex justify-center items-center"><MoveRight className="arrow-img"/></div>
                  </Link>
                  {
                    project.github != "" ? <Link href={project.github} target="_blank"><Github /></Link> : ""
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer/>
    </section>
  )
}

export default page;