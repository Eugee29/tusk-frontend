import { AiOutlineStar } from 'react-icons/ai'
import { BiDotsHorizontalRounded } from 'react-icons/bi'

export function BoardHeader({ board }) {

  return <section className="board-header">
    <div className='left-container'>
      <h1> {board.title} </h1>
      <button> <AiOutlineStar className='icon star-icon' /> </button>
      {board.members && !!board.members.length
        && <div className='member-img-container'>
          {board.members.map((member) => <a key={member._id} className="member-img"> <img src={member.imgURL} alt="" /> </a>)}
        </div>}
    </div>
    <div className='right-container'>
      <button className='show-menu'> <BiDotsHorizontalRounded className='icon' /> Show menu </button>
    </div>


  </section>
}