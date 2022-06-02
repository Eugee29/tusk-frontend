import { useLocation, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { onLogout } from '../store/user/user.action.js'

import logoLight from '../assets/imgs/logo-horizontal-white.png'
import logoDark from '../assets/imgs/logo-horizontal-dark.png'

import { FiChevronDown } from 'react-icons/fi'

export const AppHeader = () => {

   const { user } = useSelector(({ userModule }) => userModule)
   const { pathname } = useLocation()
   const dispatch = useDispatch()

   if (pathname === '/login' || pathname === '/signup') return

   const isHome = pathname === '/'
   const isBoard = (pathname.includes('/board'))
   const initials = (user) => ([...user.fullname])

   const getClassName = () => {
      if (isHome) return 'home'
      if (isBoard) return 'board'
      else return 'general'
   }

   const logout = async () => {
      dispatch(onLogout())
   }

   return (
      <header className={`app-header ${getClassName()}`} >
         <nav className='link-container'>
            <div className='logo-container'>
               <Link to='/'>
                  {
                     isHome ?
                        <img src={logoDark} alt="tusk-logo" className='logo' />
                        :
                        <img src={logoLight} alt="tusk-logo" className='logo smaller' />
                  }
               </Link>
            </div>
            {!isHome && <Link className='workspace-link' to='/workspace'>Workspace <FiChevronDown/></Link>}
            {!isHome && <div className='workspace-link' >Recent <FiChevronDown/></div>}
            {!isHome && <div className='workspace-link' >Starred <FiChevronDown/></div>}
            {!isHome && <div className='workspace-create' >Create</div>}

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
            <div className='user-img-container' onClick={logout}>
               {user &&
                  (user?.imgURL
                     ? <span className="user-img" style={{ backgroundImage: `url('${user.imgURL}')` }}></span>
                     : <span className="user-initial" >{`${initials(user)[0]}${initials(user)[1]}`}</span>)
               }
               {!user && <span className="user-initial" ></span>}
            </div>
         }
      </header >
   )
}