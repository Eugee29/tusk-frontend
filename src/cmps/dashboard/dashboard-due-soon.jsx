export const DashboardDueSoon = ({ tasks }) => {
  const dueSoons = tasks.filter(
    (task) => task.dueDate && Date.now() - task.dueDate < 1000 * 60 * 60 * 24
  )

  return (
    <div className="dashboard-due-soon dashboard-side-item">
      <h1 className="title">Due soon</h1>
      <h2 className="info">{dueSoons.length}</h2>
    </div>
  )
}
