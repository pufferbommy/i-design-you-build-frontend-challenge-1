import { sun } from '../assets'

const Navbar = () => {
  return (
    <nav className="flex justify-end mt-10 gap-20">
      <div className="flex text-xl font-bold gap-10">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Gallery</a>
        <a href="#">Contact</a>
      </div>
      <div className="mr-10 cursor-pointer">
        <img src={sun} alt="" />
      </div>
    </nav>
  )
}
export default Navbar
