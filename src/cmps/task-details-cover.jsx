import React from "react"

export function TaskDetailsCover({ cover }) {

  return (
    <header>

      { cover?.bgColor && <div className="task-details-cover color" style={{ backgroundColor: `${cover.bgColor}` }}>
        <button>Cover</button>
      </div>}

      { cover?.imgURL && <div className="task-details-cover img " style={{ backgroundImage: `url('${cover.imgURL}')` }}>
        <button>Cover</button>
      </div>}
      
    </header>

  )
}