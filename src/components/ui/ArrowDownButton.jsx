import { FaArrowDown } from 'react-icons/fa'

const ArrowDownButton = () => {
  return (
    <div className="py-1 px-2 text-darkGray bg-green-500 hover:text-green-500 hover:bg-darkGray transition-all duration-300 rounded flex items-center justify-center animate-bounce cursor-pointer">
      {/* <FaArrowDown className="flex-shrink-0" size={20} /> */}
      <p className="uppercase flex items-center justify-center font-semibold text-sm">
        Works
        <FaArrowDown className="inline ml-1" size={13} />
      </p>
    </div>
  )
}

export default ArrowDownButton
