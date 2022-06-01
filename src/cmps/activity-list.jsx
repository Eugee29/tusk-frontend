
import { utilService } from '../services/util.service'
import { activityService } from '../services/activity.service'

export function ActivityList(props) {

    const {board} = props
    let task, onToggleMenu
    if (props.task) task = props.task
    // console.log(task)
    if (props.onToggleMenu) onToggleMenu = props.onToggleMenu

    const activities = (task) ? activityService.getTaskActivities(task.id, board) : board.activities
    // console.log(activities, task)

    return (
        <div className='activities'>
            {activities.map(activity => <div className='activity' key={activity.id}>
                {activity.byMember.imgURL ? <div> <img className='member-img' src={activity.byMember.imgURL} alt="..." /> </div>
                    : <div className='member-img'> G </div>}
                <div className='activity-info' key={activity.id}>
                    <h3 className='activity-text'> <span className="fullname">{activity.byMember.fullname}&nbsp;</span>

                        {task && activityService.getActivityText(activity, board, task)
                            .map((text, index) => <span key={index}>{text}&nbsp;</span>)}

                        {!task && activityService.getActivityText(activity, board, onToggleMenu)
                            .map((text, index) => <span key={index}>{text}&nbsp;</span>)}

                    </h3>
                    <h3 className='activity-time'> {utilService.getTimeAgo(activity.createdAt)} </h3>
                </div>
            </div>)}
        </div>
    )
}
