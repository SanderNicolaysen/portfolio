import { FaMoon } from 'react-icons/fa';
import { BsFillSunFill } from 'react-icons/bs';
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../../context/ThemeContext';

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
};

function Toggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="flex items-center justify-between gap-2">
      <span className="text-sm font-medium dark:text-gray-300">
        <BsFillSunFill
          className="animate-spin-slow"
          color="#FBBE24"
          size={20}
        />
      </span>
      <div
        className={`w-11 h-7 bg-white rounded-full p-1 items-center flex cursor-pointer ${
          theme === 'light' ? 'justify-start' : 'justify-end'
        }`}
        role="button"
        tabIndex={0}
        onKeyPress={toggleTheme}
        onClick={toggleTheme}
      >
        <motion.div
          className="w-5 h-5 bg-darkGray-500 rounded-full"
          whileHover={{ scale: 0.8 }}
          layout
          transition={spring}
        />
      </div>
      <span className="text-sm font-medium">
        <FaMoon color="#BEDBFE" size={20} />
      </span>
    </div>
  );
}

export default Toggle;
