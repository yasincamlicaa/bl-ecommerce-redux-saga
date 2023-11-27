import { combineReducers } from 'redux';
import sessionReducer from './sessionReducer';
import productsReducer from './productsReducer';
import searchReducer from './searchReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  products: productsReducer,
  search: searchReducer,
  cart: cartReducer,
});

export default rootReducer;

