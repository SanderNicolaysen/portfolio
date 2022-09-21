import { FaGithub, FaLinkedin } from 'react-icons/fa'
import PersonCoding from '../assets/person-coding.svg'
import { HiOutlineMail } from 'react-icons/hi'
import ArrowDownButton from './ui/ArrowDownButton'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <div name="home" className="flex items-center justify-center flex-col container mx-auto min-h-screen pt-20">
      <motion.img className="mb-4" src={PersonCoding} alt="SVG icon of person coding" />
      <h1 className="text-4xl font-bold text-center uppercase">
        SANDER <span className="text-green-500">NICOLAYSEN</span>
      </h1>
      <p className="uppercase font-bold text-xl mb-4">Fullstack Developer</p>
      <p className="max-w-xl mb-8 text-center">
        I’m a full-stack developer specializing in building (and occasionally designing) exceptional digital
        experiences. Currently, I’m focused on building responsive full-stack web applications.
      </p>
      <div className="flex gap-3 mb-16">
        <motion.a
          whileHover={{ scale: 1.3 }}
          className="cursor-pointer"
          target="_blank"
          href="https://github.com/SanderNicolaysen"
        >
          {<FaGithub size={22} />}
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.3 }}
          className="cursor-pointer"
          target="_blank"
          href="https://www.linkedin.com/in/sandernicolaysen/"
        >
          {<FaLinkedin size={22} />}
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.3 }}
          className="cursor-pointer"
          target="_blank"
          href="mailto: nicolaysensander96@gmail.com"
        >
          {<HiOutlineMail size={22} />}
        </motion.a>
      </div>
      <ArrowDownButton />
    </div>
  )
}

export default Home
