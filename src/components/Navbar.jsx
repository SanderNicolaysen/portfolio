import { Link } from 'react-scroll'
import ThemeToggle from './ui/ThemeToggle'
import { FaPaw } from 'react-icons/fa'
import { FaRegStar } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import Hamburger from './ui/Hamburger'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const isBigScreen = useMediaQuery({ query: '(min-width: 768px)' })
  console.log(isOpen)

  const handleHamburgerToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleClick = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (isBigScreen) {
      setIsOpen(false)
    }
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen, isBigScreen])

  return (
    <>
      <nav
        className={`fixed z-20 w-full top-0 left-0 h-20 items-center flex px-6 md:px-12 justify-between backdrop-blur text-white text-2xl bg-darkGray-500 dark:bg-secondary`}
      >
        <Link
          onClick={handleClick}
          className={`group cursor-pointer flex items-center gap-2`}
          to="home"
          smooth={true}
          duration={500}
        >
          <i className="group-hover:rotate-90 transition-all duration-500 mb-[5px]">{<FaRegStar />}</i>
          <h1 className="font-bold sm:text-2xl animated-b-border group-hover:after:bg-purple-500 group-hover:after:w-full">
            S<span className="text-purple-500">N</span>
          </h1>
        </Link>
        <div className="flex md:hidden">
          <Hamburger isOpen={isOpen} onToggle={handleHamburgerToggle} />
        </div>
        {isOpen && (
          <div className="md:ml-16 absolute right-6 top-28 z-10">
            <ThemeToggle />
          </div>
        )}
        <ul
          className={`${
            isOpen
              ? 'fixed bg-darkGray-500 dark:bg-dark top-0 left-0 pt-5 mt-20 h-[calc(100vh-5rem)] w-full flex flex-col items-center justify-center gap-16 px-6 border-t-2 dark:border-t-0 border-gray-500'
              : 'hidden md:flex md:items-center'
          }`}
        >
          <li className="cursor-pointer">
            <Link onClick={handleClick} className="animated-b-border" to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="cursor-pointer md:pl-6">
            <Link
              onClick={handleClick}
              className="animated-b-border"
              to="bio"
              smooth={true}
              duration={500}
              offset={-80}
            >
              Bio
            </Link>
          </li>
          <li className="cursor-pointer md:pl-6">
            <Link
              onClick={handleClick}
              className="animated-b-border"
              to="work"
              smooth={true}
              duration={500}
              offset={-80}
            >
              Work
            </Link>
          </li>
          <li className="cursor-pointer md:pl-6">
            <Link onClick={handleClick} className="animated-b-border" to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
          {!isOpen && (
            <div className="md:ml-16">
              <ThemeToggle />
            </div>
          )}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
