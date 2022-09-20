import { Link } from 'react-scroll'
import ThemeToggle from './ui/ThemeToggle'
import { FaPaw } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed z-20 w-full flex p-6 justify-between backdrop-blur text-white text-2xl bg-darkGray dark:bg-secondary">
      <Link className="group cursor-pointer flex items-center gap-2" to="home" smooth={true} duration={500}>
        <i className="group-hover:rotate-45 transition-all duration-500 mb-[2px]">{<FaPaw />}</i>
        <h1 className="font-bold sm:text-2xl border-b-2 border-transparent hover:border-green-500">
          S<span className="text-green-500">N</span>
        </h1>
      </Link>
      <div className="md:hidden">
        <GiHamburgerMenu />
      </div>
      <ul className="hidden md:flex md:items-center">
        <li>
          <Link
            activeClass="border-b-2 border-green-500"
            className="hover:border-b-2 hover:border-green-500"
            to="home"
            smooth={true}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:border-b-2 hover:border-green-500" to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link className="hover:border-b-2 hover:border-green-500" to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link className="hover:border-b-2 hover:border-green-500" to="contact" smooth={true} duration={500}>
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
