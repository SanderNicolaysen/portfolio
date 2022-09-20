import { FaArrowDown } from 'react-icons/fa'

const ArrowDownButton = () => {
  return (
    <div className="p-4 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center animate-bounce cursor-pointer dark:white">
      <FaArrowDown className="flex-shrink-0" size={20} />
    </div>
  )
}

export default ArrowDownButton
