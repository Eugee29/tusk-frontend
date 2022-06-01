import React, { useEffect, useState, useRef } from 'react'
import { connect, useSelector } from 'react-redux'

import { ImAttachment } from 'react-icons/im'
import { RiLayoutBottom2Fill } from 'react-icons/ri'

function _TaskDetailsAttachments({ task }) {

  // const { board } = useSelector((storeState) => storeState.boardModule)

  const timeAgo = (timestamp, locale = 'en') => {
    let value
    const diff = (Date.now() - timestamp) / 1000
    const minutes = Math.floor(diff / 60)
    const hours = Math.floor(minutes / 60)
    const days = Math.floor(hours / 24)
    const months = Math.floor(days / 30)
    const years = Math.floor(months / 12)
    const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" })

    if (years > 0) {
      value = rtf.format(0 - years, "year")
    } else if (months > 0) {
      value = rtf.format(0 - months, "month")
    } else if (days > 0) {
      value = rtf.format(0 - days, "day")
    } else if (hours > 0) {
      value = rtf.format(0 - hours, "hour")
    } else if (minutes > 0) {
      value = rtf.format(0 - minutes, "minute")
    } else {
      value = rtf.format(0 - diff, "second")
    }
    return value
  }

  return (
    <section className="task-details-attachments" >

      {/* Attachments */}
      <div className="attachments-title-container">
        <span className=""><ImAttachment /></span>
        <h3 >Attachments</h3>
      </div>

      <div className="attachments-body-container">

        {task.attachments.map(att =>
          <div key={att.id} className="attachments-section-container">
            <a className="thumbnail-img" target="_blank" style={{ backgroundImage: `url('${att.fileUrl}')` }}></a>
            <div className="thumbnail-info">
              <span className="thumbnail-name">{att.fileName ? att.fileName : 'Media'}</span>
              <div className="thumbnail-details">
                <span className="thumbnail-date" >Added <span className="date">{timeAgo(task.attachments[0].createdAt)}</span> </span>
                <span> - <a className="thumbnail-date" href="#"><span className="button-att">Delete</span></a> </span>
                <span> - <a className="thumbnail-date" href="#"><span className="button-att">Edit</span></a> </span>
              </div>
              <div className="thumbnail-cover">
                <span className="icon-make-cover"><RiLayoutBottom2Fill /></span>
                <span className="button-att">Make cover</span>
              </div>
            </div>
          </div>)}

        <a className="attachments-add" href="#">Add an attachment</a>
      </div>

    </section>
  )
}

function mapStateToProps(state) {
  return {
    board: state.boardModule.board
  }
}

export const TaskDetailsAttachments = connect(mapStateToProps)(_TaskDetailsAttachments)