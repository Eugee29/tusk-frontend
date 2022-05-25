import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadBoards } from '../store/actions/board.action.js'

import { boardService } from '../services/board.service.js'


const _Workspace = ({ loadBoards, boards }) => {

   useEffect(() => {
      loadBoards()
   }, [])

   return <main>Workspace
      {boards[0]._id}

   </main>

}

function mapStateToProps(state) {
   return {
       boards: state.boardModule.boards
   }
}
const mapDispatchToProps = {
   loadBoards
}


export const Workspace = connect(mapStateToProps, mapDispatchToProps)(_Workspace)