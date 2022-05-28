import { useState } from 'react'
import { useSelector } from 'react-redux'
import { ChecklistPreview } from './checklist-preview'

export const ChecklistList = ({ checklists }) => {

  // const boardFromStore = useSelector(({ boardModule }) => boardModule.board)
  // const [board, setBoard] = useState(boardFromStore)

  // console.log(board)

  const onUpdateBoard = () => {

  }

  return (
    <ul className='checklist-list'>
      {checklists.map(checklist => <ChecklistPreview key={checklist.id} checklist={checklist} />)}
    </ul>
  )
}