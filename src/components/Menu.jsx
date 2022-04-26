import { useAppContext } from '../App'
import { useRef } from 'react'

const menuLists = [
  { destination: '#', title: 'Home' },
  { destination: '#', title: 'About' },
  { destination: '#', title: 'Gallery' },
  { destination: '#', title: 'Contact' },
]

const Menu = () => {
  const { setShowMenu } = useAppContext()
  const outsideRef = useRef()

  const handleOutsideClick = (e) => {
    if (!(e.target === outsideRef.current)) return
    setShowMenu(false)
  }

  const handleCloseMenu = () => {
    setShowMenu(false)
  }

  return (
    <div
      ref={outsideRef}
      onClick={handleOutsideClick}
      className="h-screen w-screen bg-black/50 absolute top-0 left-0 z-10 flex lg:hidden justify-center items-center"
    >
      <div className="flex flex-col items-center w-1/2 h-1/2">
        {menuLists.map((list) => (
          <a
            onClick={handleCloseMenu}
            href={list.destination}
            className="text-lg text-center py-4 bg-slate-500 transition-all hover:bg-slate-600 hover:scale-105 w-full"
          >
            {list.title}
          </a>
        ))}
      </div>
    </div>
  )
}
export default Menu
