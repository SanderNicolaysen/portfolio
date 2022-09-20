import { Link } from 'react-scroll'
import ThemeToggle from './ui/ThemeToggle'
import { FaPaw } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import Hamburger from './ui/Hamburger'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  console.log(isOpen)

  const handleHamburgerToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav
      className={`fixed z-20 w-full ${
        isOpen ? 'items-start' : 'items-center'
      } flex p-6 justify-between backdrop-blur text-white text-2xl bg-darkGray dark:bg-secondary ${
        isOpen ? 'h-screen' : ''
      }`}
    >
      <Link className={`group cursor-pointer flex items-center gap-2`} to="home" smooth={true} duration={500}>
        <i className="group-hover:rotate-45 transition-all duration-500 mb-[5px]">{<FaPaw />}</i>
        <h1 className="font-bold sm:text-2xl animated-b-border">
          S<span className="text-green-500">N</span>
        </h1>
      </Link>
      <div className="flex md:hidden">
        <Hamburger isOpen={isOpen} onToggle={handleHamburgerToggle} />
      </div>
      <ul className={`hidden md:flex md:items-center`}>
        <li className="">
          <Link className="animated-b-border" to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link className="animated-b-border" to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link className="animated-b-border" to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link className="animated-b-border" to="contact" smooth={true} duration={500}>
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
