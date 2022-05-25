export function TaskPreview({ task }) {
    console.log(task)

    return <section className="task-preview">
        <h2> {task.title} </h2>
    </section>
}