import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { IoIosArrowBack } from 'react-icons/io'
import { CgClose } from 'react-icons/cg'

import { setModal } from '../store/app/app.actions'

import { utilService } from '../services/util.service'

import { ModalLabelCreate } from './modal/modal-label-create'
import { ModalLabelChange } from './modal/modal-label-change'
import { ModalCreateBoard } from './modal/modal-create-board'
import { ModalGroupActions } from './modal/modal-group-actions'
import { ModalCover } from './modal/modal-cover'
import { ModalDates } from './modal/modal-dates'
import { ModalMember } from './modal/modal-member'
import { ModalLabel } from './modal/modal-label'
import { TodoActions } from './modal/todo-actions'
import { ChecklistDelete } from './modal/checklist-delete'
import { ChecklistAdd } from './modal/checklist-add'
import { AttachmentAdd } from './modal/attachment-add.jsx'
import { AttachmentDelete } from './modal/attachment-delete'
import { AttachmentEdit } from './modal/attachment-edit'
import { MemberActions } from './modal/member-actions'


export const DynamicModal = () => {

  const { modal } = useSelector(({ appModule }) => appModule)
  const [position, setPosition] = useState(null)
  const dispatch = useDispatch()
  const editLabel = useRef('')
  const buttonRef = useRef()

  const modalRef = useRef()

  const changeEditLabel = (label) => {
    editLabel.current = label
  }

  useEffect(() => {
    window.addEventListener('resize', adjustPosition)
    return () => window.removeEventListener('resize', adjustPosition)
  }, [])

  useEffect(() => {
    adjustPosition()
  }, [modal.element])

  const adjustPosition = () => {
    const position = utilService.getPosition(modal.element)
    position.top += (modal.element.offsetHeight) * 1.25 // Gives the modal some space from the element that triggered it.

    // Pushes the modal into the viewport when it does not have enough space to open up + 25 padding.
    if (position.top + (modalRef.current.offsetHeight) >= window.innerHeight) {
      position.top = window.innerHeight - modalRef.current.offsetHeight - 25
    }
    if (position.left + modalRef.current.offsetWidth >= window.innerWidth) {
      position.left = window.innerWidth - modalRef.current.offsetWidth - 25
    }

    setPosition(position)
  }

  var cmp

  switch (modal.category) {
    case 'Cover':
      cmp =
        <ModalCover
          task={modal.task}
          updateTask={modal.updateTask}
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
    case 'Dates':
      cmp =
        <ModalDates
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
          onUpdateBoard={modal.onUpdateBoard}
          board={modal.board}
          changeEditLabel={changeEditLabel}
          element={modal.element}
        />
      break
    case 'Create label':
      cmp =
        <ModalLabelCreate
          task={modal.task}
          board={modal.board}
          updateTask={modal.updateTask}
          onUpdateBoard={modal.onUpdateBoard}
        />
      break
    case 'Change label':
      cmp =
        <ModalLabelChange
          task={modal.task}
          board={modal.board}
          editLabel={editLabel.current}
          updateTask={modal.updateTask}
          onUpdateBoard={modal.onUpdateBoard}
        />
      break
    case 'Create board':
      cmp =
        <ModalCreateBoard
        />
      break
    case 'todo-actions':
      cmp =
        <TodoActions {...modal.props} />
      break
    case 'checklist-delete':
      cmp =
        <ChecklistDelete {...modal.props} />
      break
    case 'checklist-add':
      cmp =
        <ChecklistAdd {...modal.props} />
      break
    case 'attachment-add':
      cmp =
        <AttachmentAdd {...modal.props} />
      break
    case 'Group actions':
      cmp =
        <ModalGroupActions onUpdateBoard={modal.onUpdateBoard} group={modal.group} boardId={modal.boardId} />
      break
    case 'attachment-delete':
      cmp =
        <AttachmentDelete {...modal.props} />
      break
    case 'attachment-edit':
      cmp =
        <AttachmentEdit {...modal.props} />
      break
    case 'member-actions':
      cmp =
        <MemberActions {...modal.props} />
      break
    default:
      break
  }

  const onOpenModal = (ev, category) => {
    ev.stopPropagation()
    dispatch(setModal({ element: modal.element, category, title: category, task: modal.task, board: modal.board, onUpdateBoard: modal.onUpdateBoard }))
  }

  return (
    <div className="dynamic-modal" style={{ ...position }} ref={modalRef} onClick={(e) => e.stopPropagation()}>
      {modal.category != 'member-actions' &&
        <header >
          {modal.category === 'Create label' && <button ref={buttonRef} onClick={ev => onOpenModal(ev, 'Labels')} className="sidebar-icon-left"><span ><IoIosArrowBack /></span></button>}
          {modal.category === 'Change label' && <button ref={buttonRef} onClick={ev => onOpenModal(ev, 'Labels')} className="sidebar-icon-left"><span ><IoIosArrowBack /></span></button>}
          <div className="label">{modal.title ? modal.title : modal.category}</div>
          <button className="sidebar-icon-right" onClick={() => dispatch(setModal(null))}><span><CgClose /></span></button>
        </header>
      }
      <main className="main-modal">
        {cmp}
      </main>
    </div>
  )

}



