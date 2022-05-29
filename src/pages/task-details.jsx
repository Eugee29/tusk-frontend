
import React, { useEffect, useState, useRef } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { VscClose } from 'react-icons/vsc'

import { loadTask } from '../store/board/board.action.js'
import { TaskDetailsCover } from '../cmps/task-details-cover.jsx'
import { TaskDetailsTitle } from '../cmps/task-details-title.jsx'
import { TaskDetailsInfo } from '../cmps/task-details-info.jsx'
import { TaskDetailsDescription } from '../cmps/task-details-description.jsx'
import { TaskDetailsAttachments } from '../cmps/task-details-attachments.jsx'
import { TaskDetailsActivity } from '../cmps/task-details-activity.jsx'
import { TaskDetailsSideTask } from '../cmps/task-details-side-task.jsx'
import { ChecklistList } from '../cmps/checklist-list.jsx'
import { boardService } from '../services/board.service.js'
import { useSelector } from 'react-redux'

import { updateBoard } from '../store/board/board.action.js'

const _TaskDetails = () => {

  const [task, setTask] = useState(null)
  const [isCloseEdit, setIsCloseEdit] = useState(true)
  const params = useParams()
  const board = useSelector(({ boardModule }) => boardModule.board)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { boardId } = useParams()
  const { groupId } = useParams()
  const { taskId } = useParams()


  const updateTask = async (taskToUpdate) => {
    const group = board.groups.find(group => group.id === params.groupId)
    const { tasks } = group
    const updatedTasks = tasks.map(task => task.id === taskToUpdate.id ? taskToUpdate : task)
    const updatedGroup = { ...group, tasks: updatedTasks }
    const updatedGroups = board.groups.map(group => group.id === updatedGroup.id ? updatedGroup : group)
    const updatedBoard = { ...board, groups: updatedGroups }
    setTask(taskToUpdate)
    await dispatch(updateBoard(updatedBoard))
    // loadTaskAsync()
  }

  useEffect(() => {
    if (!task) {
      loadTaskAsync()
    }
  }, [isCloseEdit])

  useEffect(() => {
    loadTaskAsync()
  }, [])

  const loadTaskAsync = async () => {
    const taskFromService = await dispatch(loadTask({ boardId, groupId, taskId }))
    console.log(taskFromService)
    setTask(taskFromService)
  }

  const onGoBack = () => {
    navigate(`/board/${boardId}`)
  }

  const onDetailsClick = (ev) => {
    ev.stopPropagation()
    setIsCloseEdit(!isCloseEdit)
  }

  if (!task) return <h1>Loading task...</h1>

  return <section className="task-details" onClick={onGoBack}>
    <div className="task-details-container" onClick={onDetailsClick}>
      <button className="go-back-button" onClick={onGoBack}><VscClose className='close-icon' /> </button>

      <div>
        {task?.style && <TaskDetailsCover task={task} />}
        {task?.title && <TaskDetailsTitle title={task.title} />}

        <div className="main-task">
          {task && <TaskDetailsInfo task={task} />}
          {task?.description && <TaskDetailsDescription task={task} isCloseEdit={isCloseEdit} />}
          {task?.attachments && <TaskDetailsAttachments task={task} />}
          {task.checklists?.length && <ChecklistList task={task} updateTask={updateTask} />}
          {task && <TaskDetailsActivity task={task} isCloseEdit={isCloseEdit} />}
        </div>

        <div className="side-task">
          <TaskDetailsSideTask task={task} />
        </div>
      </div>
    </div>

  </section >
}

function mapStateToProps(state) {
  return {
    task: state.boardModule.task
  }
}

export const TaskDetails = connect(mapStateToProps)(_TaskDetails)
