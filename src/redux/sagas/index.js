import { all } from 'redux-saga/effects';
import { watchFetchProducts } from './productsSaga';
import { watchCreateSession } from './sessionSaga';
import { watchSearch } from './searchSaga';
import { watchFetchCartItems } from './cartSaga';
import { watchAddToCart } from './addToCartSaga';


export default function* rootSaga() {
  yield all([
    watchCreateSession(),
    watchFetchProducts(),
    watchSearch(),
    watchFetchCartItems(),
    watchAddToCart(),
  ]);
}
