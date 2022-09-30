import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import React from 'react';

const imageVariant = {
  // hover: { scale: 1.1 },
};

const overlayVariant = {
  rest: { opacity: 0 },
  hover: {
    opacity: 100,
    transition: { type: 'linear', duration: 1, ease: 'easeIn' },
  },
};

const Card = ({
  image,
  alt,
  year,
  githubLink,
  websiteLink,
  header,
  body,
  tools,
  variants,
}) => {
  return (
    <motion.figure
      className="group w-full relative mb-4 border border-gray-100 dark:border-zinc-700 rounded-lg"
      variants={variants}
    >
      <img src={image} alt={alt} className="h-full w-full rounded-lg" />
      <figcaption className="rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between bg-darkGray-500 absolute top-0 left-0 w-full h-full z-10 p-4">
        <div className="flex justify-between items-center">
          <p className="text-xs text-darkgraymuted-500">{year}</p>
          <div className="flex gap-3 text-darkgraymuted-500">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                className="hover:text-purple-500 transition-all duration-300"
              >
                <FaGithub size={20} />
              </a>
            )}
            {websiteLink && (
              <a
                href={websiteLink}
                target="_blank"
                className="hover:text-purple-500 transition-all duration-300"
              >
                <FiExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
        <div className="">
          <h3 className="text-xl mb-2 text-white">{header}</h3>
          <p className="text-darkgraymuted-500">{body}</p>
        </div>
        <div className="">
          <ul className="flex gap-2 text-xs text-darkgraymuted-600">
            {tools.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </figcaption>
    </motion.figure>
  );
};
export default Card;
