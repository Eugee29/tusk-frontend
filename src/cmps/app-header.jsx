import { NavLink, useLocation } from 'react-router-dom'
import logo from '../assets/imgs/logo-horizontal-white.png'

export const AppHeader = () => {

  const { pathname } = useLocation()


  return (
    <header className={`app-header ${pathname === '/' ? 'home' : 'standard'}`} >
      <img src={logo} alt="bla" className='header-logo' />
      <nav className='header-nav'>
        <NavLink className="navlink" to="/">Home</NavLink>
        <NavLink className="navlink" to="/workspace">Workspace</NavLink>
        <NavLink className="navlink" to="/login">Login</NavLink>
        <NavLink className="navlink" to="/signup">Signup</NavLink>
      </nav>
    </header>
  )
}