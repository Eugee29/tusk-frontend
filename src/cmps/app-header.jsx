import { NavLink } from 'react-router-dom'

export const AppHeader = () => {
  return (
    <header>
      <h1>TUSK</h1>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/workspace">Workspace</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
      </nav>
    </header>
  )
}