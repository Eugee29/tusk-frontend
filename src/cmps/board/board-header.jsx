import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'

import { setModal } from '../../store/app/app.actions'

import { AiOutlineStar, AiFillStar, AiOutlinePlus } from 'react-icons/ai'
import { BiDotsHorizontalRounded } from 'react-icons/bi'

import { BoardSideMenu } from '../board/board-side-menu'
import { MemberPreview } from '../task-details/member-preview'


export function BoardHeader({ task, board, updateTask, onUpdateBoard }) {

   const [isStarred, setIsStarred] = useState(board.isStarred)
   const [isMenuOpened, setIsMenuOpened] = useState(false)

   const dispatch = useDispatch()
   const memberRef = useRef()

   const onToggleStar = () => {
      setIsStarred(!isStarred)
      updateBoard()
   }

   const onToggleMenu = () => {
      setIsMenuOpened(!isMenuOpened)
   }

   const getStarClass = () => {
      const className = isStarred ? 'star-btn full' : 'star-btn outline'
      return className
   }

   const getMenuClass = () => {
      const className = isMenuOpened ? 'side-menu opened' : 'side-menu closed'
      return className
   }

   const updateBoard = () => {
      const newBoard = { ...board, isStarred: !isStarred }
      onUpdateBoard(newBoard)
   }

   const onOpenModal = (ev, modal) => {
      ev.stopPropagation()
      dispatch(setModal(modal))
   }

   return <section className="board-header">
      <div className='left-container'>
         <h1> {board.title} </h1>
         <button onClick={onToggleStar} className={getStarClass()}>
            {isStarred ? <AiFillStar className='star-icon' /> : <AiOutlineStar className='star-icon' />}
         </button>
         {board.members && /*!!board.members.length &&*/
            <div className='member-img-container'>
               {board.members.map((member) => <MemberPreview key={member._id} member={member} isInTaskDetails={true} onUpdateBoard={onUpdateBoard} board={board} />)}
               <a className="members-add-button round"
                  ref={memberRef}
                  onClick={(ev) => onOpenModal(ev, { element: memberRef.current, category: 'Board members', props: { task, updateTask, board, onUpdateBoard/*, group*/ }, })}>
                  <AiOutlinePlus />
               </a>
            </div>}
      </div>
      <div className='right-container'>
         {!isMenuOpened && <button className='show-menu' onClick={onToggleMenu}> <BiDotsHorizontalRounded className='icon' /></button>}
         <BoardSideMenu dynamicClass={getMenuClass()} onToggleMenu={onToggleMenu} board={board} onUpdateBoard={onUpdateBoard} updateTask={updateTask}/>
      </div>
   </section>
}