import ScrollingProjects from "./ScrollingProjects";

const images = [
  "/clients/aistartup.avif",
  "/clients/precizna.avif",
  "/clients/hikari.avif",
];

const FeaturedProjects = () => {
  return (
    <section className="w-full min-h-screen bg-black">
      <ScrollingProjects images={images}/>
    </section>
  )
}

export default FeaturedProjects;