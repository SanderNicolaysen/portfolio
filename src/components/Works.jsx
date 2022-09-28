import Card from './ui/Card';
import Flytoget from '../assets/flytoget.png';
import Leo from '../assets/leo.png';
import Space from '../assets/space-exploration-game.png';
import Mario from '../assets/mario.jpeg';
import Optimera from '../assets/optimera.png';
import Toolit from '../assets/toolit.png';
import ArrowDownButton from './ui/ArrowDownButton';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Works = () => {
  return (
    <section name="works" className="max-w-3xl container mx-auto px-4">
      <h2 className="font-semibold text-xl dark:text-white mb-4 border-b-2 dark:border-darkGray-500">
        Works
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <figure className="group w-full relative mb-4 drop-shadow-md rounded-lg overflow-hidden">
          <img
            src={Flytoget}
            alt=""
            className="aspect-[3/2] group-hover:scale-110 transition-all duration-200"
          />
          <figcaption className="transition-all duration-500 opacity-0 group-hover:opacity-100 flex flex-col justify-between bg-darkGray-500 absolute top-0 left-0 w-full h-full z-10 p-4">
            <div className="">
              <div className="flex justify-between items-center">
                <p className="text-xs">2021-2022</p>
                <div className="flex gap-3">
                  <a
                    href=""
                    className="hover:text-green-500 transition-all duration-300"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a
                    href=""
                    className="hover:text-green-500 transition-all duration-300"
                  >
                    <FiExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
            <div className="">
              <h3 className="text-xl mb-2 text-white">Flytoget</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium praesentium doloremque laborum.
              </p>
            </div>
            <div className="">
              <ul className="flex gap-2 text-xs text-darkgraymuted-600">
                <li>React</li>
                <li>Redux</li>
                <li>Formik</li>
              </ul>
            </div>
          </figcaption>
        </figure>
        <figure className="group w-full relative mb-4 drop-shadow-md rounded-lg overflow-hidden">
          <img
            src={Optimera}
            alt=""
            className="aspect-[3/2] group-hover:scale-110 transition-all duration-200"
          />
          <figcaption className="transition-all duration-500 opacity-0 group-hover:opacity-100 flex flex-col justify-between bg-darkGray-500 absolute top-0 left-0 w-full h-full z-10 p-4">
            <div className="">
              <div className="flex justify-between items-center">
                <p className="text-xs">2021-2022</p>
                <a
                  href=""
                  className="hover:text-green-500 transition-all duration-300"
                >
                  <FiExternalLink size={20} />
                </a>
              </div>
            </div>
            <div className="">
              <h3 className="text-xl mb-2 text-white">Flytoget</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium praesentium doloremque laborum.
              </p>
            </div>
            <div className="">
              <ul className="flex gap-2 text-xs text-darkgraymuted-600">
                <li>React</li>
                <li>Redux</li>
                <li>Formik</li>
              </ul>
            </div>
          </figcaption>
        </figure>
        <figure className="group w-full relative mb-4 drop-shadow-md rounded-lg overflow-hidden">
          <img
            src={Flytoget}
            alt=""
            className="aspect-[3/2] group-hover:scale-110 transition-all duration-200"
          />
          <figcaption className="transition-all duration-500 opacity-0 group-hover:opacity-100 flex flex-col justify-between bg-darkGray-500 absolute top-0 left-0 w-full h-full z-10 p-4">
            <div className="">
              <div className="flex justify-between items-center">
                <p className="text-xs">2021-2022</p>
                <a
                  href=""
                  className="hover:text-green-500 transition-all duration-300"
                >
                  <FiExternalLink size={20} />
                </a>
              </div>
            </div>
            <div className="">
              <h3 className="text-xl mb-2 text-white">Flytoget</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium praesentium doloremque laborum.
              </p>
            </div>
            <div className="">
              <ul className="flex gap-2 text-xs text-darkgraymuted-600">
                <li>React</li>
                <li>Redux</li>
                <li>Formik</li>
              </ul>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default Works;
