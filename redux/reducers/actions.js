const actions = (state = [], action) => {
  switch (action.type) {
    case 'ADD_LIST_SUCCEEDED':
      return [
        ...state, 
        {
          ...action.payload
        }
      ]
    case 'REMOVE_LIST_SUCCEEDED':
      return [
        ...state.filter(item => item.id != action.payload)
      ]
    case 'FETCH_LISTS_SUCCEEDED':
      return [
        ...action.payload
      ]
    case 'UPDATE_LIST_SUCCEEDED':
      return [
        ...state, 
        {
          id: action.payload.id,
          post: action.payload.post
        }            
      ]
    default:
      return state
  }
}
export default actions;