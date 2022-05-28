import React from 'react'

export const ModalCover = ({ task }) => {

   if (!task) { return }

   return (
      <React.Fragment>

         <div className="size-section">
            <h3 className="label">Size</h3>
            <div className="box-container">
               <div className="box-half">
                  <div className="background" style={{ backgroundImage: `url('${task.style.imgURL}')` }}></div>

                  <div className="lines">
                     <div className="lines_1"></div>
                     <div className="lines_2"></div>
                     <div className="lines_3">
                        <div className="lines_3_1"></div>
                        <div className="lines_3_2"></div>
                     </div>
                     <div className="lines_4"></div>
                  </div>
               </div>

               <div className="box-full" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('${task.style.imgURL}')` }}>

                  <div className="lines">
                     <div className="lines_1"></div>
                     <div className="lines_2"></div>
                  </div>
               </div>
               <span className="cover-btn">Remove cover</span>
            </div>
         </div>

         <div className="textcolor-section">
            <h3 className="label">Text color</h3>
            <div className="box-container">
               <div className="box-full" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${task.style.imgURL}')` }}>
                  <h3>{task.title}</h3>
               </div>
               <div className="box-full" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('${task.style.imgURL}')` }}>
                  <h3 className="dark">{task.title}</h3>
               </div>

            </div>
         </div>

         <div className="colors-section">
            <h3 className="label">Colors</h3>
            <div className="box-container">

               <button style={{ backgroundColor: `#7BC86C` }}></button>
               <button style={{ backgroundColor: `#F5DD29` }}></button>
               <button style={{ backgroundColor: `#FFAF3F` }}></button>
               <button style={{ backgroundColor: `#EF7564` }}></button>
               <button style={{ backgroundColor: `#CD8DE5` }}></button>
               <button style={{ backgroundColor: `#5BA4CF` }}></button>
               <button style={{ backgroundColor: `#29CCE5` }}></button>
               <button style={{ backgroundColor: `#6DECA9` }}></button>
               <button style={{ backgroundColor: `#FF8ED4` }}></button>
               <button style={{ backgroundColor: `#172B4D` }}></button>
            </div>
         </div>

         <div className="attachments-section">
            <h3 className="label">Attachments</h3>
            <div className="box-container">
               <div className="box-full" style={{ backgroundImage: `url('${task.style.imgURL}')` }}></div>
            </div>
            <span className="cover-btn">Uplaod a cover image</span>
         </div>

         <div className="unsplash-section">
            <h3 className="label">Photos from Unsplash</h3>
            <div className="box-container">
               <div className="box-full" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1653511442060-00c7b10827c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDZ8MzE3MDk5fHx8fHwyfHwxNjUzNzQzMTM5&ixlib=rb-1.2.1&q=80&w=200')` }}>
                  {/* <div class="link hide">
                     <a class="" href="https://unsplash.com/@pawel_czerwinski?utm_source=trello&amp;utm_medium=referral&amp;utm_campaign=api-credit" target="_blank" title="Pawel Czerwinski">Pawel Czerwinski</a>
                  </div> */}
               </div>
               <div className="box-full" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1653496905343-b1fc1277e3fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDV8MzE3MDk5fHx8fHwyfHwxNjUzNzQzMTM5&ixlib=rb-1.2.1&q=80&w=200')` }}></div>
               <div className="box-full" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1652543549421-ea252bd209f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDR8MzE3MDk5fHx8fHwyfHwxNjUzNzQzMTM5&ixlib=rb-1.2.1&q=80&w=200')` }}></div>
               <div className="box-full" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1652543549421-ea252bd209f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDR8MzE3MDk5fHx8fHwyfHwxNjUzNzQzMTM5&ixlib=rb-1.2.1&q=80&w=200')` }}></div>
               <div className="box-full" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1653419831613-56ed2a1c8ea8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDJ8MzE3MDk5fHx8fHwyfHwxNjUzNzQzMTM5&ixlib=rb-1.2.1&q=80&w=200')` }}></div>
               <div className="box-full" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1653592328269-09c14b3628f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=Mnw3MDY2fDB8MXxjb2xsZWN0aW9ufDF8MzE3MDk5fHx8fHwyfHwxNjUzNzQzMTM5&ixlib=rb-1.2.1&q=80&w=200')` }}></div>
            </div>
            <span className="cover-btn">Search for photos</span>
         </div>

      </React.Fragment>
   )

}