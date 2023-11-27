import { call, put, takeLatest } from 'redux-saga/effects';
import {
  fetchProductsSuccess,
  fetchProductsFailure,
} from '../actions/index';
import { FETCH_PRODUCTS_REQUEST } from '../actions/actionTypes';
import { fetchProducts } from '../../api/productsAPI'; 

function* fetchProductsSaga() {
  try {
    const response = yield call(fetchProducts);
    yield put(fetchProductsSuccess(response)); 
  } catch (error) {
    yield put(fetchProductsFailure(error));
  }
}

export function* watchFetchProducts() {
  yield takeLatest(FETCH_PRODUCTS_REQUEST, fetchProductsSaga);
}
