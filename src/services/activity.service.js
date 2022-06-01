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

function getActivityText(activity, board, diff) {
  
  let onToggleMenu, task
  
  if (typeof diff === ('function')) {
    onToggleMenu = diff
    task = false
  } else {
    task = diff
    onToggleMenu = false
  }

  const linkPath = (activity.task) ? `/board/${board._id}/${activity.group.id}/${activity.task.id}` : null
  let boardText, taskText

    switch (activity.actionType) {
        case 'delete task':
            boardText = ['deleted', <Link to={linkPath} onClick={onToggleMenu}>{activity.task.title}</Link>]
            break

        case 'add task':
            boardText = ['added', <Link to={linkPath} onClick={onToggleMenu}>{activity.task.title}</Link>, `to ${activity.group.title}`]
            break

        case 'move':
            boardText = ['moved', <Link to={linkPath} onClick={onToggleMenu}>{activity.task.title}</Link>, `to ${activity.group.title}`]
            taskText = [`moved this card from ${activity.group.sourceTitle} to ${activity.group.title}`]
            break
        case 'comment':
            boardText = ['on', <Link to={linkPath} onClick={onToggleMenu}>{activity.task.title}</Link>]
            taskText = [null]
            break
        case 'delete group':
            boardText = [`deleted list ${activity.group.title}`]
            break
        case 'add group':
            boardText = [`added ${activity.group.title} to this board`]
            break

        default:
            boardText = null
    }
    if (task) return taskText
    else return boardText
}

function getTaskActivities(taskId, board) {
  console.log(board.activities)
    const taskActivities = board.activities.filter(activity => {
      if (!activity.task) return false
      else return activity.task.id === taskId})
    return taskActivities
}