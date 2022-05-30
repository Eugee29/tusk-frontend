import { useState } from 'react'
import { Droppable, DragDropContext } from 'react-beautiful-dnd'
import { GroupPreview } from "./group-preview"

export const GroupList = ({ board, onUpdateBoard }) => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleLabels = () => {
    setIsOpen(!isOpen)
  }

  const handleOnDragEnd = ({ destination, source, type }) => {
    if (!destination) return
    const groupsCopy = [...board.groups]
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
    onUpdateBoard({ ...board, groups: groupsCopy })
  }

  const onUpdateGroup = (groupToUpdate) => {
    const updatedGroups = board.groups.map(group => group.id === groupToUpdate.id ? groupToUpdate : group)
    onUpdateBoard({ ...board, groups: updatedGroups })
  }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      {/* Setting each group to be a droppable area, only for groups, by wrapping is with the Droppable CMP */}
      <Droppable droppableId='groups' type='GROUP' direction='horizontal'>
        {provided => (
          <section className="group-list"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {board.groups.map((group, index) => <GroupPreview key={group.id} group={group} index={index} toggleLabels={toggleLabels} isOpen={isOpen} onUpdateGroup={onUpdateGroup} />)}
            {provided.placeholder}
          </section>
        )}
      </Droppable>
    </DragDropContext >
  )
}