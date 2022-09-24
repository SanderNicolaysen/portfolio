import { motion } from 'framer-motion'

const Card = () => {
  return <motion.div whileHover={{ scale: 1.1 }} className="w-full h-48 bg-darkGray-500 rounded"></motion.div>
}

export default Card
