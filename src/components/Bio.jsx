import { motion } from 'framer-motion';

const bioVariant = {
  hidden: {},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Bio = () => {
  return (
    <div
      name="bio"
      className="max-w-3xl flex justify-center flex-col container mb-20 px-6 mx-auto"
    >
      <h2 className="relative flex items-center font-semibold text-2xl mb-6 sm:w-full dark:text-white text-left self-start dark:border-darkGray-500 line-after-text">
        Bio
      </h2>

      <motion.ul
        whileInView="visible"
        viewport={{ once: true }}
        variants={bioVariant}
        initial="hidden"
        className="flex flex-col items-center gap-4"
      >
        <motion.li
          variants={itemVariant}
          className="w-full group p-2 hover:bg-purple-500 hover:bg-opacity-10 dark:hover:bg-darkGray-600 hover:rounded"
        >
          <div className="flex items-center">
            <div className="flex items-center">
              <span className="ml-2 mr-8">2021</span>
            </div>
            <span>Tietoevry Create Norway</span>
          </div>
        </motion.li>
        <motion.li
          variants={itemVariant}
          className="w-full group p-2 hover:bg-purple-500 hover:bg-opacity-10 dark:hover:bg-darkGray-600 hover:rounded"
        >
          <div className="flex items-center">
            <div className="flex items-center">
              <span className="ml-2 mr-8 ">2019</span>
            </div>
            <span>Communicate</span>
          </div>
        </motion.li>
        <motion.li
          variants={itemVariant}
          className="w-full group p-2 hover:bg-purple-500 hover:bg-opacity-10 dark:hover:bg-darkGray-600 hover:rounded"
        >
          <div className="flex items-center">
            <div className="flex items-center">
              <span className="ml-2 mr-8">2017</span>
            </div>
            <span>
              Bachelor's in Computer Science from the University of Agder
            </span>
          </div>
        </motion.li>
        <motion.li
          variants={itemVariant}
          className="w-full group p-2 hover:bg-purple-500 hover:bg-opacity-10 dark:hover:bg-darkGray-600 hover:rounded"
        >
          <div className="flex items-center">
            <div className="flex items-center">
              <span className="ml-2 mr-8 ">1996</span>
            </div>
            <span>Born in Bergen, Norway</span>
          </div>
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default Bio;
