import { Link } from 'react-scroll';
import ThemeToggle from './ui/ThemeToggle';
import { FaPaw } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import Hamburger from './ui/Hamburger';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);

  const handleHamburgerToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className={`fixed z-20 w-full top-0 left-0 h-20 items-center flex px-6 md:px-12 justify-between backdrop-blur text-white text-2xl bg-darkGray-500 dark:bg-secondary`}
      >
        <Link
          className={`group cursor-pointer flex items-center gap-2`}
          to="home"
          smooth={true}
          duration={500}
        >
          <i className="group-hover:rotate-45 transition-all duration-500 mb-[5px]">
            {<FaPaw />}
          </i>
          <h1 className="font-bold sm:text-2xl animated-b-border">
            S<span className="text-green-500">N</span>
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
              ? 'fixed bg-darkGray-500 top-0 left-0 pt-5 mt-20 h-[calc(100vh-5rem)] w-full flex flex-col items-center justify-around px-6 border-t-2 border-gray-500'
              : 'hidden md:flex md:items-center'
          }`}
        >
          <li className="">
            <Link
              className="animated-b-border"
              to="home"
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="animated-b-border"
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              className="animated-b-border"
              to="work"
              smooth={true}
              duration={500}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              className="animated-b-border"
              to="contact"
              smooth={true}
              duration={500}
            >
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
  );
};

export default Navbar;
