import { connect, useSelector } from 'react-redux'
import React, { useEffect, useState, useRef, useParam } from 'react'

import { ModalCover } from './modal-cover'
import { ModalMember } from './modal-member'
import { ModalLabel } from './modal-label'
import { ModalLabelCreate } from './modal-label-create'
import { ModalLabelChange } from './modal-label-change'

import { CgClose } from 'react-icons/cg'
import { IoIosArrowBack } from 'react-icons/io'

export const Modal = ({ task, category, board, editLabel, updateTask, onToggleMember, onToggleLabel, onLabelCreate, onBackTolabel, onCloseModalLabel, onCreatelLabel, onChangeLabel, onCloseModal, /*position*/ }) => {

  // position.top += 30

  return (
    <div className="nice-popup" /*style={{ ...position }}*/>
      <header>
        {category === 'Create label' && <button onClick={onBackTolabel} className="sidebar-icon-left"><span ><IoIosArrowBack /></span></button>}
        {category === 'Change label' && <button onClick={onBackTolabel} className="sidebar-icon-left"><span ><IoIosArrowBack /></span></button>}
        <div className="label">{category}</div>
        <button className="sidebar-icon-right" onClick={onCloseModal}><span ><CgClose /></span></button>
      </header>

      <main className="main-modal">

        {category === 'Cover' && <ModalCover task={task} />}
        {category === 'Members' && <ModalMember task={task} updateTask={updateTask} board={board} onToggleMember={onToggleMember} onCloseModalLabel={onCloseModalLabel} />}
        {category === 'Labels' && <ModalLabel task={task} board={board} onToggleLabel={onToggleLabel} onChangeLabel={onChangeLabel} onCreatelLabel={onCreatelLabel} onCloseModalLabel={onCloseModalLabel} />}
        {category === 'Create label' && <ModalLabelCreate task={task} board={board} onLabelCreate={onLabelCreate} onBackTolabel={onBackTolabel} onCloseModalLabel={onCloseModalLabel} />}
        {category === 'Change label' && <ModalLabelChange editLabel={editLabel} task={task} board={board} onLabelCreate={onLabelCreate} onBackTolabel={onBackTolabel} onCloseModalLabel={onCloseModalLabel} />}

      </main>

    </div>)

}

// function mapStateToProps(state) {
//    return {
//       board: state.boardModule.board
//    }
// }

// export const Modal = connect(mapStateToProps)(_Modal)