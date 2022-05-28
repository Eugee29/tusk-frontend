import { AiOutlineStar } from 'react-icons/ai'
import { BiDotsHorizontalRounded } from 'react-icons/bi'

export function BoardHeader({ board }) {

  return <section className="board-header">
    <div className='left-container'>
      <h1> {board.title} </h1>
      <button> <AiOutlineStar className='icon star-icon' /> </button>
    </div>
    <div className='right-container'>
        <button className='show-menu'> <BiDotsHorizontalRounded className='icon' /> Show menu </button>
    </div>


  </section>
}