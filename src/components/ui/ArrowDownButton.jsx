import { FaArrowDown } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ArrowDownButton = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="py-2 px-4 text-darkGray-500 bg-green-500 rounded flex items-center justify-center cursor-pointer shadow-lg shadow-green-500/50"
    >
      {/* <FaArrowDown className="flex-shrink-0" size={20} /> */}
      <p className="uppercase flex items-center justify-center font-semibold text-sm">
        Works
        <FaArrowDown className="inline ml-1 animate-bounce" size={14} />
      </p>
    </motion.div>
  );
};

export default ArrowDownButton;
