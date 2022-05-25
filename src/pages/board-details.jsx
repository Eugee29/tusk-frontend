import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { loadBoards } from '../store/actions/board.action.js'
import { boardService } from '../services/board.service.js'

import { BoardList } from '../cmps/board-list.jsx'

const _BoardDetails = () => {

   // useEffect(() => {
   //    loadBoards()
   // }, [])

   return (
      <main>
         <h1>Board Details</h1>
      </main>
      )

}

function mapStateToProps(state) {
   return {
      boards: state.boardModule.boards
   }
}
const mapDispatchToProps = {
   loadBoards
}

export const BoardDetails = connect(mapStateToProps, mapDispatchToProps)(_BoardDetails)