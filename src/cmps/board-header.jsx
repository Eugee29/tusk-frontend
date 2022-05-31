import { useState } from 'react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { BiDotsHorizontalRounded } from 'react-icons/bi'

import {SideMenu} from './side-menu'

export function BoardHeader({ board, onUpdateBoard }) {

  const [isStarred, setIsStarred] = useState(board.isStarred)
  const [isMenuOpened, setIsMenuOpened] = useState(false)

  const onToggleStar = () => {
    setIsStarred(!isStarred)
    updateBoard()
  }

  const updateBoard = () => {
    const newBoard = {...board, isStarred: !isStarred}
    console.log(newBoard)
    onUpdateBoard(newBoard)
  }

  const getStarClass = () => {
    const className = isStarred ? 'star-btn full' : 'star-btn outline'
    return className
  }

  const onToggleMenu = () => {
    setIsMenuOpened(!isMenuOpened)
  }

  const getMenuClass = () => {
    const className = isMenuOpened ? 'side-menu opened' : 'side-menu closed' 
    return className
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
      <SideMenu dynamicClass={getMenuClass()} onToggleMenu={onToggleMenu} board={board} />
    </div>


  </section>
}