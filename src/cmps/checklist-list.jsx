import { useState } from 'react'
import { useSelector } from 'react-redux'
import { ChecklistPreview } from './checklist-preview'

export const ChecklistList = ({ task, onUpdateTask }) => {

  const { checklists } = task
  // const boardFromStore = useSelector(({ boardModule }) => boardModule.board)
  // const [board, setBoard] = useState(boardFromStore)

  // console.log(board)
  const onUpdateChecklist = (checklistToUpdate) => {
    const updatedChecklists = checklists.map(checklist => checklist.id === checklistToUpdate.id ? checklistToUpdate : checklist)
    onUpdateTask({ ...task, checklists: updatedChecklists })
  }

  return (
    <ul className='checklist-list'>
      {checklists.map(checklist => <ChecklistPreview key={checklist.id} checklist={checklist} onUpdateChecklist={onUpdateChecklist} />)}
    </ul>
  )
}