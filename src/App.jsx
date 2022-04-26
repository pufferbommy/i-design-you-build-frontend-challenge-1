import { useState, createContext, useContext, useEffect } from 'react'
import Aside from './components/Aside'
import Menu from './components/Menu'
import Home from './pages/Home'

const AppContext = createContext()
export const useAppContext = () => useContext(AppContext)

const App = () => {
  const [showMenu, setShowMenu] = useState(false)

  const checkIfShowMenuWhenOnScreenSize = (e) => {
    if (e.target.innerWidth >= 1024) {
      setShowMenu(false)
    }
  }

  useEffect(() => {
    if (showMenu) {
      window.addEventListener('resize', checkIfShowMenuWhenOnScreenSize, true)
    } else {
      window.removeEventListener('resize', checkIfShowMenuWhenOnScreenSize, false)
    }
  }, [showMenu])

  return (
    <AppContext.Provider value={{ showMenu, setShowMenu }}>
      <div className="h-screen flex">
        <Aside />
        <Home />
      </div>
      {showMenu && <Menu />}
    </AppContext.Provider>
  )
}
export default App
