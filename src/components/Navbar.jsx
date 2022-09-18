import { Link } from 'react-scroll'
import Toggle from './ui/Toggle'

const Navbar = () => {
  return (
    <nav className="fixed z-10 w-full flex p-6 justify-between backdrop-blur">
      <div>
        <h1 className="font-bold text-xl text-gradient-blue">
          <Link
            className="hover:border-b-2 hover:border-blue-400 cursor-pointer"
            to="home"
            smooth={true}
            duration={500}
          >
            SN
          </Link>
        </h1>
      </div>
      <ul className="flex">
        <li>
          <Link className="hover:border-b-2 hover:border-blue-400" to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:border-b-2 hover:border-blue-400" to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link className="hover:border-b-2 hover:border-blue-400" to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link className="hover:border-b-2 hover:border-blue-400" to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <div className="ml-16">
          <Toggle />
        </div>
      </ul>
    </nav>
  )
}

export default Navbar
