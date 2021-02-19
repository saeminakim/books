const actions = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return [
        ...state, 
        {
          ...action.payload
        }
      ]
    case 'REMOVE_LIST':
      return [
        ...state.filter(item => item.id != action.payload)
      ]
    default:
      return state
  }
}
export default actions;