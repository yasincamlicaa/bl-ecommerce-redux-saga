import {
  CREATE_SESSION_REQUEST, CREATE_SESSION_SUCCESS, CREATE_SESSION_FAILURE,
  FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE,
  SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE,
  ADD_TO_CART_REQUEST,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_FAILURE,
  FETCH_CART_ITEMS_REQUEST,
  FETCH_CART_ITEMS_SUCCESS,
  FETCH_CART_ITEMS_FAILURE
} from "./actionTypes";

// session
export const createSessionRequest = () => ({
  type: CREATE_SESSION_REQUEST,
});

export const createSessionSuccess = (sessionId) => {
  localStorage.setItem('Session-ID', sessionId);
  return {
    type: CREATE_SESSION_SUCCESS,
    payload: sessionId,
  }
};

export const createSessionFailure = (error) => ({
  type: CREATE_SESSION_FAILURE,
  payload: error,
});

export const updateSessionCartItems = (cartItems) => ({
  type: 'UPDATE_SESSION_CART_ITEMS',
  payload: cartItems,
});

// products
export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST,
});

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products },
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error },
});

// search
export const searchRequest = (query) => ({
  type: SEARCH_REQUEST,
  payload: { query },
});

export const searchSuccess = (results) => ({
  type: SEARCH_SUCCESS,
  payload: { results },
});

export const searchFailure = (error) => ({
  type: SEARCH_FAILURE,
  payload: { error },
});


// add to cart
export const addToCartRequest = (products) => {
  const sessionId = localStorage.getItem('Session-ID');


  return {
    type: ADD_TO_CART_REQUEST,
    payload: { products, sessionId },
  };
};

// export const addToCartSuccess = (addedItems) => {

//   return {
//     type: ADD_TO_CART_SUCCESS,
//     payload: { products: addedItems }
//   };
// };
// export const addToCartSuccess = (addedProducts) => ({
//   type: ADD_TO_CART_SUCCESS,
//   payload: { products: addedProducts },
// });

// export const addToCartSuccess = (addedProducts) => ({
//   type: ADD_TO_CART_SUCCESS,
//   payload: { products: Array.isArray(addedProducts) ? addedProducts : [addedProducts] },
// });
export const addToCartSuccess = (addedProducts) => ({
  type: ADD_TO_CART_SUCCESS,
  payload: { products: Array.isArray(addedProducts) ? addedProducts : [addedProducts] },
});

export const addToCartFailure = (error) => ({
  type: ADD_TO_CART_FAILURE,
  payload: { error },
});

// view cart
export const fetchCartItemsRequest = () => ({
  type: FETCH_CART_ITEMS_REQUEST,
});

export const fetchCartItemsSuccess = (cartItems) => ({
  type: FETCH_CART_ITEMS_SUCCESS,
  payload: cartItems,
});

export const fetchCartItemsFailure = (error) => ({
  type: FETCH_CART_ITEMS_FAILURE,
  payload: error,
});