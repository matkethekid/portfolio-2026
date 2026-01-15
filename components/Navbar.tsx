"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { id: 0, title: "Projects", url: "/projects" },
  { id: 1, title: "Contact", url: "/contact" }
];

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  return (
    <nav className='w-full lg:h-20 max-w-4xl mx-auto p-7 lg:p-15 flex lg:gap-62.5 justify-between items-center z-50 relative'>
      <div className='w-14 h-14 z-50 bg-white text-black flex items-center justify-center text-5xl font-bold'>
        <Link href={"/"} onClick={() => setIsSidebarOpen(false)}>M</Link>
      </div>
      <ul className="hidden lg:flex flex-row text-3xl gap-10 w-full">
        {links.map((link) => (
          <li key={link.id}>
            <Link className="hover:drop-shadow-lg" href={link.url}>{link.title}</Link>
          </li>
        ))}
      </ul>
      <div className="lg:hidden z-50">
        {isSidebarOpen ? (
          <X className="size-8 text-white cursor-pointer" onClick={() => setIsSidebarOpen(false)} />
        ) : (
          <Menu className="size-8 cursor-pointer" onClick={() => setIsSidebarOpen(true)} />
        )}
      </div>
      <div className={`
        fixed inset-0 bg-black transition-transform duration-300 ease-in-out z-40 flex flex-col items-center justify-center
        ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} 
        lg:hidden
      `}>
        <ul className="flex flex-col items-center text-4xl gap-8">
          {links.map((link) => (
            <li key={link.id}>
              <Link className="text-white hover:text-red-500" href={link.url} onClick={() => setIsSidebarOpen(false)}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;