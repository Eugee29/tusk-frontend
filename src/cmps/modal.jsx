import { connect, useSelector } from 'react-redux'

import { ModalCover } from './modal-cover'
import { ModalMember } from './modal-member'

import { CgClose } from 'react-icons/cg'

const _Modal = ({task, category, board, onToggleMember }) => {

   return (
      <div className="nice-popup">
         <header>
            <div className="label">{category}</div>
            <button><span className="sidebar-icon"><CgClose /></span></button>
         </header>

         <main className="main-modal">

           { category === 'Cover' && <ModalCover task={task}/>}
           { category === 'Members' && <ModalMember task={task} board={board} onToggleMember={onToggleMember} />}

         </main>

      </div>)

}

function mapStateToProps(state) {
   return {
      board: state.boardModule.board
   }
}

export const Modal = connect(mapStateToProps)(_Modal)