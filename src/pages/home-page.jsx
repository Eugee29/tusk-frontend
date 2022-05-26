import { Link } from 'react-router-dom'

import hero from '../assets/imgs/hero.png'

export const HomePage = () => {

  return (
    <main className='home-page' >
      <div className='layout home-page-layout'>
        <div className='hero'>
          <section className='hero-message'>
            <h1>Tusk helps teams move work forward.</h1>
            <p>
              Collaborate, manage projects, and reach new productivity peaks.
              {/* <br /> */}
              &nbsp;
              From high rises to the home office, the way your team works is unique—accomplish it all with Tusk.
            </p>
            <form>
              <input type='text' placeholder='Email' />
              <button>Sign up-it's free!</button>
            </form>
            <small>or <Link to="/workspace">Continue as Guest</Link></small>
          </section>
          <div className='hero-img'>
            <img src={hero} alt='hero.png' />
          </div>
        </div>
      </div>
    </main>
  )
}