import { FaGithub, FaLinkedin } from 'react-icons/fa'
import PersonCoding from '../assets/person-coding.svg'
import { HiOutlineMail } from 'react-icons/hi'
import ArrowDownButton from './ui/ArrowDownButton'

const Home = () => {
  return (
    <header name="home" className="min-h-screen flex items-center justify-center flex-col container mx-auto">
      <img className="mb-4 mt-16" src={PersonCoding} alt="SVG icon of person coding" />
      <h1 className="text-4xl font-bold text-center uppercase">
        SANDER <span className="text-green-500">NICOLAYSEN</span>
      </h1>
      <p className="uppercase font-bold text-xl mb-4">Fullstack Developer</p>
      <p className="max-w-xl mb-8 text-center">
        I’m a full-stack developer specializing in building (and occasionally designing) exceptional digital
        experiences. Currently, I’m focused on building responsive full-stack web applications.
      </p>
      <div className="flex gap-3 mb-16">
        <a className="cursor-pointer" target="_blank" href="https://github.com/SanderNicolaysen">
          {<FaGithub size={22} />}
        </a>
        <a className="cursor-pointer" target="_blank" href="https://www.linkedin.com/in/sandernicolaysen/">
          {<FaLinkedin size={22} />}
        </a>
        <a className="cursor-pointer" target="_blank" href="mailto: nicolaysensander96@gmail.com">
          {<HiOutlineMail size={22} />}
        </a>
      </div>
      <ArrowDownButton />
    </header>
  )
}

export default Home
