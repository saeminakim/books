import { fork } from 'redux-saga/effects'
import listsSaga from './journallist'

export default function* rootSaga() {
  yield fork(listsSaga)
}