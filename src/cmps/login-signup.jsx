import { UserLogin } from './user-login'
import { UserSignup } from './user-signup'

export const LoginSignup = ({ type }) => {
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
        <button>Continue as Guest</button>
      </div>
    </div>
  )
}