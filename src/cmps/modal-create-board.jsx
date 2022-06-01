import React, { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setModal } from '../store/app/app.actions'
import { boardService } from '../services/board.service'
import { addBoard } from '../store/board/board.action.js'

import previewboard from '../assets/imgs/previewboard.svg'

export const ModalCreateBoard = () => {

  const { user } = useSelector(({ userModule }) => userModule)
  const [boardTitle, setBoardTitle] = useState('')
  const [boardBg, setBoardBg] = useState('')
  const [isEnabeld, setIsEnabeld] = useState(false)

  const dispatch = useDispatch()
  const history = useNavigate()

  const handleChange = ({ target }) => {
    setBoardTitle(target.value)
    if (target.value.length > 0 && boardBg) setIsEnabeld(true)
    else setIsEnabeld(false)
  }

  const onToggeleBgi = (url) => {
    if (boardTitle) setIsEnabeld(true)
    setBoardBg(url)
  }

  const onToggeleBgc = (color) => {
    if (boardTitle) setIsEnabeld(true)
    setBoardBg(color)
  }

  const onCreateBoard = async () => {
    if (!isEnabeld) return

    const board = boardService.getEmptyBoard()
    board.title = boardTitle
    board.style = { bgImg: boardBg }
    board.createdAt = Date.now()
    board.isStarred = false
    board.createdBy = {
      _id: user._id,
      fullname: user.fullname,
      username: user.username,
      imgURL: user.imgURL
    }
    const newBoard = await dispatch(addBoard(board))

    dispatch(setModal(null))
    history(`/board/${newBoard._id}`)
  }

  const enabeldToCreate = isEnabeld ? 'allowed' : ''

  return (

    <section>

      <div className="create-board-preview">
        {<div className="preview-img" style={{ background: boardBg.length > 10 ? `url(${boardBg})` : `${boardBg}` }}>
          <img src={previewboard} alt="" />
        </div>}
      </div>

      <div className="create-board-background">
        <h3 className="label">Background</h3>

        <div className="img-container">
          <button
            onClick={() => onToggeleBgi('https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2400x1600/6a13f05ea8b5298caa2a79ac725e9781/photo-1653856114603-d67a3735c376.jpg')}
            style={{ backgroundImage: `url('https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2400x1600/6a13f05ea8b5298caa2a79ac725e9781/photo-1653856114603-d67a3735c376.jpg')` }}></button>

          <button
            onClick={() => onToggeleBgi('https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2400x1600/aafa6b020b198668ccc19173b2a5f075/photo-1652543549421-ea252bd209f0.jpg')}
            style={{ backgroundImage: `url('https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2400x1600/aafa6b020b198668ccc19173b2a5f075/photo-1652543549421-ea252bd209f0.jpg')` }}></button>

          <button
            onClick={() => onToggeleBgi('https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2400x1600/81cf80ef2dd5e1b637d44bb127a22af3/photo-1653233871814-7e7b75102e3c.jpg')}
            style={{ backgroundImage: `url('https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2400x1600/81cf80ef2dd5e1b637d44bb127a22af3/photo-1653233871814-7e7b75102e3c.jpg')` }}></button>

          <button
            onClick={() => onToggeleBgi('https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2400x1600/50bce1dda7460d91004fffb0bcfd0f0e/photo-1652541594278-d7dbc83be9d6.jpg')}
            style={{ backgroundImage: `url('https://trello-backgrounds.s3.amazonaws.com/SharedBackground/2400x1600/50bce1dda7460d91004fffb0bcfd0f0e/photo-1652541594278-d7dbc83be9d6.jpg')` }}></button>
        </div>

        <div className="color-container">
          <button
            onClick={() => onToggeleBgc('#7BC86C')}
            style={{ backgroundColor: `#7BC86C` }}></button>
          <button
            onClick={() => onToggeleBgc('#F5DD29')}
            style={{ backgroundColor: `#F5DD29` }}></button>
          <button
            onClick={() => onToggeleBgc('#FFAF3F')}
            style={{ backgroundColor: `#FFAF3F` }}></button>
          <button
            onClick={() => onToggeleBgc('#EF7564')}
            style={{ backgroundColor: `#EF7564` }}></button>
          <button
            onClick={() => onToggeleBgc('#CD8DE5')}
            style={{ backgroundColor: `#CD8DE5` }}></button>
          <button
            onClick={() => onToggeleBgc('#5BA4CF')}
            style={{ backgroundColor: `#5BA4CF` }}></button>
        </div>

      </div>
      <div className="create-board-title">
        <h3 className="label">Board title <span>*</span></h3>
        <div className="board-title">
          <input type="text" name='search' value={boardTitle} onChange={handleChange} />
          <div className="title-msg ">
            <span role="img" aria-label="wave" >👋</span>
            <p>Board title is required</p>
          </div>
        </div>
        <span onClick={onCreateBoard} className={`cover-btn ${enabeldToCreate}`}>Create</span>

      </div>
    </section>
  )
}


