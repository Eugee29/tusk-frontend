import { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'

import { setModal } from '../../store/app/app.actions'

import { AiOutlineStar, AiFillStar, AiOutlinePlus } from 'react-icons/ai'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { BsFilter } from 'react-icons/bs'

import { BoardSideMenu } from '../board/board-side-menu'
import { MemberPreview } from '../task-details/member-preview'


export function BoardHeader({ task, board, updateTask, onUpdateBoard }) {

  const [isStarred, setIsStarred] = useState(board.isStarred)
  const [isMenuOpened, setIsMenuOpened] = useState('initial')

  const dispatch = useDispatch()
  const memberRef = useRef()
  const moreMembersRef = useRef()
  const filterRef = useRef()

  const onToggleStar = () => {
    setIsStarred(!isStarred)
    updateBoard()
  }

  const onToggleMenu = () => {
    if (isMenuOpened === 'initial') setIsMenuOpened(true)
    else setIsMenuOpened(!isMenuOpened)
  }

  const getStarClass = () => {
    const className = isStarred ? 'star-btn full' : 'star-btn outline'
    return className
  }

  const getMenuClass = () => {
    if (isMenuOpened === 'initial') return 'side-menu'
    else {
      const className = isMenuOpened ? 'side-menu opened' : 'side-menu closed'
      return className
    }
  }

  const updateBoard = () => {
    const newBoard = { ...board, isStarred: !isStarred }
    onUpdateBoard(newBoard)
  }

  const onOpenModal = (ev, modal) => {
    ev.stopPropagation()
    dispatch(setModal(modal))
  }

  const getMembersForPreview = (members) => {
    const membersForPreview = members.slice(0, 3)
    return membersForPreview
  }

  const getMembersForModal = (members) => {
    const membersForModal = members.slice(3)
    return membersForModal
  }

  return <section className="board-header">
    <div className='left-container'>
      <h1> {board.title} </h1>
      <button onClick={onToggleStar} className={getStarClass()}>
        {isStarred ? <AiFillStar className='star-icon' /> : <AiOutlineStar className='star-icon' />}
      </button>

      {board.members && /*!!board.members.length &&*/
        <div className='member-img-container'>
          {board.members.length <= 4 && board.members.map((member) => <MemberPreview key={member._id} member={member} isInTaskDetails={true} onUpdateBoard={onUpdateBoard} board={board} />)}
          {board.members.length > 4 && getMembersForPreview(board.members).map((member) => <MemberPreview key={member._id} member={member} isInTaskDetails={true} onUpdateBoard={onUpdateBoard} board={board} />)}
          {board.members.length > 4 &&
            <button ref={moreMembersRef} onClick={(ev) => onOpenModal(ev, { category: 'more-members', element: moreMembersRef.current, title: 'More members', props: { moreMembers: getMembersForModal(board.members), board, task, onUpdateBoard, element: moreMembersRef.current } })}
              className='more-members'> +{getMembersForModal(board.members).length} </button>}
          <a className="members-add-button round"
            ref={memberRef}
            onClick={(ev) => onOpenModal(ev, { element: memberRef.current, category: 'Board members', title: 'Add members', props: { task, updateTask, board, onUpdateBoard }, })}>
            <AiOutlinePlus />
          </a>
        </div>}
    </div>
    <div className='right-container'>
      <button className='filter-btn' ref={filterRef} onClick={(ev) => onOpenModal(ev, { element: filterRef.current, category: 'board-filter', title: 'Filter' })}><div className='filter-icon-container' ><BsFilter className='filter-icon' /></div>Filter</button>
      {(!isMenuOpened || isMenuOpened === 'initial') && <button className='show-menu' onClick={onToggleMenu}> <BiDotsHorizontalRounded className='icon' /></button>}
      <BoardSideMenu dynamicClass={getMenuClass()} onToggleMenu={onToggleMenu} board={board} onUpdateBoard={onUpdateBoard} updateTask={updateTask} />
    </div>
  </section>
}