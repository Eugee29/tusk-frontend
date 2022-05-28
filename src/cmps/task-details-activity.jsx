import React, { useEffect, useState, useRef } from 'react'
import { connect, useSelector } from 'react-redux'

import { GrList } from 'react-icons/gr'

function _TaskDetailsActivity({ task }) {

   const { activities } = useSelector((storeState) => storeState.boardModule.board)
   const initials = (member) => ([...member.fullName])

   const timeAgo = (timestamp, locale = 'en') => {
      let value;
      const diff = (Date.now() - timestamp) / 1000;
      const minutes = Math.floor(diff / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const months = Math.floor(days / 30);
      const years = Math.floor(months / 12);
      const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });

      if (years > 0) {
         value = rtf.format(0 - years, "year");
      } else if (months > 0) {
         value = rtf.format(0 - months, "month");
      } else if (days > 0) {
         value = rtf.format(0 - days, "day");
      } else if (hours > 0) {
         value = rtf.format(0 - hours, "hour");
      } else if (minutes > 0) {
         value = rtf.format(0 - minutes, "minute");
      } else {
         value = rtf.format(0 - diff, "second");
      }
      return value;
   }

   return (
      <section className="task-details-activity" >

         {/* Activity */}
         <div className="activity-title-container">
            <span className=""><GrList /></span>
            <h3 >Activity</h3>
         </div>

         {activities && activities.map(activity => <div className="activity-list-container">
            <div className="user-container">
               <div className="member">
                  <span className="label"> {`${initials(activity.byMember)[0]}${initials(activity.byMember)[1]}`}</span>
               </div>
            </div>

            <div className="activity-container">
               <span className="member" >{activity.byMember.fullName}</span>
               <span > {activity.txt}</span>
            </div>

            <div className="time-container">
               {timeAgo(activity.createdAt)}
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