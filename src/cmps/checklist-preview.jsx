import { FiCheckSquare } from 'react-icons/fi'
import { ProgressBar } from 'react-bootstrap'

import { TodoList } from './todo-list'

export const ChecklistPreview = ({ checklist, onUpdateChecklist }) => {

  const numOfDone = checklist.todos.reduce((count, todo) => todo.isDone ? count + 1 : count, 0)
  const progress = (numOfDone / checklist.todos.length) * 100

  return (
    <li className='checklist-preview'>
      <header>
        <div className='icon-container'>
          <FiCheckSquare className='icon' />
        </div>
        <div className='inner-container'>
          <h3 className='title'>{checklist.title}</h3>
          <div className='header-btn-container'>
            <div className='inner-btn-container'>
              {progress != 0 && <button>Hide checked items</button>}
              <button>Delete</button>
            </div>
          </div>
        </div>
      </header>

      <div className='progress-bar-container'>
        <h4 className='progress'>{progress}%</h4>
        <ProgressBar now={progress} variant={progress === 100 ? 'green' : 'blue'} className='progress-bar'></ProgressBar>
      </div>
      {checklist.todos?.length && <TodoList checklist={checklist} onUpdateChecklist={onUpdateChecklist} />}
      <div className='btn-container'>
        <button>Add an item</button>
      </div>

    </li>
  )
}