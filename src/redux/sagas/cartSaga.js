import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchCartItemsSuccess, fetchCartItemsFailure } from '../actions/index';
import { FETCH_CART_ITEMS_REQUEST } from '../actions/actionTypes';
import { fetchCartItems } from '../../api/cartAPI'; 

function* fetchCartItemsSaga() {
  try {
    const sessionId = localStorage.getItem('Session-ID'); 

    const response = yield call(fetchCartItems, sessionId);
    yield put(fetchCartItemsSuccess(response));
  } catch (error) {
    yield put(fetchCartItemsFailure(error.message));
  }
}


export function* watchFetchCartItems() {
  yield takeLatest(FETCH_CART_ITEMS_REQUEST, fetchCartItemsSaga);
}
