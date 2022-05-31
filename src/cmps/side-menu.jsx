import { IoMdClose } from 'react-icons/io'

export function SideMenu({ onToggleMenu, dynamicClass, board }) {

    return <section className={dynamicClass}>
        <button className='x-btn' onClick={onToggleMenu}> <IoMdClose className='x-icon' /> </button>
        <div className='menu-title'> <h3> Menu </h3>  </div>
        <div className='activities'>
            {board.activities.map(activity => <div className='activity' key={activity.id}>
                {activity.byMember.imgURL ? <div> <img className='member-img' src={activity.byMember.imgURL} alt="..." /> </div>
                    : <div className='member-img'> G </div>}
                <div className='activity-info'>
                    <h3 className='activity-text'> <span>{activity.byMember.fullName}</span> {activity.txt} </h3>
                    <h3 className='activity-time'> {activity.createdAt} </h3>
                </div>
            </div>)}
        </div>
    </section>
}