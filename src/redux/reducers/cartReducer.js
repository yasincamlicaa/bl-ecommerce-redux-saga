import {
  FETCH_CART_ITEMS_REQUEST,
  FETCH_CART_ITEMS_SUCCESS,
  FETCH_CART_ITEMS_FAILURE,
} from '../actions/actionTypes';
import { ADD_TO_CART_SUCCESS, ADD_TO_CART_FAILURE, UPDATE_REDUX_CART_ITEMS } from '../actions/actionTypes';


const storedCartItems = localStorage.getItem('cartItems');

const initialState = {
  cartItems: storedCartItems ? JSON.parse(storedCartItems) : [],
  loading: false,
  error: null,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_REDUX_CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload,
      };
    case FETCH_CART_ITEMS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
      case FETCH_CART_ITEMS_SUCCESS:
        return {
          ...state,
          loading: false,
          cartItems: action.payload,
        };
    case FETCH_CART_ITEMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    // case ADD_TO_CART_SUCCESS:
    //   const addedProducts = action.payload.products;
    //   const updatedCartItems = [...state.cartItems]; 

    //   addedProducts.forEach((product) => {
    //     const existingProduct = updatedCartItems.find((item) => item.productId === product.id);
    //     if (existingProduct) {
    //       existingProduct.quantity += product.quantity;
    //     } else {
    //       updatedCartItems.push({
    //         productId: product.id,
    //         quantity: product.quantity,
    //         name: product.name,
    //         price: product.price,
    //       });
    //     }
    //   });

    //   localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

    //   return {
    //     ...state,
    //     cartItems: updatedCartItems,
    //   };
    case ADD_TO_CART_SUCCESS:
  const addedProducts = action.payload.products;
  const updatedCartItems = [...state.cartItems];

  addedProducts.forEach((product) => {
    const existingProduct = updatedCartItems.find((item) => item.productId === product.id);
    if (existingProduct) {
      existingProduct.quantity += product.quantity;
    } else {
      updatedCartItems.push({
        productId: product.id,
        quantity: product.quantity,
        name: product.name,
        price: product.price,
      });
    }
  });

  localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

  return {
    ...state,
    cartItems: updatedCartItems,
  };
    case ADD_TO_CART_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default cartReducer;
