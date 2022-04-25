import { sun } from '../assets'

const Navbar = () => {
  return (
    <nav className="flex justify-end mt-10 gap-20">
      <div className="flex text-xl font-bold gap-10">
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
      <div className="mr-10 group cursor-pointer">
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
