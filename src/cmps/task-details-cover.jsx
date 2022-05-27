import React from "react"

export function TaskDetailsCover({ cover }) {
  console.log('TaskDetailsCover', cover);

  return (
    <header className="task-cover" style={{ backgroundColor: `${cover.bgColor}` }}>
      {cover.isFullCover ? 'isFullCover: true' : 'isFullCover: false'}
      <button>Cover</button>
    </header>
  )
}