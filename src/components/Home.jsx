import { FaGithub, FaLinkedin } from 'react-icons/fa'
import PersonCoding from '../assets/person-coding.svg'
import { HiOutlineMail } from 'react-icons/hi'
import ArrowDownButton from './ui/ArrowDownButton'
import { motion } from 'framer-motion'
import PersonCodingAnimated from './ui/PersonCodingAnimated'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'

const Home = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div
      name="home"
      className="max-w-2xl flex items-center justify-center flex-col container mx-auto min-h-screen pt-20 px-2 sm:px-0"
    >
      <div className="mb-4">
        <PersonCodingAnimated />
      </div>
      <h1 className="text-3xl sm:text-4xl dark:text-white font-bold text-center uppercase">
        SANDER <span className="text-green-500">NICOLAYSEN</span>
      </h1>
      <p className="uppercase font-bold text-xl mb-4 dark:text-darkgraymuted-300 text-center">Fullstack Developer</p>
      <p className="mb-8 text-center">
        {/* I’m a full-stack developer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building responsive full-stack web applications. */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi qui repellat ex facilis obcaecati saepe,
        corporis itaque deleniti odio id. Quod cupiditate consequuntur veniam explicabo minus reiciendis voluptate saepe
        praesentium.
      </p>
      <div className="flex gap-5 mb-16">
        <motion.a
          whileHover={{ scale: 1.2 }}
          className="cursor-pointer dark:hover:text-white"
          target="_blank"
          href="https://github.com/SanderNicolaysen"
        >
          {<FaGithub size={25} />}
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          className="cursor-pointer dark:hover:text-white"
          target="_blank"
          href="https://www.linkedin.com/in/sandernicolaysen/"
        >
          {<FaLinkedin size={25} />}
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          className="cursor-pointer dark:hover:text-white"
          target="_blank"
          href="mailto: nicolaysensander96@gmail.com"
        >
          {<HiOutlineMail size={25} />}
        </motion.a>
      </div>
      {/* <ArrowDownButton /> */}
    </div>
  )
}

export default Home
