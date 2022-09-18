import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div className="bg-dark min-h-screen text-gray-300">
      <Navbar />
      <div className="">{children}</div>
    </div>
  )
}

export default Layout
