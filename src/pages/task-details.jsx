
import React, { useEffect, useState, useRef } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { connect } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'

import { loadTask } from '../store/board/board.action.js'
import { TaskDetailsCover } from '../cmps/task-details-cover.jsx'
import { TaskDetailsTitle } from '../cmps/task-details-title.jsx'
import { TaskDetailsInfo } from '../cmps/task-details-info.jsx'
import { TaskDetailsDescription } from '../cmps/task-details-description.jsx'
import { TaskDetailsAttachments } from '../cmps/task-details-attachments.jsx'
import { TaskDetailsActivity } from '../cmps/task-details-activity.jsx'

const _TaskDetails = () => {

    const [task, setTask] = useState(null)
    const [isCloseEdit, setIsCloseEdit] = useState(true)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const { boardId } = useParams()
    const { groupId } = useParams()
    const { taskId } = useParams()

    useEffect(() => {
        if (!task) {
            loadTaskAsync()
            console.log('loadTaskAsync');
        }
        // setIsCloseEdit(false)
    }, [isCloseEdit])

    const loadTaskAsync = async () => {
        const taskFromSrevice = await dispatch(loadTask({ boardId, groupId, taskId }))
        setTask(taskFromSrevice)
    }

    const onGoBack = () => {
        navigate(`/board/${boardId}`)
    }

    const onDetailsClick = (ev) => {
        ev.stopPropagation()
        setIsCloseEdit(!isCloseEdit)
    }

    return <section className="task-details" onClick={onGoBack}>
        <div className="task-details-container" onClick={onDetailsClick}>
            <button className="go-back-button" onClick={onGoBack}> X </button>

            {task?.cover && <TaskDetailsCover cover={task.cover} />}
            {task?.title && <TaskDetailsTitle title={task.title} />}

            <div className="main-task">
                {task && <TaskDetailsInfo task={task} />}
                {task && <TaskDetailsDescription task={task} isCloseEdit={isCloseEdit} />}
                {task && <TaskDetailsAttachments task={task} isCloseEdit={isCloseEdit} />}
                {task && <TaskDetailsActivity task={task} isCloseEdit={isCloseEdit} />}

            </div>

        </div>
    </section>
}

function mapStateToProps(state) {
    return {
        task: state.boardModule.task
    }
}

export const TaskDetails = connect(mapStateToProps)(_TaskDetails)
