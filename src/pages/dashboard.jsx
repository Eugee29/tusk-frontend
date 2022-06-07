import { useNavigate, useOutletContext } from 'react-router-dom'

import { VscClose } from 'react-icons/vsc'
import { DashboardAllTasks } from '../cmps/dashboard/dashboard-all-tasks'
import { DashboardDueSoon } from '../cmps/dashboard/dashboard-due-soon'
import { DashboardOverdue } from '../cmps/dashboard/dashboard-overdue'
import { DashboardPerGroup } from '../cmps/dashboard/dashboard-per-group'

export const Dashboard = () => {
  const { board } = useOutletContext()
  const navigate = useNavigate()

  const getTasks = () => {
    let tasks = []
    board.groups.forEach((group) =>
      group.tasks.forEach((task) => tasks.push(task))
    )
    return tasks
  }

  const tasks = getTasks()

  return (
    <main className="dashboard">
      <button
        className="close-btn"
        onClick={() => navigate(`/board/${board._id}`)}
      >
        <VscClose className="close-icon" />
      </button>

      <section className="dashboard-grid">
        <div className="all-task-container grid-item">
          <DashboardAllTasks tasks={tasks} />
        </div>
        <div className="due-soon-container grid-item">
          <DashboardDueSoon tasks={tasks} />
        </div>
        <div className="overdue-container grid-item">
          <DashboardOverdue tasks={tasks} />
        </div>
        <div className="tasks-per-group-container grid-item">
          <DashboardPerGroup tasks={tasks} groups={board.groups} />
        </div>
        <div className="tasks-per-label-container grid-item"></div>
        <div className="tasks-per-member-container grid-item"></div>
      </section>
    </main>
  )
}
