import { IoMdClose } from 'react-icons/io'
import { GrList } from 'react-icons/gr'
import { ActivityList } from '../activity-list'


export function BoardSideMenu({ onToggleMenu, dynamicClass, board }) {

  return (
    <section className={dynamicClass}>


      <button className='x-btn' onClick={onToggleMenu}> <IoMdClose className='x-icon' /> </button>
      <div className='menu-title'> <h3> Menu </h3> </div>
      <div className="activity-title-container">
        <span className=""><GrList /></span>
        <h3 className='activity-title-text'>Activity</h3>
      </div>
      {board.activities.length > 0 && <ActivityList board={board} onToggleMenu={onToggleMenu} />}
    </section>
  )
}