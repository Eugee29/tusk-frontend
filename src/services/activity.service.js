import { utilService } from "./util.service"

export const activityService = {
    getActivityUpdatedBoard
}

function getActivityUpdatedBoard(board, activity) {
    //activity = {task?: *TASKID*, action: {actionType, element}}
    const task = (activity.task) ? activity.task : null
    const taskTitle = (activity.task) ? activity.task.title : null
    const groupTitle = (activity.groupTitle) ? activity.groupTitle : null

    let actionTxt
    // const byMember = getMember() // WHEN WE HAVE USERS
    const byMember = { fullname: 'Guest' }

    switch (activity.actionType) {
        case 'delete task':
            actionTxt = `deleted ${taskTitle}`
            break
        case 'delete group':
            actionTxt = `deleted list ${groupTitle}`
            break
        case 'add task':
            actionTxt = `added ${taskTitle} to ${groupTitle}`
            break
        case 'add group':
            actionTxt = `added ${groupTitle} to this board`
            break
        case 'move':
            actionTxt = `moved ${taskTitle} to ${groupTitle}`
            break
        case 'comment':
            actionTxt = `on ${taskTitle}`
            break
        default:
            actionTxt = null
    }

    const newActivity = {
        byMember: {
            //getMember. if (!member) ====>
            fullname: 'Guest'
        },
        createdAt: Date.now(),
        id: utilService.makeId(),
        task,
        txt: actionTxt
    }

    const newActivities = [newActivity, ...board.activities]
    const newBoard = { ...board, activities: newActivities }
    return newBoard
}