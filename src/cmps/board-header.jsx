import { AiOutlineStar } from 'react-icons/ai'

export function BoardHeader({ board }) {

  return <section className="board-header">
    <h1> {board.title} </h1>
    <button> <AiOutlineStar className='star-icon' /> </button>
  </section>
}