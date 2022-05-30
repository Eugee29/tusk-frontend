import { LoginForm } from './login-form'
import { SignupForm } from './signup-form'
import { Link, useNavigate } from 'react-router-dom'
export const LoginSignup = ({ type }) => {

  const navigate = useNavigate()

  var cmp

  switch (type) {
    case 'login':
      cmp = <LoginForm />
      break
    case 'signup':
      cmp = <SignupForm />
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