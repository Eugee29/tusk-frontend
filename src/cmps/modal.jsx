import { connect, useSelector } from 'react-redux'

const _Modal = (props) => {

   const { board } = useSelector((storeState) => storeState.boardModule)

   return (
      <div className="nice-popup">
         <header>
            <div className="label">LABEL</div>
            <button >X</button>
         </header>

         <main className="main-modal">

            <div className="size-section">
               <h3 className="label">Size</h3>
               <div className="box-container">
                  <div className="box-half">
                     <div className="background" style={{ backgroundImage: `url('${props.task.style.imgURL}')` }}></div>

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

                  <div className="box-full" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('${props.task.style.imgURL}')` }}>

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
                  <div className="box-full" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${props.task.style.imgURL}')` }}>
                     <h3>{props.task.title}</h3>
                  </div>
                  <div className="box-full" style={{ backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('${props.task.style.imgURL}')` }}>
                     <h3 className="dark">{props.task.title}</h3>
                  </div>

               </div>
            </div>

            <div className="colors-section">
               <h3 className="label">Colors</h3>
               <div className="box-container">
                  {board && board.labels.map(label =>
                     <button key={label.id} style={{ backgroundColor: `${label.color}` }}></button>
                  )}
                  <button style={{ backgroundColor: `#29CCE5` }}></button>
                  <button style={{ backgroundColor: `#6DECA9` }}></button>
                  <button style={{ backgroundColor: `#FF8ED4` }}></button>
                  <button style={{ backgroundColor: `#172B4D` }}></button>
               </div>
            </div>

         </main>

      </div>)

}

function mapStateToProps(state) {
   return {
      board: state.boardModule.board
   }
}

export const Modal = connect(mapStateToProps)(_Modal)