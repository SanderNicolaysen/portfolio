import { FaGithub, FaLinkedin } from 'react-icons/fa';
import PersonCoding from '../assets/person-coding.svg';
import { HiOutlineMail } from 'react-icons/hi';
import ArrowDownButton from './ui/ArrowDownButton';
import { motion } from 'framer-motion';
import PersonCodingAnimated from './ui/PersonCodingAnimated';

const Home = () => {
  return (
    <div
      name="home"
      className="flex items-center justify-center flex-col container mx-auto min-h-screen pt-20"
    >
      <div className="mb-4">
        <PersonCodingAnimated />
      </div>
      <h1 className="text-4xl font-bold text-center uppercase">
        SANDER <span className="text-green-500">NICOLAYSEN</span>
      </h1>
      <p className="uppercase font-bold text-xl mb-4">Fullstack Developer</p>
      <p className="max-w-xl mb-8 text-center">
        {/* I’m a full-stack developer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building responsive full-stack web applications. */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi qui
        repellat ex facilis obcaecati saepe, corporis itaque deleniti odio id.
        Quod cupiditate consequuntur veniam explicabo minus reiciendis voluptate
        saepe praesentium.
      </p>
      <div className="flex gap-5 mb-16">
        <motion.a
          whileHover={{ scale: 1.3 }}
          className="cursor-pointer"
          target="_blank"
          href="https://github.com/SanderNicolaysen"
        >
          {<FaGithub size={25} />}
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.3 }}
          className="cursor-pointer"
          target="_blank"
          href="https://www.linkedin.com/in/sandernicolaysen/"
        >
          {<FaLinkedin size={25} />}
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.3 }}
          className="cursor-pointer"
          target="_blank"
          href="mailto: nicolaysensander96@gmail.com"
        >
          {<HiOutlineMail size={25} />}
        </motion.a>
      </div>
      <ArrowDownButton />
    </div>
  );
};

export default Home;
