export const DashboardComplete = ({ tasks }) => {
  const completeTasks = tasks.filter((task) => task.isComplete)

  return (
    <div className="dashboard-due-soon dashboard-side-item">
      <h1 className="title">Complete</h1>
      <h2 className="info">{completeTasks.length}</h2>
    </div>
  )
}
