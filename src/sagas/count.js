import { put, takeEvery, delay } from 'redux-saga/effects'
import { INCREMENT, INCREMENT_ASYNC } from '../constants'

export function* incrementAsync () {
  console.log('sasa')
  yield delay(1000)
  yield put({ type: INCREMENT })
}

export default function* countSaga () {
  yield takeEvery(INCREMENT_ASYNC, incrementAsync)
}
