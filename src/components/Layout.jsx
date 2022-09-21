import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen text-darkGray-500 dark:text-gray-300 font-rubik dark:bg-dark">
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
