import { FiCheckSquare } from 'react-icons/fi'
import { ProgressBar } from 'react-bootstrap'

import { TodoList } from './todo-list'
import { useRef, useState } from 'react'

export const ChecklistPreview = ({ checklist, updateChecklist }) => {

  const [hideChecked, setHideChecked] = useState(false)
  const [todoTxt, settTodoTxt] = useState('')

  const numOfDone = checklist.todos.reduce((count, todo) => todo.isDone ? count + 1 : count, 0)
  const progress = parseInt((numOfDone / checklist.todos.length) * 100)

  const TodosToShow = hideChecked ? checklist.todos.filter(todo => !todo.isDone) : checklist.todos
  const numOfChecked = checklist.todos.length - TodosToShow.length
  checklist = { ...checklist, todos: TodosToShow }

  const handleChange = (e) => {
    settTodoTxt(e.target.value)
  }

  const calcHeight = (value) => {
    const numberOfLineBreaks = (value.match(/\n/g) || []).length
    // min-height + lines x line-height + padding + border
    const newHeight = 56 + numberOfLineBreaks * 20
    return newHeight
  }

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
              {progress != 0 && <button onClick={() => setHideChecked(!hideChecked)}>{hideChecked ? `Show checked items (${numOfChecked})` : 'Hide checked items'}</button>}
              <button>Delete</button>
            </div>
          </div>
        </div>
      </header>

      <div className='progress-bar-container'>
        <h4 className='progress'>{progress}%</h4>
        <ProgressBar now={progress} variant={progress === 100 ? 'green' : 'blue'} className='progress-bar'></ProgressBar>
      </div>
      {checklist.todos?.length && <TodoList checklist={checklist} updateChecklist={updateChecklist} />}
      <div className='add-container'>
        {/* <button className='open-add'>Add an item</button> */}
        <textarea
          className='todo-content'
          placeholder='Add an item'
          style={{ height: calcHeight(todoTxt) }}
          value={todoTxt}
          onChange={handleChange}
        >
        </textarea>
        <div className='add-controls'>
          <button className='add-btn'>Add</button>
          <button className='cancel-btn'>Cancel</button>
        </div>
      </div>

    </li>
  )
}