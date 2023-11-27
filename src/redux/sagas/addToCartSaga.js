import { call, put, takeLatest } from 'redux-saga/effects';
import { addToCartSuccess, addToCartFailure } from '../actions/index';
import { ADD_TO_CART_REQUEST } from '../actions/actionTypes';
import { addToCartAPI } from '../../api/addToCartAPI'; 

function* addToCartSaga(action) {
  try {
    const { products, sessionId } = action.payload;

    if (products && products.length > 0) { 
      for (let i = 0; i < products.length; i++) {
        const { id, quantity, name, price } = products[i];
        yield call(addToCartAPI, id, sessionId, quantity, name, price); 
      }

      yield put(addToCartSuccess());
    } else {
      yield put(addToCartFailure("Products are not defined or empty."));
    }
  } catch (error) {
    yield put(addToCartFailure(error.message)); 
  }
}


export function* watchAddToCart() {
  yield takeLatest(ADD_TO_CART_REQUEST, addToCartSaga);
}
