import React, { useEffect, useState } from 'react'
import { connect, useSelector } from 'react-redux'

import { activityService } from '../../services/activity.service'

import { GrList } from 'react-icons/gr'
import { ActivityList } from '../activity-list'

export function TaskDetailsActivity({ task, isCloseEdit, board }) {
  const activities = activityService.getTaskActivities(task.id, board)

  const [isClickedComment, setIsClickedComment] = useState(null)
  const [isTypeComment, setIsTypeComment] = useState(false)
  const [comment, setIsComment] = useState('')


  useEffect(() => {
    setIsClickedComment(false)
  }, [isCloseEdit])

  const onChangeComment = (ev) => {
    ev.stopPropagation()
    setIsClickedComment(true)
  }

  const handleChange = (ev) => {
    ev.stopPropagation()
    setIsComment(ev.target.value)
    console.log(ev.target.value)

    if (ev.target.value.length > 0) setIsTypeComment(true)
    if (ev.target.value.length === 0) setIsTypeComment(false)
  }

  const enableButton = isTypeComment ? 'enableButton' : ''
  const initials = (member) => ([...member.fullname])

  return (
    <section className="task-details-activity" >

      {/* Activity */}
      <div className="activity-title-container">
        <span className=""><GrList /></span>
        <h3 >Activity</h3>
      </div>

      <div className="activity-list-container">

        <div className="user-container">
          <div className="member">
            <span className="label"> {``}{``}</span>
          </div>
        </div>

        <div className="comment-frame">
          <div className="comment-container">
            {!isClickedComment && <a onClick={onChangeComment}>Write a comment…</a>}
            {isClickedComment && <textarea onClick={onChangeComment} placeholder="Write a comment…" onChange={handleChange} value={comment} ></textarea>}
            {isClickedComment && <input className={`${enableButton}`} type="submit" value="Save" disabled="" />}
          </div>
        </div>

      </div>

      {activities && <ActivityList board={board} task={task} />}



    </section>
  )
}
