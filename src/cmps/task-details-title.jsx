import React from 'react'

import { CgCreditCard } from 'react-icons/cg'

export function TaskDetailsTitle({ title, board }) {

  return (
    <header className="task-details-title" >
      <span className=""><CgCreditCard /></span>
      <textarea className="main-title" name="" defaultValue={title} cols="30" rows="10"></textarea>
      <div className="sub-title">in list<button>{board.title}</button></div>
    </header>
  )
}
