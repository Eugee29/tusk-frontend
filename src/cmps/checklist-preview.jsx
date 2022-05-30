import { FiCheckSquare } from 'react-icons/fi'
import { ProgressBar } from 'react-bootstrap'

import { TodoList } from './todo-list'
import { useRef, useState } from 'react'
import { boardService } from '../services/board.service'

export const ChecklistPreview = ({ checklist, updateChecklist, setModalPos }) => {

  const [hideChecked, setHideChecked] = useState(false)
  const [todoTxt, setTodoTxt] = useState('')
  const [isAdding, setIsAdding] = useState(false)

  const numOfDone = checklist.todos.reduce((count, todo) => todo.isDone ? count + 1 : count, 0)
  const progress = parseInt((numOfDone / checklist.todos.length) * 100)

  const TodosToShow = hideChecked ? checklist.todos.filter(todo => !todo.isDone) : checklist.todos
  const numOfChecked = checklist.todos.length - TodosToShow.length
  checklist = { ...checklist, todos: TodosToShow }

  const calcHeight = (value) => {
    const numberOfLineBreaks = (value.match(/\n/g) || []).length
    // min-height + lines x line-height + padding + border
    const newHeight = 56 + numberOfLineBreaks * 20
    return newHeight
  }

  const handleChange = (e) => {
    setTodoTxt(e.target.value)
  }

  const onAddTodo = (e) => {
    e.preventDefault()
    const todoToAdd = boardService.getEmptyTodo()
    todoToAdd.title = todoTxt
    const newChecklist = { ...checklist, todos: [...checklist.todos, todoToAdd] }
    updateChecklist(newChecklist)
    setTodoTxt('')
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
      {!!checklist.todos?.length && <TodoList checklist={checklist} updateChecklist={updateChecklist} setModalPos={setModalPos} />}
      <div className='add-container'>
        {
          !isAdding ?
            <button className='open-add' onClick={() => setIsAdding(true)}>Add an item</button>
            :
            <form onSubmit={onAddTodo}>
              <textarea
                className='todo-content'
                placeholder='Add an item'
                style={{ height: calcHeight(todoTxt) }}
                value={todoTxt}
                onChange={handleChange}
                onBlur={() => setIsAdding(false)}
                autoFocus
              >
              </textarea>
              <div className='add-controls'>
                <button className='add-btn' onMouseDown={(e) => e.preventDefault()}>Add</button>
                <button className='cancel-btn' type='button'>Cancel</button>
              </div>
            </form>
        }
      </div>

    </li>
  )
}