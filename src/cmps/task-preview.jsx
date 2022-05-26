import { RiPencilLine } from 'react-icons/ri'

export function TaskPreview({ task }) {
    console.log(task)

    return <section className="task-preview">
        <h2 className='task-title'> {task.title} </h2>
        <button> <RiPencilLine className='btn-icon'/> </button>
    </section>
  
}