export const toggleModal = (modal) => {
  return dispatch => {
    dispatch({ type: 'TOGGLE_MODAL', modal })
  }
}