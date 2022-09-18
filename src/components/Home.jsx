import Programmer from '../assets/undraw_programming_re_kg9v.svg'
import LinkButton from './ui/LinkButton'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiHashnode } from 'react-icons/si'

const Home = () => {
  return (
    <>
      <header name="home" className={`grid md:grid-cols-2 gap-4 place-items-center h-screen mx-16`}>
        {/* <div
          className="md:h-44 md:w-30 bg-cover bg-no-repeat lg:w-44 lg:h-72 my-8 border-1 rounded-md"
        ></div> */}
        <div className="">
          <h1 className="font-bold uppercase text-3xl">Sander Nicolaysen</h1>
          <h2 className="font-bold uppercase text-sm text-gradient-blue mt-1">Full Stack Developer</h2>
          <p className="text-lg mt-3">
            I’m a full-stack developer specializing in building (and occasionally designing) exceptional digital
            experiences. Currently, I’m focused on building responsive full-stack web applications.
          </p>
          <div className="mt-4 flex gap-4">
            <LinkButton icon={<FaGithub />} link="https://github.com/SanderNicolaysen" />
            <LinkButton icon={<FaLinkedin />} link="https://www.linkedin.com/in/sandernicolaysen/" />
            <LinkButton icon={<SiHashnode />} link="#" />
          </div>
        </div>
        <div className="hidden md:block">
          <img src={Programmer} alt="person on computer" />
        </div>
      </header>
    </>
  )
}

export default Home
