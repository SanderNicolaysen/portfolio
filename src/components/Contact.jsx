import React from 'react'
import { motion } from 'framer-motion'

const workVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.4,
    },
  },
}

const itemVariant = {
  hidden: { opacity: 0, x: -25 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
}

const Contact = () => {
  return (
    <div name="contact" className="max-w-3xl flex justify-center flex-col container mb-20 px-6 mx-auto">
      <div className="w-full max-w-4xl">
        <div className="mb-8">
          <h2 className="relative flex items-center font-semibold text-2xl mb-2 sm:w-full dark:text-white text-left self-start dark:border-darkGray-500 line-after-text">
            Contact Me
          </h2>
          <p className="">Thanks for taking the time to reach out. Have a question or want to work together?</p>
        </div>
        <motion.form
          whileInView="visible"
          viewport={{ once: true }}
          variants={workVariant}
          initial="hidden"
          className="flex flex-col gap-2"
          method="POST"
          action="https://getform.io/f/13b06bcb-246d-4b9d-8378-78e561e5c066"
        >
          <motion.input
            variants={itemVariant}
            className="input-style"
            name="name"
            type="text"
            placeholder="Name"
            id="name"
            required
          />
          <motion.input
            variants={itemVariant}
            className="input-style"
            name="email"
            type="email"
            placeholder="Email"
            id="email"
            required
          />
          <motion.textarea
            variants={itemVariant}
            className="input-style"
            name="message"
            placeholder="Message"
            id="message"
            rows="5"
            required
          ></motion.textarea>
          <motion.div variants={itemVariant} className="flex justify-end">
            <motion.button
              initial={{ background: '#6d59a7' }}
              whileHover={{ width: 200, background: '#634f9d' }}
              className="rounded whitespace-nowrap px-3 sm:px-4 py-2 outline-none focus:ring-purple-500 border border-transparent bg-purple-500 text-white text-sm sm:text-base"
              type="submit"
            >
              Send Message !
            </motion.button>
          </motion.div>
        </motion.form>
      </div>
    </div>
  )
}

export default Contact
