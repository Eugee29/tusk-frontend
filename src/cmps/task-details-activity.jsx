import React, { useEffect, useState, useRef } from 'react'
import { connect, useSelector } from 'react-redux'
import { utilService } from '../services/util.service'

import { GrList } from 'react-icons/gr'

function _TaskDetailsActivity({ task, isCloseEdit }) {

   const { activities } = useSelector((storeState) => storeState.boardModule.board)

   const [isClickedComment, setIsClickedComment] = useState(null)
   const [isTypeComment, setIsTypeComment] = useState(false)
   const [comment, setIsComment] = useState('')


   useEffect(() => {
      setIsClickedComment(false)
   }, [isCloseEdit])

   const onChangeComment = (ev) => {
      ev.stopPropagation()
      setIsClickedComment(true)
      console.log(isClickedComment);
   }

   const handleChange = (ev) => {
      ev.stopPropagation()
      setIsComment(ev.target.value)
      console.log(ev.target.value);

      if (ev.target.value.length > 0) setIsTypeComment(true)
      if (ev.target.value.length === 0) setIsTypeComment(false)
   }

   const enableButton = isTypeComment ? 'enableButton' : ''
   const initials = (member) => ([...member.fullName])

   


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
                  {isClickedComment && <input className={`${enableButton}`} type="submit" value="Save" disabled=""/>}
               </div>
            </div>

         </div>

         {activities && activities.map(activity => 
         <div key={activity.byMember._id} className="activity-list-container">
            <div  className="user-container">
               <div className="member">
                  <span className="label"> {`${initials(activity.byMember)[0]}${initials(activity.byMember)[1]}`}</span>
               </div>
            </div>

            <div className="activity-container">
               <span className="member" >{activity.byMember.fullName}</span>
               <span > {activity.txt}</span>
            </div>

            <div className="time-container">
               {utilService.getTimeAgo(activity.createdAt)}
            </div>
         </div>)}



      </section>
   )
}

function mapStateToProps(state) {
   return {
      board: state.boardModule.board
   }
}

export const TaskDetailsActivity = connect(mapStateToProps)(_TaskDetailsActivity)