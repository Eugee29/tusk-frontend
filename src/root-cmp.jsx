import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './assets/css/main.scss'

import { AppHeader } from './cmps/app-header'

import { HomePage } from './pages/home-page'
import { Login } from './pages/login'
import { Signup } from './pages/signup'
import { Workspace } from './pages/workspace'

export function RootCmp() {
  return (
    <div>
      <AppHeader />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/workspace' element={<Workspace />} />
        </Routes>
      </main>
    </div>
  )
}
