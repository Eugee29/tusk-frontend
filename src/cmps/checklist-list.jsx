import { ChecklistPreview } from './checklist-preview'

export const ChecklistList = ({ checklists }) => {
  console.log(checklists)
  return (
    <ul className='checklist-list'>
      {checklists.map(checklist => <ChecklistPreview key={checklist.id} checklist={checklist} />)}
    </ul>
  )
}