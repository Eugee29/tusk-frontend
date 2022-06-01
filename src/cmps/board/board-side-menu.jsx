import { utilService } from '../../services/util.service'
import { activityService } from '../../services/activity.service'

import { IoMdClose } from 'react-icons/io'

export function BoardSideMenu({ onToggleMenu, dynamicClass, board }) {

  return (
    <section className={dynamicClass}>
      <button className='x-btn' onClick={onToggleMenu}> <IoMdClose className='x-icon' /> </button>
      <div className='menu-title'> <h3> Menu </h3>  </div>
      {board.activities.length > 0 && <div className='activities'>
        {board.activities.map(activity => <div className='activity' key={activity.id}>
          {activity.byMember.imgURL ? <div> <img className='member-img' src={activity.byMember.imgURL} alt="..." /> </div>
            : <div className='member-img'> G </div>}
          <div className='activity-info' key={activity.id}>
            <h3 className='activity-text'> <span className="fullname">{activity.byMember.fullname}&nbsp;</span>
              {activityService.getActivityText(activity, board, onToggleMenu)
                .map((text, index) => <span key={index}>{text}&nbsp;</span>)}</h3>
            <h3 className='activity-time'> {utilService.getTimeAgo(activity.createdAt)} </h3>
          </div>
        </div>)}
      </div>}
    </section>
  )
}