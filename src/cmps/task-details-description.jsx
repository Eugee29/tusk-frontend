import React, { useEffect, useState, useRef } from 'react'
import { connect, useSelector } from 'react-redux'

function _TaskDetailsDescription({ task }) {
   //memberIds, labelIds, dueDate

   const { board } = useSelector((storeState) => storeState.boardModule)

   return (
      <section className="task-details-description" >

         {/* Description */}
         {/* {task.description} */}

         <div class="description-title-container">
            <span></span>
            <h3 >Description</h3>
         </div>

         {/* <div className="js-fill-card-detail-desc">
            <div>
               <div className="js-react-root">
                  <div className="window-module">
                     <div className="window-module-title window-module-title-no-divider description-title">
                        <span className="icon-description icon-lg window-module-title-icon"></span>
                        <h3 className="u-inline-block">Description</h3>
                        <div attr="desc" className="editable">
                           <a href="#" className="nch-button ml-4 hide-on-edit js-show-with-desc js-edit-desc js-edit-desc-button hide">Edit</a>
                           <span className="editing-members-description js-editing-members-description hide"></span>
                        </div>
                     </div>
                     <div className="u-gutter">
                        <div attr="desc" className="editable">
                           <div className="description-content js-desc-content">
                              <div className="description-content-fade-button">
                                 <span className="description-content-fade-button-text">Show full description.</span>
                              </div>
                              <div dir="auto" className="current markeddown hide-on-edit js-desc js-show-with-desc hide">
                              </div>
                              <p className="u-bottom js-hide-with-desc">
                                 <a href="#" className="description-fake-text-area hide-on-edit js-edit-desc js-hide-with-draft">Add a more detailed description…</a>
                              </p>
                              <div className="description-edit edit">
                                 <a href="#" className="helper nch-button js-format-help">Formatting help</a>
                                 <textarea placeholder="Add a more detailed description…" className="field field-autosave js-description-draft description card-description"></textarea></div><p class="edits-warning quiet">You have unsaved edits on this field. <a href="#" class="js-view-edits">View edits</a> - <a href="#" class="js-discard-edits">Discard</a></p><p class="edits-error error">Edit not saved.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div> */}





      </section>






   )
}

function mapStateToProps(state) {
   return {
      board: state.boardModule.board
   }
}

export const TaskDetailsDescription = connect(mapStateToProps)(_TaskDetailsDescription)