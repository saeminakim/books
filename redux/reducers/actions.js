// 액션이 어떻게 변경해야 하는지 정의하는 곳
// actions > index.js에서 정의한 객체를 참조하여
// 새로운 상태를 만드는 함수를 작성하는 곳 
// 리듀서의 불변성을 지키는게 중요!
const actions = (state = [], action) => {
  // action의 type별로 state 제어를 하겠다
  switch (action.type) {
    case 'ADD_LIST':
      return [
        ...state, 
        // payload 객체 복사 
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