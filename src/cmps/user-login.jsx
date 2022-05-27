export const UserLogin = () => {
  return (
    <form className='user-login'>
      <h1>Log in to Tusk</h1>
      <input type="email" placeholder='Enter email' />
      <input type="password" placeholder='Enter password' />
      <button className='login-btn'>Log in</button>
    </form>
  )
}