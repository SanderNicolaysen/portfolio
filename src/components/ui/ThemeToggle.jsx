import { FaMoon } from 'react-icons/fa'
import { BsFillSunFill } from 'react-icons/bs'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-sm font-medium dark:text-gray-300">
        {<BsFillSunFill className="animate-spin-slow" color="#FBBE24" />}
      </span>
      <label htmlFor="default-toggle-size" className="inline-flex relative items-center cursor-pointer">
        <input
          type="checkbox"
          checked={theme === 'light' ? false : true}
          onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          value=""
          id="default-toggle-size"
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-white peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-darkGray-500 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-500 after:hover:scale-90"></div>
      </label>
      <span className="text-sm font-medium">{<FaMoon color="#BEDBFE" />}</span>
    </div>
  )
}

export default Toggle
