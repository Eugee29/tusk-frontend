export const UserSignup = () => {
  return (
    <form className='user-signup'>
      <h1>Sign up for your account</h1>
      <input type="text" placeholder='Enter full name' />
      <input type="email" placeholder='Enter email' />
      <input type="password" placeholder='Enter password' />
      <button className='signup-btn'>Sign up</button>
    </form>
  )
}