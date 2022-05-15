import React, { useEffect, useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import { commerce } from './lib/commerce';

import { Announcement, Footer, Header, Navbar } from './components';
import { Cart, Home, Product, Products } from './pages';

import { theme } from './styles';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity, variant) => {
    const item = await commerce.cart.add(productId, quantity, variant);

    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log('product log', products);
  console.log('cart log', cart);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Announcement />
      <Header totalItems={cart.total_items} />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products/:collection"
          element={
            <Products products={products} onAddToCart={handleAddToCart} />
          }
        />
        <Route
          path="/products/:collection/:productId"
          element={
            <Product products={products} onAddToCart={handleAddToCart} />
          }
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </ThemeProvider>
  );
};

export default App;
