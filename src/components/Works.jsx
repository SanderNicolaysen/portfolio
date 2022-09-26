import Card from './ui/Card'
import Flytoget from '../assets/flytoget.png'
import Leo from '../assets/leo.png'

const Works = () => {
  return (
    <section name="works" className="max-w-2xl container mx-auto px-4 sm:px-0">
      <h2 className="font-semibold text-xl dark:text-white mb-4 border-b-2 dark:border-darkGray-500">Works</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        <li className="text-center mb-4">
          <a href="#">
            <img src={Flytoget} alt="" className="rounded-xl border border-gray-800" />
            <div className="mt-3">
              <h3 className="font-medium text-white">Flytoget</h3>
              <p>React, Javascript, HTML, CSS, Bootstrap</p>
            </div>
          </a>
        </li>
        <li className="text-center mb-4">
          <a href="#">
            <img src={Leo} alt="" className="rounded-xl border border-gray-800 h-96 md:h-48" />
            <div className="mt-3">
              <h3 className="font-medium text-white">Leo</h3>
              <p>Vue, Node, Express, MongoDB</p>
            </div>
          </a>
        </li>
        <li className="text-center mb-4">
          <a href="#">
            <img src={Flytoget} alt="" className="rounded-xl border border-gray-800" />
            <div className="mt-3">
              <h3 className="font-medium text-white">Flytoget</h3>
              <p>React, Javascript, HTML, CSS, Bootstrap, Redux, Formik</p>
            </div>
          </a>
        </li>
        <li className="text-center mb-4">
          <a href="#">
            <img src={Flytoget} alt="" className="rounded-xl border border-gray-800" />
            <div className="mt-3">
              <h3 className="font-medium text-white">Flytoget</h3>
              <p>React, Javascript, HTML, CSS, Bootstrap, Redux, Formik</p>
            </div>
          </a>
        </li>
      </ul>
    </section>
  )
}

export default Works
