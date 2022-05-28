import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'

import { boardService } from '../services/board.service'

export function LabelList({ labelIds, toggleLabels, isOpen }) {

  const { boardId } = useParams()

    const [boardLabels, setBoardLabels] = useState()
    const [taskLabels, setTaskLabels] = useState(labelIds)

  useEffect(() => {
    ; (async () => {
      const board = await getBoard(boardId)
      setBoardLabels(board.labels)
    })()
  }, [])

  const getBoard = async (boardId) => {
    return await boardService.getById(boardId)
  }

  const getLabelValueById = (type, labelId) => {
    if (!boardLabels) return
    const currLabel = boardLabels.find(label => label.id === labelId)
    const { color, title } = currLabel

    if (type === 'color') return { backgroundColor: `${color}` }
    if (type === 'title') return title
  }

  const getLabelClass = () => {
    const className = (isOpen) ? 'label open' : 'label close'
    return className
  }

    const onToggleLabel = (ev) => {
        ev.stopPropagation()
        toggleLabels()
    } 

  return <section className="label-list">
    {taskLabels && taskLabels.map(label => <div onClick={onToggleLabel} className={getLabelClass()} key={label} style={getLabelValueById('color', label)}> {getLabelValueById('title', label)} </div>)}
  </section>
}