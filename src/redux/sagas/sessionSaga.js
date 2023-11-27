import { call, put, takeLatest } from 'redux-saga/effects';
import { CREATE_SESSION_REQUEST, CREATE_SESSION_SUCCESS, CREATE_SESSION_FAILURE } from '../actions/actionTypes';
import { createSessionApi } from '../../api/sessionAPI';

function* createSessionSaga() {
  try {
    const response = yield call(createSessionApi);
    yield put({ type: CREATE_SESSION_SUCCESS, payload: response });
  } catch (error) {
    yield put({ type: CREATE_SESSION_FAILURE, payload: error });
  }
}

export function* watchCreateSession() {
  yield takeLatest(CREATE_SESSION_REQUEST, createSessionSaga);
}
