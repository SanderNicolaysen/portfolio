import { motion } from 'framer-motion';

const Card = ({ children }) => {
  return (
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
  );
};

export default Card;
