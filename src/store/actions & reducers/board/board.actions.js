export function loadBoard() {
    return async dispatch => {
        try {
            dispatch({ type: 'LOAD_BOARD' })
            const users = await userService.getUsers()
            dispatch({ type: 'SET_USERS', users })
        } catch (err) {
            console.log('BoardActions: err in loadBoard', err)
        } finally {
            dispatch({ type: 'LOADING_DONE' })
        }
    }
}