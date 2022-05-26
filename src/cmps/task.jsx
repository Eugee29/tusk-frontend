export const Task = ({ task, innerRef }) => {
  return (<section ref={innerRef} className='task-preview'>
    <h2 >{task.title}</h2>
  </section>
  )
}