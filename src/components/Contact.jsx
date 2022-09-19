import React from 'react'
import Letter from '../assets/undraw_letter_re_8m03.svg'

const Contact = () => {
  return (
    <div className="h-screen relative">
      <div name="contact" className="h-full flex items-center justify-center flex-col relative z-10 mx-4">
        <div className="w-full max-w-4xl">
          <div className="mb-8">
            <h1 className="text-center text-3xl font-extrabold text-gradient-blue self-end">Contact Me</h1>
            <p className="text-center text-gray-300 mt-2">
              Feel free to contact me if you want to work together. I will try to get back to you as soon as possible.{' '}
            </p>
          </div>
          <form className="p-5 sm:p-7 dark:bg-secondary grid sm:grid-cols-2 w-full gap-4 rounded-2xl">
            <div>
              <label className="block font-semibold mb-1" htmlFor="name">
                Name
              </label>
              <input
                className="block w-full p-3 rounded-lg outline-none focus:ring-2 border border-transparent bg-dark drop-shadow-xl transition-all duration-300"
                name="name"
                type="text"
                placeholder="Name"
                id="name"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold" htmlFor="email">
                Email
              </label>
              <input
                className="block w-full p-3 rounded-lg outline-none focus:ring-2 border border-transparent bg-dark drop-shadow-xl transition-all duration-300"
                name="email"
                type="email"
                placeholder="you@example.com"
                id="email"
              />
            </div>
            <div className="sm:col-span-2 w-full">
              <label className="block mb-1 font-semibold" htmlFor="description">
                Description
              </label>
              <textarea
                className="block w-full p-3 rounded-lg outline-none focus:ring-2 border border-transparent bg-dark drop-shadow-xl transition-all duration-300"
                name="description"
                placeholder="Leave a comment..."
                id="description"
                rows="5"
              ></textarea>
            </div>
            <button
              className="w-1/2 p-2 rounded-full outline-none bg-gradient-to-r transition-all from-blue-700 to-blue-900 drop-shadow-xl transform hover:scale-105 focus:scale-105 duration-300"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      {/* <div className="spacer home-background absolute top-0"></div> */}
    </div>
  )
}

export default Contact
