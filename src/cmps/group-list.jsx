import { useState } from 'react'
import { GroupPreview } from "./group-preview"
// import { DragDropContext } from 'react-beautiful-dnd'

export const GroupList = (props) => {
  const [groups, setGroups] = useState(props.groups)

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
    <section className="group-list">
      {/* <DragDropContext onDragEnd={onDragEnd}> */}
      {groups.map(group => <GroupPreview key={group.id} group={group} />)}
      {/* </DragDropContext > */}
    </section>
  )
}