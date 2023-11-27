import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartItemsRequest } from '../../redux/actions';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems); 

  useEffect(() => {
    dispatch(fetchCartItemsRequest());
  }, [dispatch]);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        { cartItems && cartItems.map((item) => (
          <li key={item.id}>
            <p>Name: {item.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: ${item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
