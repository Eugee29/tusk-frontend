import { useState } from 'react'

import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { BiDotsHorizontalRounded } from 'react-icons/bi'

import { BoardSideMenu } from '../board/board-side-menu'


export function BoardHeader({ board, onUpdateBoard }) {

  const [isStarred, setIsStarred] = useState(board.isStarred)
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  const onToggleStar = () => {
    setIsStarred(!isStarred)
    updateBoard()
  }
<<<<<<< HEAD
  
  const onToggleMenu = () => {
    setIsMenuOpened(!isMenuOpened)
=======

  const updateBoard = () => {
    const newBoard = { ...board, isStarred: !isStarred }
    onUpdateBoard(newBoard)
>>>>>>> 2a53f7f24b1441bc6467671e6d2ece28861ad23d
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
    // console.log(newBoard)
    onUpdateBoard(newBoard)
  }


  return <section className="board-header">
    <div className='left-container'>
      <h1> {board.title} </h1>
      <button onClick={onToggleStar} className={getStarClass()}>
        {isStarred ? <AiFillStar className='star-icon' /> : <AiOutlineStar className='star-icon' />}
      </button>
      {board.members && !!board.members.length
        && <div className='member-img-container'>
          {board.members.map((member) => <a key={member._id} className="member-img"> <img src={member.imgURL} alt="" /> </a>)}
        </div>}
    </div>
    <div className='right-container'>
      {!isMenuOpened && <button className='show-menu' onClick={onToggleMenu}> <BiDotsHorizontalRounded className='icon' /> Show menu </button>}
      <BoardSideMenu dynamicClass={getMenuClass()} onToggleMenu={onToggleMenu} board={board} />
    </div>
  </section>
}