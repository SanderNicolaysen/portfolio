import { Link } from 'react-scroll'
import ThemeToggle from './ui/ThemeToggle'
import { FaPaw } from 'react-icons/fa'
import { useEffect, useState } from 'react'

const Navbar = () => {
  return (
    <nav className="fixed z-20 w-full flex p-6 justify-between backdrop-blur dark:bg-secondary">
      <Link className="group cursor-pointer flex items-center gap-2" to="home" smooth={true} duration={500}>
        <i className="group-hover:rotate-45 transition-all duration-500 mb-[2px]">{<FaPaw />}</i>
        <h1 className="font-bold text-xl border-b-2 border-transparent hover:border-blue-400 text-gradient-blue">SN</h1>
      </Link>
      <ul className="flex">
        <li>
          <Link className="hover:border-b-2 hover:border-blue-400" to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:border-b-2 hover:border-blue-400" to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link className="hover:border-b-2 hover:border-blue-400" to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link className="hover:border-b-2 hover:border-blue-400" to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <div className="ml-16">
          <ThemeToggle />
        </div>
      </ul>
    </nav>
  )
}

export default Navbar
