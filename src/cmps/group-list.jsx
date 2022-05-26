import { useState } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { DragDropContext } from 'react-beautiful-dnd'
import { GroupPreview } from "./group-preview"

export const GroupList = (props) => {
  const [groups, setGroups] = useState(props.groups)

  const handleOnDragEnd = (result) => {
    if (!result.destination) return
    const newGroups = [...groups]
    const group = newGroups.splice(result.source.index, 1)[0]
    newGroups.splice(result.destination.index, 0, group)
    setGroups(newGroups)
  }

  // const onDragEnd = result => {
  //   const { destination, source } = result

  //   if (!destination) return
  //   if (destination.droppableId === source.droppableId
  //     && destination.index === source.index) return



  //   const fromGroupIdx = groups.findIndex(group => group.id === source.droppableId)
  //   const toGroupIdx = groups.findIndex(group => group.id === destination.droppableId)

  //   const fromTasks = groups[fromGroupIdx].tasks
  //   const toTasks = groups[toGroupIdx].tasks

  //   const task = fromTasks.splice(source.index, 1)[0]
  //   toTasks.splice(destination.index, 0, task)

  //   const newFromGroup = { ...groups[fromGroupIdx], tasks: fromTasks }
  //   const newToGroup = { ...groups[toGroupIdx], tasks: toTasks }

  //   const newGroups = [...groups]
  //   newGroups[fromGroupIdx] = newFromGroup
  //   newGroups[toGroupIdx] = newToGroup
  //   setGroups(newGroups)
  // }

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId='groups'>
        {(provided) => (
          <section className="group-list" {...provided.droppableProps} ref={provided.innerRef}>
            {groups.map((group, index) => <GroupPreview key={group.id} group={group} index={index} />)}
            {provided.placeholder}
          </section>
        )}
      </Droppable>
    </DragDropContext>
  )
}