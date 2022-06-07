export const DashboardAllTasks = ({ tasks }) => {
  return (
    <div className="dashboard-all-tasks dashboard-side-item">
      <h1 className="title">All tasks</h1>
      <h2 className="info">{tasks.length}</h2>
    </div>
  )
}
