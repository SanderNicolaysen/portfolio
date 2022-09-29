import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import React from 'react';

const Card = React.forwardRef(
  ({ image, alt, year, githubLink, websiteLink, header, body, tools }, ref) => {
    return (
      <figure
        ref={ref}
        className="group w-full relative mb-4 drop-shadow-md rounded-lg overflow-hidden"
      >
        <img
          src={image}
          alt={alt}
          className="aspect-[3/2] group-hover:scale-110 transition-all duration-200"
        />
        <figcaption className="transition-all duration-500 opacity-0 group-hover:opacity-100 flex flex-col justify-between bg-darkGray-500 absolute top-0 left-0 w-full h-full z-10 p-4">
          <div className="">
            <div className="flex justify-between items-center">
              <p className="text-xs text-darkgraymuted-500">{year}</p>
              <div className="flex gap-3 text-darkgraymuted-500">
                {githubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    className="hover:text-green-500 transition-all duration-300"
                  >
                    <FaGithub size={20} />
                  </a>
                )}
                {websiteLink && (
                  <a
                    href={websiteLink}
                    target="_blank"
                    className="hover:text-green-500 transition-all duration-300"
                  >
                    <FiExternalLink size={20} />
                  </a>
                )}
              </div>
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
      </figure>
    );
  }
);

export default motion(Card);
