import { useEffect, useState } from "react"
import { boardService } from "../services/board.service"

export function ModalGroupActions({ onUpdateBoard, group, boardId }) {

    const [board, setBoard] = useState(null)

    useEffect(() => {
        getBoard()
    }, [])

    const getBoard = async () => {
        const board = await boardService.getById(boardId)
        setBoard(board)
    }

    const archiveGroup = () => {
        const newBoard = { ...board }
        const { groups } = newBoard
        const groupIndex = groups.findIndex(currGroup => currGroup.id === group.id)
        const newGroups = groups.filter((currGroup, index) => index !== groupIndex)
        const boardToUpdate = { ...board, groups: newGroups }
        const activity = {
            actionType: 'delete group',
            group: {
                id: group.id,
                title: group.title
             }
        }
        setBoard(boardToUpdate)
        onUpdateBoard(boardToUpdate, activity)
    }


    return <section className="modal-group-actions">
        <div onClick={archiveGroup}> Archive list... </div>
    </section>
}