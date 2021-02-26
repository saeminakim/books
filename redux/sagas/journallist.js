// 사가가 있는 곳
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import api from '../../api/journallist'

function* addList(action){
  try{
    const result = yield call(api.post, action.payload)
    
    yield put({type: "ADD_LIST_SUCCEEDED", payload: action.payload});
  } catch (error) {
    yield put({type:"SHOW_ALERT", msg:error.message});
  }
}

function* removeList(action){
  const result = yield call(api.delete, action.payload)

  yield put({type: "REMOVE_LIST_SUCCEEDED", payload: action.payload});
}

function* fetchLists(action) {
  const result = yield call(api.list);

  yield put({type:"FETCH_LISTS_SUCCEEDED", payload: result.data})
}

function* listsSaga(){

  yield takeEvery("ADD_LIST", addList);
  yield takeEvery("REMOVE_LIST", removeList)
  yield takeLatest("FETCH_LISTS", fetchLists);

}

export default listsSaga;