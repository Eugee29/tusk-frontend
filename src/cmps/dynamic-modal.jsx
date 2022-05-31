import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { ModalCover } from './modal-cover'
import { ModalMember } from './modal-member'
import { ModalLabel } from './modal-label'
import { ModalLabelCreate } from './modal-label-create'
import { ModalLabelChange } from './modal-label-change'
import {ModalGroupActions} from './modal-group-actions'
import { CgClose } from 'react-icons/cg'
import { useDispatch } from 'react-redux'
import { setModal } from '../store/app/app.actions'
import { utilService } from '../services/util.service'

import { TodoActions } from './todo-actions'
import { ChecklistDelete } from './checklist-delete'
import { ChecklistAdd } from './checklist-add'

import { IoIosArrowBack } from 'react-icons/io'
// import { ModalGroupActions } from './modal-group-actions'

export const DynamicModal = () => {

  const { modal } = useSelector(({ appModule }) => appModule)
  const [position, setPosition] = useState(null)
  const dispatch = useDispatch()
  const editLabel = useRef('')
  const buttonRef = useRef()

  const modalRef = useRef()

  useEffect(() => {
    adjustPosition()
    window.addEventListener('resize', adjustPosition)

  }, [modal])

  useEffect((() => { return () => window.removeEventListener('resize', adjustPosition) }), [])

  const adjustPosition = () => {
    if (!modal) return setPosition(null)
    const { position } = modal
    if (position.top + modalRef.current.offsetHeight > window.innerHeight) {
      position.top += window.innerHeight - position.top - (modalRef.current.offsetHeight) * 1.25
    }
    if (position.left + modalRef.current.offsetWidth > window.innerWidth) {
      position.left += window.innerWidth - position.left - (modalRef.current.offsetWidth) * 1.25
    }
    setPosition(position)
  }


  //  if (!modal) return



  //  const onModal = (category) => {
  //     dispatch(setModal({ category, title: category, task: modal.task, board: modal.board, onUpdateBoard: modal.onUpdateBoard, position: utilService.getPosition(buttonRef.current) }))
  //   }




  const changeEditLabel = (label) => {
    editLabel.current = label
  }

  // console.log('editLabel.current', editLabel.current)

  if (!modal) return

  var cmp

  switch (modal.category) {
    case 'Cover':
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
          changeEditLabel={changeEditLabel}
        />
      break
    case 'Create label':
      cmp =
        <ModalLabelCreate
          task={modal.task}
          board={modal.board}
          onUpdateBoard={modal.onUpdateBoard}
          changeEditLabel={modal.onUpdateBoard}
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
    case 'Group actions':
      modal.position.top += 28
      cmp =
        <ModalGroupActions onUpdateBoard={modal.onUpdateBoard} group={modal.group} boardId={modal.boardId} />
      break
    default:
      break
  }

  const onModal = (category) => {
    const position = utilService.getPosition(buttonRef.current)
    position.left -= 12 // PADDING
    dispatch(setModal({ category, title: category, task: modal.task, board: modal.board, onUpdateBoard: modal.onUpdateBoard, position }))
  }

  console.log(position)

  return (
    <div className="dynamic-modal" style={{ ...position }} ref={modalRef}>
      <header >
        {modal.category === 'Create label' && <button ref={buttonRef} onClick={(ev) => { ev.stopPropagation(); onModal('Labels') }} className="sidebar-icon-left"><span ><IoIosArrowBack /></span></button>}
        {modal.category === 'Change label' && <button ref={buttonRef} onClick={(ev) => { ev.stopPropagation(); onModal('Labels') }} className="sidebar-icon-left"><span ><IoIosArrowBack /></span></button>}
        <div className="label">{modal.title ? modal.title : modal.category}</div>
        <button className="sidebar-icon-right" onClick={() => dispatch(setModal(null))}><span ><CgClose /></span></button>
      </header>
      <main className="main-modal" >
        {cmp}
      </main>
    </div>
  )

}



