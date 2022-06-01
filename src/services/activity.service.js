import { Link } from "react-router-dom"
import { utilService } from "./util.service"

export const activityService = {
  getActivityUpdatedBoard,
  getTaskActivities,
  getActivityText
}

function getActivityUpdatedBoard(board, activity) {

  let isComment = false
  if (activity.actionType === 'comment') isComment = true

  const newActivity = {
    byMember: {
      //getMember. if (!member) ====>
      fullname: 'Guest'
    },
    createdAt: Date.now(),
    id: utilService.makeId(),
    task: activity.task,
    group: activity.group,
    actionType: activity.actionType,
    isComment
  }

  const newActivities = [newActivity, ...board.activities]
  const newBoard = { ...board, activities: newActivities }
  return newBoard
}

function getActivityText(activity, board, onToggleMenu) {

  const linkPath = (activity.task) ? `/board/${board._id}/${activity.group.id}/${activity.task.id}` : null
  let text

    switch (activity.actionType) {
        case 'delete task':
            text = ['deleted', <Link to={linkPath} onClick={onToggleMenu}>{activity.task.title}</Link>]
            break

        case 'add task':
            text = ['added', <Link to={linkPath} onClick={onToggleMenu}>{activity.task.title}</Link>, `to ${activity.group.title}`]
            break

        case 'move':
            text = ['moved', <Link to={linkPath} onClick={onToggleMenu}>{activity.task.title}</Link>, `to ${activity.group.title}`]
            break
        case 'comment':
            text = ['on', <Link to={linkPath} onClick={onToggleMenu}>{activity.task.title}</Link>]
            break
        case 'delete group':
            text = [`deleted list ${activity.group.title}`]
            break
        case 'add group':
            text = [`added ${activity.group.title} to this board`]
            break

        default:
            text = null
    }
    return text
}

function getTaskActivities(taskId, board) {
    const taskActivities = board.activities.filter(activity => activity.task.id === taskId)
    // return taskActivities
}