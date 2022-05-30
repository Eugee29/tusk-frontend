import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { ModalCover } from './modal-cover'
import { ModalMember } from './modal-member'
import { ModalLabel } from './modal-label'
import { ModalLabelCreate } from './modal-label-create'
import { ModalLabelChange } from './modal-label-change'
import { CgClose } from 'react-icons/cg'
import { useDispatch } from 'react-redux'
import { setModal } from '../store/app/app.actions'
import { TodoActions } from './todo-actions'
import { ChecklistDelete } from './checklist-delete'


export const DynamicModal = () => {

  const { modal } = useSelector(({ appModule }) => appModule)
  const dispatch = useDispatch()
  const editLabel = useRef('')
  var cmp

  if (!modal) return

  switch (modal.category) {
    case 'Cover':
      modal.position.top += 50
      cmp =
        <ModalCover
          task={modal.task}
        />
      break
    case 'Members':
      cmp =
        <ModalMember
          task={modal.task}
          updateTask={modal.updateTask}
          board={modal.board}
        />
      break
    case 'Labels':
      cmp =
        <ModalLabel
          task={modal.task}
          updateTask={modal.updateTask}
          board={modal.board}
          onOpenModalDynamic={modal.onOpenModalDynamic}
          changeEditLabel={modal.changeEditLabel}
        />
      break
    case 'Create label':
      cmp =
        <ModalLabelCreate
          task={modal.task}
          board={modal.board}
          onUpdateBoard={modal.onUpdateBoard}
          onOpenModalDynamic={modal.onOpenModalDynamic}
        />
      break
    case 'Change label':
      cmp =
        <ModalLabelChange
          task={modal.task}
          board={modal.board}
          editLabel={editLabel.current}
          onOpenModalDynamic={modal.onOpenModalDynamic}
          updateTask={modal.updateTask}
          onUpdateBoard={modal.onUpdateBoard}
        />
      break
    case 'todo-actions':
      modal.position.top += 30
      cmp =
        <TodoActions {...modal.props} />
      break
    case 'checklist-delete':
      modal.position.top += 40
      cmp =
        <ChecklistDelete {...modal.props} />
      break
    default:
      break
  }


  return (
    <div className="dynamic-modal" style={{ ...modal.position }}>
      <header>
        <div className="label">{modal.title ? modal.title : modal.category}</div>
        <button className="sidebar-icon-right" onClick={() => dispatch(setModal(null))}><span ><CgClose /></span></button>
      </header>

      <main className="main-modal">
        {cmp}
      </main>
    </div>)

}