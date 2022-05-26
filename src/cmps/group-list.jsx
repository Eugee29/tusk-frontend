import { useState } from 'react'
import { GroupPreview } from "./group-preview"
import { DragDropContext } from 'react-beautiful-dnd'

export const GroupList = (props) => {
  const [groups, setGroups] = useState(props.groups)

  return (
    <DragDropContext
      onDragEnd={result => { }}
    >
      <section className="group-list">

        {groups.map(group => {
          console.log(group)
          return (
            <GroupPreview key={group.id} group={group} />
          )
        })}

      </section>
    </DragDropContext >
  )
}