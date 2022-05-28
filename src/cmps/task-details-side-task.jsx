import React from "react"

export function TaskDetailsSideTask({ cover }) {

   return (
      <section className="side-task">

         <h3 className="label-header">Suggested</h3>
         
         <div className="join-container">
            <a className="sidebar-button" href="#" title="Join">
               <span className=""></span>
               <span className="">Join</span>
            </a>
         </div>

         <div className="">
            <h3 className="label-header">Add to card</h3>

            <div className="">

               <a className="sidebar-button" href="#" title="Members">
                  <span className=""></span>
                  <span className="">Members</span>
               </a>

               <a className="sidebar-button" href="#" title="Labels">
                  <span className=""></span>
                  <span className="">Labels</span>
               </a>

               <a className="sidebar-button" href="#" title="Checklist">
                  <span className=""></span>
                  <span className="">Checklist</span></a>

               <a className="sidebar-button" href="#" title="Attachment">
                  <span className=""></span>
                  <span className="">Dates</span>
               </a>

               <a className="sidebar-button" href="#" title="Attachment">
                  <span className=""></span>
                  <span className="">Attachment</span>
               </a>

               <a className="sidebar-button" href="#" title="Cover">
                  <span className=""></span>
                  <span className="">Cover</span>
               </a>

            </div>
         </div>
      </section>

   )
}


