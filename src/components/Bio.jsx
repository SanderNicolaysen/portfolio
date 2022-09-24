const Bio = () => {
  return (
    <div name="bio" className="flex items-center justify-center flex-col container mt-20 mb-20 mx-auto max-w-xl">
      <h2 className="text-2xl mb-4 sm:w-full dark:text-white text-left self-start border-b-2 dark:border-darkGray-500">
        Bio
      </h2>

      <ul className="flex flex-col items-center gap-4">
        <li className="w-full group">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="glowing-circle bg-green-100 group-hover:bg-yellow-400"></div>
              <span className="ml-2 mr-8">2021</span>
            </div>
            <span>Tietoevry Create Norway</span>
          </div>
        </li>
        <li className="w-full group">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="glowing-circle bg-green-100 group-hover:bg-yellow-400"></div>
              <span className="ml-2 mr-8 ">2019</span>
            </div>
            <span>Communicate</span>
          </div>
        </li>
        <li className="w-full group">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="glowing-circle bg-green-100 group-hover:bg-yellow-400"></div>
              <span className="ml-2 mr-8 ">2017</span>
            </div>
            <span>Bachelor's in Computer Science from the University of Agder</span>
          </div>
        </li>
        <li className="w-full group">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="glowing-circle bg-green-100 group-hover:bg-yellow-400"></div>
              <span className="ml-2 mr-8 ">1996</span>
            </div>
            <span>Born in Bergen, Norway</span>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Bio
