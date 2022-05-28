import { useLocation, Link } from 'react-router-dom'
import logoLight from '../assets/imgs/logo-horizontal-white.png'
import logoDark from '../assets/imgs/logo-horizontal-dark.png'

export const AppHeader = () => {

  const { pathname } = useLocation()

  if (pathname === '/login' || pathname === '/signup') return

  const isHome = pathname === '/'
  const isBoard = (pathname.includes('/board'))

  const getClassname = () => {
      if (isHome) return 'home'
      if (isBoard) return 'board'
      else return 'general'
  }

  return (
    <header className={`app-header ${getClassname()}`} >
      <nav className='link-container'>
        <div className='logo-container'>
          <Link to='/'>
            {
              isHome ?
                <img src={logoDark} alt="tusk-logo" className='logo' />
                :
                <img src={logoLight} alt="tusk-logo" className='logo' />
            }
          </Link>
        </div>
        {!isHome && <Link className='workspace-link' to='/workspace'>Workspace</Link>}
      </nav>
      {
        isHome &&
        <nav className='login-signup-container'>
          <Link to='/login' className='login'>Log in</Link>
          <Link to='/signup' className='signup'>Sign up</Link>
        </nav>
      }
      {
        !isHome &&
        <div className='user-img-container'>
        </div>
      }
    </header >
  )
}