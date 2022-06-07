export const DashboardOverdue = ({ tasks }) => {
  const overdues = tasks.filter(
    (task) => task.dueDate && Date.now() - task.dueDate < 0
  )

  return (
    <div className="dashboard-overdue dashboard-side-item">
      <h1 className="title">Overdue</h1>
      <h2 className="info">{overdues.length}</h2>
    </div>
  )
}
