import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen text-darkGray dark:text-gray-300 font-rubik dark:bg-dark">
      <Navbar />
      <div className="">{children}</div>
    </div>
  )
}

export default Layout
