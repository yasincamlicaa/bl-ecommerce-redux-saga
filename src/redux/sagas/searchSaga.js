import { call, put, takeLatest } from 'redux-saga/effects';
import { searchSuccess, searchFailure } from '../actions';
import {SEARCH_REQUEST} from '../actions/actionTypes';
import { searchAPI } from '../../api/searchAPI'; 

function* searchSaga(action) {
  try {
    const { query } = action.payload;
    const response = yield call(searchAPI, query);
    yield put(searchSuccess(response));
  } catch (error) {
    yield put(searchFailure(error)); 
  }
}

export function* watchSearch() {
  yield takeLatest(SEARCH_REQUEST, searchSaga);
}
