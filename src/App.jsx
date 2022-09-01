import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { handleCart } from 'features/cartSlice';
import { handleProducts } from 'features/productsSlice';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { theme } from './styles';

import { Announcement, Footer, Header, Navbar } from './components';
import { Cart, Home, Product, Products, Checkout } from './pages';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleProducts());

    dispatch(handleCart({ type: 'fetch' }));
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Announcement />
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products/:collection" element={<Products />} />

        <Route path="/products/:collection/:productId" element={<Product />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      <Footer />
    </ThemeProvider>
  );
};

export default App;
