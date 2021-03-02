
export const addList = payload => ({
  type: 'ADD_LIST',
  payload
})

export const removeList = payload => ({
  type: 'REMOVE_LIST',
  payload
})

export const updateList = (id, post) => ({
  type: 'UPDATE_LIST',
  payload: { id: id, post: post }
})
