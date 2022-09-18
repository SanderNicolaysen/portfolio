const LinkButton = ({ icon, link }) => {
  return (
    <a
      className="text-2xl border border-gray-600 p-3 rounded-full hover:bg-blue-900 hover:text-white ease-in duration-300 "
      href={link}
      target="_blank"
    >
      {icon}
    </a>
  )
}

export default LinkButton
