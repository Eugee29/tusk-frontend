import { UserLogin } from './user-login'
import { UserSignup } from './user-signup'
import { Link, useNavigate } from 'react-router-dom'
export const LoginSignup = ({ type }) => {

  const navigate = useNavigate()

  var cmp

  switch (type) {
    case 'login':
      cmp = <UserLogin />
      break
    case 'signup':
      cmp = <UserSignup />
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
        <Link to={type === 'login' ? '/signup' : '/login'}>{type === 'login' ? 'Log in' : 'Sign up'}</Link>
      </footer>
    </div >
  )
}