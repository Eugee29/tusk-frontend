import { FiCheckSquare } from 'react-icons/fi'

import { TodoList } from './todo-list'

export const ChecklistPreview = ({ checklist }) => {
   return (
      <li className='checklist-preview'>
         <header>
            <FiCheckSquare className='check-square' />
            <div className='inner-container'>
               <h3>{checklist.title}</h3>
               <div className='header-btn-container'>
                  <button>Hide checked items</button>
                  <button>Delete</button>
               </div>
            </div>
         </header>
         <div className='progress-bar-container'>
            <h4 className='progress'>0%</h4>
            <div className='progress-bar'></div>
         </div>
         {checklist.todos?.length && <TodoList todos={checklist.todos} />}
         <div className='btn-container'>
            <button>Add an item</button>
         </div>
      </li>
   )
}