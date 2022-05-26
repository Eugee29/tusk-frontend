// import { Draggable } from 'react-beautiful-dnd'

export function TaskPreview({ task, index, /*innerRef*/ }) {
  return (
    <section
    //  ref={innerRef}
    >
      {/* <Draggable draggableId={task.id} index={index}> */}
      {/* {provided => ( */}
      <section
        className="task-preview"
      // {...provided.draggableProps}
      // {...provided.dragHandleProps}
      // ref={provided.innerRef}
      >
        <h2> {task.title} </h2>
      </section>
      {/* )} */}
      {/* </Draggable> */}
    </section>
  )
}