import FeaturedProjects from "@/components/FeaturedProjects";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const Services = dynamic(() => import("@/components/Services"), {
  ssr: true
});
const Techstack = dynamic(() => import("@/components/Techstack"), {
  ssr: true
});

export default function Home() {
  return (
    <div className="relative w-full bg-black">
      <Navbar/>
      <Hero/>
      <Services/>
      <Testimonials/>
      <FeaturedProjects/>
      <Techstack/>
      <Footer/>
    </div>
  );
}