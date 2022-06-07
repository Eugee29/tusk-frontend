import { Bar } from 'react-chartjs-2'

export const DashboardPerGroup = ({ tasks, groups }) => {
  const labels = groups.map((group) => group.title)

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
  }

  const data = {
    labels,
    datasets: [
      {
        label: 'Tasks',
        data: groups.map((group) => group.tasks.length),
        backgroundColor: 'rgb(66, 82, 110)',
        borderRadius: 3,
      },
    ],
  }
  return (
    <div className="dashboard-per-group dashboard-main-item">
      <h1 className="title">Tasks per group</h1>
      <div className="graph-container">
        <Bar options={options} data={data} />
      </div>
    </div>
  )
}
