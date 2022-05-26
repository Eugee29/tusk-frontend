import { useState } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { DragDropContext } from 'react-beautiful-dnd'
import { GroupPreview } from "./group-preview"

export const GroupList = (props) => {
  const [groups, setGroups] = useState(props.groups)

  const handleOnDragEnd = ({ destination, source, type }) => {
    if (!destination) return

    const groupsCopy = [...groups]

    if (type === 'TASK') {
      const destinationGroup = groupsCopy.find(group => group.id === destination.droppableId)
      const sourceGroup = groupsCopy.find(group => group.id === source.droppableId)
      const task = sourceGroup.tasks.splice(source.index, 1)[0]
      destinationGroup.tasks.splice(destination.index, 0, task)
    }

    if (type === 'GROUP') {
      const group = groupsCopy.splice(source.index, 1)[0]
      groupsCopy.splice(destination.index, 0, group)
    }


    props.onUpdateBoard(groupsCopy)
    setGroups(groupsCopy)
  }


  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId='groups' type='GROUP' direction='horizontal'>
        {(provided) => (
          <section className="group-list"
            {...provided.droppableProps} ref={provided.innerRef}
          >
            {groups.map((group, index) => <GroupPreview key={group.id} group={group} index={index} />)}
            {provided.placeholder}
          </section>
        )}
      </Droppable>
    </DragDropContext >
  )
}