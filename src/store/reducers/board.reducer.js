const initialState = {
    boards: [],
    boardt:[],
    lastRemovedBoard: null
}
export function boardReducer(state = initialState, action) {
    var newState = state
    var boards
    var boardt
    switch (action.type) {
        case 'SET_BOARDS':
            newState = { ...state, boards: action.boards }
            break
        case 'REMOVE_BOARD':
            const lastRemovedBoard = state.boards.find(board => board._id === action.boardId)
            boards = state.boards.filter(board => board._id !== action.boardId)
            newState = { ...state, boards, lastRemovedBoard}
            break
        case 'ADD_BOARD':
            newState = { ...state, boards:[...state.boards, action.board]}
            break
        case 'UPDATE_BOARD':
            boards = state.boards.map(board => (board._id === action.board._id)? action.board : board)
            newState = { ...state, boards}
            break
        case 'ADD_TO_BOARDT':
            newState = { ...state, boardt:[...state.boardt, action.board]}
            break
        case 'REMOVE_FROM_BOARDT':
            boardt = state.boardt.filter(board => board._id !== action.boardId)
            newState = { ...state, boardt}
            break
        case 'CLEAR_BOARDT':
            newState = { ...state, boardt: []}
            break
        case 'UNDO_REMOVE_BOARD':
            if (state.lastRemovedBoard) {
                newState = { ...state, boards: [...state.boards, state.lastRemovedBoard], lastRemovedBoard: null}
            }
            break
        default:
    }
    // For debug:
    window.boardState = newState
    // console.log('Prev State:', state)
    // console.log('Action:', action)
    // console.log('New State:', newState)
    return newState

}
