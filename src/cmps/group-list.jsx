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

    setGroups(groupsCopy)


    // const newGroups = [...groups]
    // const group = newGroups.splice(result.source.index, 1)[0]
    // newGroups.splice(result.destination.index, 0, group)
    // setGroups(newGroups)
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
  console.log(groups)
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId='groups' type='GROUP'>
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