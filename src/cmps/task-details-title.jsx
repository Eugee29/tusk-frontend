import React from "react"

import card from '../assets/imgs/card.svg'
import { RiPencilLine } from 'react-icons/ri'

export function TaskDetailsTitle({ title }) {
   console.log('TaskDetailsTitle', title);

   return (
      <header className="task-title" >
         <span class="task-title-icon"><img src={card} alt="" /></span>
         {/* <span class="task-title-icon"><RiPencilLine/></span> */}
         <textarea className="main-title" name="" defaultValue={title} cols="30" rows="10"></textarea>
         <div className="sub-title">in list<button>Group Title</button></div>

      </header>
   )
}