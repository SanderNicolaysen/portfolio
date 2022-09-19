import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen dark:text-gray-300 font-inter dark:bg-dark">
      <Navbar />
      <div className="">{children}</div>
    </div>
  )
}

export default Layout
