import { sun, menu } from '../assets'
import { useAppContext } from '../App'

const Navbar = () => {
  const { showMenu, setShowMenu } = useAppContext()
  return (
    <nav className="flex justify-between lg:justify-end mt-10 gap-20 px-[30px] lg:px-0">
      {/* for mobile */}
      <div className="lg:hidden font-bold text-5xl">Xae</div>
      <div
        onClick={() => setShowMenu(!showMenu)}
        className="lg:hidden p-2 cursor-pointer"
      >
        <img src={menu} alt="menu" />
      </div>
      {/* for screen */}
      <div className="hidden lg:flex text-xl font-bold gap-10">
        <a
          className="decoration-transparent hover:decoration-white underline underline-offset-8 transition-colors duration-300 ease-out decoration-4"
          href="#"
        >
          Home
        </a>
        <a
          className="decoration-transparent hover:decoration-white underline underline-offset-8 transition-colors duration-300 ease-out decoration-4"
          href="#"
        >
          About
        </a>
        <a
          className="decoration-transparent hover:decoration-white underline underline-offset-8 transition-colors duration-300 ease-out decoration-4"
          href="#"
        >
          Gallery
        </a>
        <a
          className="decoration-transparent hover:decoration-white underline underline-offset-8 transition-colors duration-300 ease-out decoration-4"
          href="#"
        >
          Contact
        </a>
      </div>
      <div className="hidden lg:block mr-10 group cursor-pointer">
        <img
          className="transition-transform group-hover:scale-110"
          src={sun}
          alt=""
        />
      </div>
    </nav>
  )
}
export default Navbar
