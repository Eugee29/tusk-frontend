import React from "react"

export function TaskDetailsInfo({ task }) {
   console.log('TaskDetailsInfo', task.dueDate);
   //memberIds, labelIds, dueDate

   const initials = (member) => ([...member.fullName])

   return (
      <section className="task-info" >
         <h3 class="task-member-title">Members</h3>

         {task.memberIds.map( member =>
            <a class="member"><span>{`${initials(member)[0]}${initials(member)[1]}`}</span></a>)}
         <a class="members-add-button "><span>+</span></a>

      </section>
   )
}