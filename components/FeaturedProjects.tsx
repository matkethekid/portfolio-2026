import Image from "next/image";
import ScrollingProjects from "./ScrollingProjects";

const FeaturedProjects = () => {
  return (
    <section className="w-full min-h-screen bg-black">
        <ScrollingProjects/>
    </section>
  )
}

export default FeaturedProjects;