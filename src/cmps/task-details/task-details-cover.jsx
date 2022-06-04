import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

import { setModal } from '../../store/app/app.actions'
import FastAverageColor from 'fast-average-color'

export function TaskDetailsCover({ task, updateTask }) {
  const buttonRef = useRef()
  const [bgColor,setBgColor] = useState(null)
  const dispatch = useDispatch()


  const fac = new FastAverageColor();

  useEffect(()=>{
    loadBgColor()
  },[task])
    
  const loadBgColor =async ()=>{
    const color = await fac.getColorAsync(task.style.imgURL)
    setBgColor(color.hexa)
  }

  const onModal = (category) => {
    dispatch(
      setModal({
        element: buttonRef.current,
        category,
        title: category,
        props: { task, updateTask },
      })
    )
  }

  return (
    <header>
      {task?.style?.bgColor && (
        <div
          className="task-details-cover color"
          style={{ backgroundColor: `${task.style.bgColor}` }}
        >
          <button
            ref={buttonRef}
            onClick={(ev) => {
              ev.stopPropagation()
              onModal('Cover')
            }}
          >
            Cover
          </button>
        </div>
      )}

      {task?.style?.imgURL && (
        <div
          className="task-details-cover img "
          style={{backgroundColor:bgColor, backgroundImage: `url('${task.style.imgURL}')` }}
        >
          <button
            ref={buttonRef}
            onClick={(ev) => {
              ev.stopPropagation()
              onModal('Cover')
            }}
          >
            Cover
          </button>
        </div>
      )}
    </header>
  )
}
