import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

const bioVariant = {
  hidden: {},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0,
    },
  },
}

const itemVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

const Bio = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <div name="bio" className="max-w-2xl flex justify-center flex-col container mb-20 px-4 sm:px-0 mx-auto">
      <h2 className="font-semibold text-2xl mb-4 sm:w-full dark:text-white text-left self-start border-b-2 dark:border-darkGray-500">
        Bio
      </h2>

      <motion.ul
        ref={ref}
        variants={bioVariant}
        initial="hidden"
        animate={controls}
        className="flex flex-col items-center gap-4"
      >
        <motion.li variants={itemVariant} className="w-full group">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="glowing-circle bg-green-100 group-hover:bg-yellow-400"></div>
              <span className="ml-2 mr-8">2021</span>
            </div>
            <span>Tietoevry Create Norway</span>
          </div>
        </motion.li>
        <motion.li variants={itemVariant} className="w-full group">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="glowing-circle bg-green-100 group-hover:bg-yellow-400"></div>
              <span className="ml-2 mr-8 ">2019</span>
            </div>
            <span>Communicate</span>
          </div>
        </motion.li>
        <motion.li variants={itemVariant} className="w-full group">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="glowing-circle bg-green-100 group-hover:bg-yellow-400"></div>
              <span className="ml-2 mr-8 ">2017</span>
            </div>
            <span>Bachelor's in Computer Science from the University of Agder</span>
          </div>
        </motion.li>
        <motion.li variants={itemVariant} className="w-full group">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="glowing-circle bg-green-100 group-hover:bg-yellow-400"></div>
              <span className="ml-2 mr-8 ">1996</span>
            </div>
            <span>Born in Bergen, Norway</span>
          </div>
        </motion.li>
      </motion.ul>
    </div>
  )
}

export default Bio
