import Link from "next/link";
import FooterScrollButton from "./Footerscrollbutton";
import { cacheLife, cacheTag } from "next/cache";
import FooterGetTime, { GetCurrentYear } from "./Footergetdate";

async function getTemp() {
  "use cache";
  cacheLife("hours");
  cacheTag("footer-temp");

  try {
    const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=44.804&longitude=20.465&current=temperature_2m");
    if (!res.ok) return "--";
    const data = await res.json();

    return data?.current.temperature_2m 
      ? Math.round(data.current.temperature_2m) 
      : "--";
  } catch (error) {
    return "--";
  }
}

const Footer = async () => {
  const temperature = await getTemp();
  return (
    <footer className='w-full lg:h-[80vh] flex flex-col'>
      <div className="w-full flex flex-col lg:flex-row p-10 gap-10 lg:p-10 lg:gap-20 h-1/2 justify-center relative">
        <p className="lg:absolute left-10">copyright &copy; <GetCurrentYear/> made by mateja</p>
        <div className="p-10 absolute bottom-10 right-10 cursor-pointer flex justify-center items-center rounded-full border border-zinc-900">
          <FooterScrollButton/>
        </div>
        <div className="flex flex-col max-w-40">
          <ul>
            <li>
              <div className='group relative py-2 overflow-hidden cursor-pointer'>
                <Link href="mailto:info@matejastoev.dev" className='relative flex flex-col uppercase text-white font-bold'>
                  <span className='transition-all duration-500 cubic-bounce group-hover:-translate-y-[120%]'>
                    email
                  </span>
                  <span className='absolute top-0 left-0 transition-all duration-500 cubic-bounce translate-y-[120%] group-hover:translate-y-0'>
                    email
                  </span>
                </Link>
              </div>
            </li>
            <li>
              <div className='group relative py-2 overflow-hidden cursor-pointer'>
                <Link href="/contact" className='relative flex flex-col uppercase text-white font-bold'>
                  <span className='transition-all duration-500 cubic-bounce group-hover:-translate-y-[120%]'>
                    phone
                  </span>
                  <span className='absolute top-0 left-0 transition-all duration-500 cubic-bounce translate-y-[120%] group-hover:translate-y-0'>
                    phone
                  </span>
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col max-w-30">
          <span>Quick links</span>
          <ul>
            <li>
              <div className='group relative py-2 overflow-hidden cursor-pointer'>
                <Link href="/" className='relative flex flex-col uppercase text-white font-bold'>
                  <span className='transition-all duration-500 cubic-bounce group-hover:-translate-y-[120%]'>
                    home
                  </span>
                  <span className='absolute top-0 left-0 transition-all duration-500 cubic-bounce translate-y-[120%] group-hover:translate-y-0'>
                    home
                  </span>
                </Link>
              </div>
            </li>
            <li>
              <div className='group relative py-2 overflow-hidden cursor-pointer'>
                <Link href="/projects" className='relative flex flex-col uppercase text-white font-bold'>
                  <span className='transition-all duration-500 cubic-bounce group-hover:-translate-y-[120%]'>
                    projects
                  </span>
                  <span className='absolute top-0 left-0 transition-all duration-500 cubic-bounce translate-y-[120%] group-hover:translate-y-0'>
                    projects
                  </span>
                </Link>
              </div>
            </li>
            <li>
              <div className='group relative py-2 overflow-hidden cursor-pointer'>
                <Link href="/contact" className='relative flex flex-col uppercase text-white font-bold'>
                  <span className='transition-all duration-500 cubic-bounce group-hover:-translate-y-[120%]'>
                    contact
                  </span>
                  <span className='absolute top-0 left-0 transition-all duration-500 cubic-bounce translate-y-[120%] group-hover:translate-y-0'>
                    contact
                  </span>
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col max-w-30">
          <span>Social</span>
          <ul>
            <li>
              <div className='group relative py-2 overflow-hidden cursor-pointer'>
                <Link href="https://www.instagram.com/hikariagency_org/" className='relative flex flex-col uppercase text-white font-bold'>
                  <span className='transition-all duration-500 cubic-bounce group-hover:-translate-y-[120%]'>
                    instagram
                  </span>
                  <span className='absolute top-0 left-0 transition-all duration-500 cubic-bounce translate-y-[120%] group-hover:translate-y-0'>
                    instagram
                  </span>
                </Link>
              </div>
            </li>
            <li>
              <div className='group relative py-2 overflow-hidden cursor-pointer'>
                <Link href="https://rs.linkedin.com/in/mateja-stoev-35a88b386" className='relative flex flex-col uppercase text-white font-bold'>
                  <span className='transition-all duration-500 cubic-bounce group-hover:-translate-y-[120%]'>
                    linkedin
                  </span>
                  <span className='absolute top-0 left-0 transition-all duration-500 cubic-bounce translate-y-[120%] group-hover:translate-y-0'>
                    linkedin
                  </span>
                </Link>
              </div>
            </li>
            <li>
              <div className='group relative py-2 overflow-hidden cursor-pointer'>
                <Link href="https://wa.me/38163242823?text=Hello%2C%20World!" className='relative flex flex-col uppercase text-white font-bold'>
                  <span className='transition-all duration-500 cubic-bounce group-hover:-translate-y-[120%]'>
                    whatsapp
                  </span>
                  <span className='absolute top-0 left-0 transition-all duration-500 cubic-bounce translate-y-[120%] group-hover:translate-y-0'>
                    whatsapp
                  </span>
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center h-1/2 gap-5 lg:gap-0">
        <h1 className="uppercase text-[#F54927] text-5xl md:text-6xl lg:text-[8rem] xl:text-[10rem] 2xl:text-[13.5rem] text-center">let&apos;s create</h1>
        <div className="w-full h-full flex justify-start items-center pl-30 pr-30">
          <p className="uppercase text-white w-full"><FooterGetTime/> / {temperature}&deg;</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;