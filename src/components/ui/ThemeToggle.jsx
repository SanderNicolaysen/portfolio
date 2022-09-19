import { FaMoon } from 'react-icons/fa'
import { BsFillSunFill } from 'react-icons/bs'
import { ThemeContext } from '../context/ThemeContext'
import { useContext } from 'react'

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-sm font-medium text-gray-900 dark:text-gray-300">{<BsFillSunFill color="#FBBE24" />}</span>
      <label htmlFor="default-toggle-size" className="inline-flex relative items-center cursor-pointer">
        <input
          type="checkbox"
          checked={theme === 'light' ? false : true}
          onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          value=""
          id="default-toggle-size"
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none dark:peer-focus:ring-orange-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-orange-600 after:hover:scale-90"></div>
      </label>
      <span className="text-sm font-medium text-gray-900 dark:text-gray-300">{<FaMoon color="#BEDBFE" />}</span>
    </div>
  )
}

export default Toggle
