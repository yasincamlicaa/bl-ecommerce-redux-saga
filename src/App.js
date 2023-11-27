import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createSessionRequest } from './redux/actions';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart'; 

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedSessionId = localStorage.getItem('Session-ID');
    if (!storedSessionId) {
      dispatch(createSessionRequest());
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
