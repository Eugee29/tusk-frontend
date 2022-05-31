import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import { LoginForm } from './login-form'
import { SignupForm } from './signup-form'

import { onLogin, onLogout, onSignup } from '../store/user/user.action.js'

export const LoginSignup = ({ type }) => {

   const dispatch = useDispatch()
   const navigate = useNavigate()

   const signup = async (credentials) => {
      await dispatch(onSignup(credentials))
      navigate('/workspace')
      // console.log('LoginSignup', credentials);
   }

   const loginn = async (credentials) => {
      await dispatch(onLogin(credentials))
      navigate('/workspace')

   }

   var cmp

   switch (type) {
      case 'login':
         cmp = <LoginForm onLogin={loginn}/>
         break
      case 'signup':
         cmp = <SignupForm onSignup={signup} />
         break
   }

   return (
      <div className='login-signup'>
         {cmp}
         <div className='login-method'>
            <div>OR</div>
            <button onClick={() => navigate('/workspace')}>Continue as Guest</button>
         </div>
         <hr />
         <footer>
            <Link to='/'>Back home</Link>
            <Link to={type === 'login' ? '/signup' : '/login'}>{type === 'login' ? 'Sign up' : 'Log in'}</Link>
         </footer>
      </div >
   )
}