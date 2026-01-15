import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const page = () => {
  return (
    <section className='relative bg-black w-full'>
        <Navbar/>
        <div className="w-full h-screen flex flex-col p-15 gap-5">
            <h1 className="text-4xl md:text-6xl lg:text-[170px] uppercase bg-linear-to-b from-gray-400 via-white to-gray-400 text-transparent bg-clip-text">selected work</h1>
            <p className="text-md text-[#ccc] max-w-4xl">A curated collection of digital experiences, focusing on functionality and aesthetic excellence.</p>
        </div>
        <Footer/>
    </section>
  )
}

export default page;