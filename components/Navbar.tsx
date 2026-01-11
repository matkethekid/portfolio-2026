import Link from "next/link";

const links = [
    { id: 0, title: "About me", url: "/about" },
    { id: 1, title: "Projects", url: "/projects" },
    { id: 2, title: "Contact", url: "/contact" }
];

const Navbar = () => {
  return (
    <nav className='w-full h-20 max-w-4xl mx-auto p-10 lg:p-15 flex justify-center items-center z-50 relative'>
      <div className='w-14 h-14 bg-white text-black flex items-center justify-center text-5xl'>
        <Link href={"/"}>M</Link>
      </div>
      <ul className="hidden lg:flex flex-row text-3xl gap-5 w-full justify-center">
        {links.map((link) => (
          <li key={link.id}>
            <Link className="hover:drop-shadow-lg" href={link.url}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar;