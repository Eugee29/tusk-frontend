import React, { useState } from 'react'

import { IoMdClose } from 'react-icons/io'
import { GrList } from 'react-icons/gr'
import { FiArchive } from 'react-icons/fi'
import { BsImage } from 'react-icons/bs'

import { ActivityList } from '../activity-list'
import { ArchivedList } from '../archived-list'

export function BoardSideMenu({ onToggleMenu, dynamicClass, board, onUpdateBoard }) {

   const [isArchivedOpen, setIsArchivedOpen] = useState(false)

   const onToggleArchived = () => {
      setIsArchivedOpen(!isArchivedOpen)
   }

   return (
      <section className={dynamicClass}>

         <button className='x-btn' onClick={onToggleMenu}> <IoMdClose className='x-icon' /> </button>
         <div className='menu-title'> <h3> Menu </h3> </div>

         <div className="activity-title-container hover" onClick={onToggleArchived} >
            <span className=""><FiArchive /></span>
            <h3 className='activity-title-text'>Archived items</h3>
         </div>
         { isArchivedOpen && <ArchivedList board={board} onUpdateBoard={onUpdateBoard}/>}

         <div className="line-break"></div>

         <div className="activity-title-container hover"  >
            <span className=""><BsImage /></span>
            <h3 className='activity-title-text'>Change background</h3>
         </div>

         <div className="line-break"></div>

         <div className="activity-title-container">
            <span className=""><GrList /></span>
            <h3 className='activity-title-text'>Activity</h3>
         </div>
         {board.activities.length > 0 && <ActivityList board={board} onToggleMenu={onToggleMenu} />}
      </section>
   )
}