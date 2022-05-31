import React, { useEffect, useState, useRef } from 'react'
import previewboard from '../assets/imgs/previewboard.svg'

export const ModalCreateBoard = ({ task }) => {
   if (task) { return }

   return (

      <section>

         <div className="create-board-preview">

            <div className="">
               <div className="" /*style=""*/>
                  <img src="" alt="" />
               </div>
            </div>
         </div>

         <div className="create-board-background">
            <h3 className="label">Background</h3>

            <div className="img-container">
               <button style={{ backgroundImage: `url('https://images.unsplash.com/photo-1653496905343-b1fc1277e3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDV8MzE3MDk5fHx8fHwyfHwxNjUzNzQzMTM5&ixlib=rb-1.2.1&q=80&w=200')` }}></button>
               <button style={{ backgroundImage: `url('https://images.unsplash.com/photo-1652543549421-ea252bd209f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDR8MzE3MDk5fHx8fHwyfHwxNjUzNzQzMTM5&ixlib=rb-1.2.1&q=80&w=200')` }}></button>
               <button style={{ backgroundImage: `url('https://images.unsplash.com/photo-1653450283266-c788c2ca4ab2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDN8MzE3MDk5fHx8fHwyfHwxNjUzODAwNzQ5&ixlib=rb-1.2.1&q=80&w=200')` }}></button>
               <button style={{ backgroundImage: `url('https://images.unsplash.com/photo-1653419831613-56ed2a1c8ea8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDJ8MzE3MDk5fHx8fHwyfHwxNjUzNzQzMTM5&ixlib=rb-1.2.1&q=80&w=200')` }}></button>
               {/* <div className="box-full" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1653592328269-09c14b3628f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNjUzNzQzMTM5&ixlib=rb-1.2.1&q=80&w=200')` }}></div> */}
            </div>

            <div className="color-container">
               <button style={{ backgroundColor: `#7BC86C` }}></button>
               <button style={{ backgroundColor: `#F5DD29` }}></button>
               <button style={{ backgroundColor: `#FFAF3F` }}></button>
               <button style={{ backgroundColor: `#EF7564` }}></button>
               <button style={{ backgroundColor: `#CD8DE5` }}></button>
               <button style={{ backgroundColor: `#5BA4CF` }}></button>
            </div>

         </div>
         <div className="create-board-title">
         </div>
      </section>
   )
}
