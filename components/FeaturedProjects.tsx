import ScrollingProjects from "./ScrollingProjects";

const images = [
  "/clients/aistartup.png",
  "/clients/precizna.png",
  "/clients/hikari.png",
];

const FeaturedProjects = () => {
  return (
    <section className="w-full min-h-screen bg-black">
      <ScrollingProjects images={images}/>
    </section>
  )
}

export default FeaturedProjects;