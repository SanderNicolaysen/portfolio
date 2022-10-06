import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { motion } from 'framer-motion';
import PersonCodingAnimated from './ui/PersonCodingAnimated';

function Home() {
  return (
    <div
      name="home"
      className="max-w-3xl flex items-center justify-center flex-col container mx-auto min-h-screen pt-20 px-6"
    >
      <div className="mb-4">
        <PersonCodingAnimated />
      </div>
      <h1 className="text-3xl sm:text-4xl dark:text-white font-bold text-center uppercase">
        SANDER <span className="text-gradient-purple">NICOLAYSEN</span>
      </h1>
      <p className="uppercase font-bold text-xl mb-4 dark:text-darkgraymuted-300 text-center">
        Full stack Developer
      </p>
      <p className="mb-8 text-center">
        {`Hello! I'm Sander, a full stack developer with a passion for building
        digital services on the internet. I love to create things that make
        people's lives easier, whether it's a website or a whole new app.`}
      </p>
      <div className="flex gap-5 mb-16">
        <motion.a
          whileHover={{ scale: 1.2 }}
          className="cursor-pointer dark:hover:text-white"
          target="_blank"
          href="https://github.com/SanderNicolaysen"
          aria-label="Github"
        >
          <FaGithub size={25} />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          className="cursor-pointer dark:hover:text-white"
          target="_blank"
          href="https://www.linkedin.com/in/sandernicolaysen/"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={25} />
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.2 }}
          className="cursor-pointer dark:hover:text-white"
          target="_blank"
          href="mailto: nicolaysensander96@gmail.com"
          aria-label="Email"
        >
          <HiOutlineMail size={25} />
        </motion.a>
      </div>
    </div>
  );
}

export default Home;
