
import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useNavigate, useOutletContext, useParams } from "react-router-dom"

import { VscClose } from 'react-icons/vsc'
import { RiArchiveLine } from 'react-icons/ri'

import { setModal } from '../store/app/app.actions.js'

import { TaskDetailsCover } from '../cmps/task-details/task-details-cover.jsx'
import { TaskDetailsTitle } from '../cmps/task-details/task-details-title.jsx'
import { TaskDetailsInfo } from '../cmps/task-details/task-details-info.jsx'
import { TaskDetailsDescription } from '../cmps/task-details/task-details-description.jsx'
import { TaskDetailsAttachments } from '../cmps/task-details/task-details-attachments.jsx'
import { TaskDetailsActivity } from '../cmps/task-details/task-details-activity.jsx'
import { TaskDetailsSideTask } from '../cmps/task-details/task-details-side-task.jsx'
import { ChecklistList } from '../cmps/checklist/checklist-list.jsx'

export const TaskDetails = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { boardId, groupId, taskId } = useParams()
  const { board, onUpdateBoard } = useOutletContext()
  const { modal } = useSelector(({ appModule }) => appModule)

  const group = board.groups.find(group => group.id === groupId)
  const task = group.tasks.find(task => task.id === taskId)

  const updateTask = async (taskToUpdate) => {
    const taskIdx = group.tasks.findIndex(task => task.id === taskToUpdate.id)
    group.tasks[taskIdx] = taskToUpdate
    onUpdateBoard(board)
  }

  const onGoBack = () => {
    navigate(`/board/${boardId}`)
  }

  const onDetailsClick = (ev) => {
    ev.stopPropagation()
    if (modal) dispatch(setModal(null))
  }

  return (
    <section className="task-details" onClick={onGoBack}>
      <div className="task-details-container" onClick={onDetailsClick}>
        <button className="go-back-button" onClick={onGoBack}><VscClose className='close-icon' /> </button>

        <div>
          {task.style && <TaskDetailsCover task={task} setModal={setModal} updateTask={updateTask} />}

          {task.archivedAt &&
            <div className='task-archived'>
              <div className="archive-icon-container"><RiArchiveLine className="archive-icon" /></div>
              <p>This task is archived.</p>
            </div>
          }

          {task.title && <TaskDetailsTitle task={task} groupTitle={group.title} updateTask={updateTask} />}

          <div className="main-task">
            <TaskDetailsInfo board={board} task={task} updateTask={updateTask} onUpdateBoard={onUpdateBoard} />
            {<TaskDetailsDescription task={task} updateTask={updateTask} />}
            {task.attachments && <TaskDetailsAttachments task={task} updateTask={updateTask} />}
            {!!task.checklists?.length && <ChecklistList task={task} updateTask={updateTask} />}
            <TaskDetailsActivity task={task} board={board} />
          </div>
          <TaskDetailsSideTask board={board} group={group} task={task} onUpdateBoard={onUpdateBoard} updateTask={updateTask} />
        </div>

      </div>
    </section >
  )
}
