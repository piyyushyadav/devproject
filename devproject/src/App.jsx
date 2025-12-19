import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Login from './components/Login';
import Shop from './components/Shop';
import Collections from './components/Collections';
import About from './components/About';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cartItems];
    newCart.splice(index, 1);
    setCartItems(newCart);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home addToCart={addToCart} cartCount={cartItems.length} />}
        />
        <Route
          path="/shop"
          element={<Shop addToCart={addToCart} cartCount={cartItems.length} />}
        />
        <Route
          path="/collections"
          element={<Collections cartCount={cartItems.length} />}
        />
        <Route
          path="/about"
          element={<About cartCount={cartItems.length} />}
        />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
        />
        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
