import { motion } from 'framer-motion';

function ArrowDownButton({ children }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
    >
      {/* <FaArrowDown className="flex-shrink-0" size={20} /> */}
      <p className="uppercase flex items-center justify-center font-medium text-xs">
        {children}
        {/* <FaArrowRight className="inline ml-1 animate-bounce" size={14} /> */}
        <span className="ml-1">{'>'}</span>
      </p>
    </motion.div>
  );
}

export default ArrowDownButton;
