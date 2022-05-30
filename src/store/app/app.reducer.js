const initialState = {
   modal: null
}

export function appReducer(state = initialState, action) {
   switch (action.type) {
      case 'TOGGLE_MODAL':
         //  if (action.modal.category === state.modal.category) action.modal. === state.modal.category
         return { ...state, modal: action.modal }
      default:
         return state
   }
}