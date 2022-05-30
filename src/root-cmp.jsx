import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './assets/css/main.scss'

import { AppHeader } from './cmps/app-header'
import { Modal } from './cmps/modal'

import { HomePage } from './pages/home-page'
import { LoginSignupPage } from './pages/login-signup-page'
import { Workspace } from './pages/workspace'
import { BoardDetails } from './pages/board-details'
import { TaskDetails } from './pages/task-details'

export function RootCmp() {
  return (
    <div >
      <AppHeader />
      <Modal />
      <main className='main-layout'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<LoginSignupPage type='login' />} />
          <Route path='/signup' element={<LoginSignupPage type='signup' />} />
          <Route path='/workspace' element={<Workspace />} />
          <Route path='/board/:boardId/*' element={<BoardDetails />} >
            <Route path=':groupId/:taskId' element={<TaskDetails />} />
          </Route>
        </Routes>
      </main>
    </div>
  )
}
