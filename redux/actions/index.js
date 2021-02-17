// 액션의 타입을 정의해두는 곳
// 액션 타입은 주로 대문자로 작성
// export const addAction = payload => ({
//   type: 'ADD_ACTION',
//   payload
// })

export const addList = payload => ({
  type: 'ADD_LIST',
  payload
})

export const removeList = payload => ({
  type: 'REMOVE_LIST',
  payload
})