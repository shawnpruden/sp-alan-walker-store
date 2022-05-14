import React, { useEffect, useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import { commerce } from './lib/commerce';

import { Announcement, Footer, Header, Navbar } from './components';
import { Home, Product, Products } from './pages';

import { theme } from './styles';

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Announcement />
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products/:collection"
          element={<Products products={products} />}
        />
        <Route
          path="/products/:collection/:productId"
          element={<Product products={products} />}
        />
      </Routes>

      <Footer />
    </ThemeProvider>
  );
};

export default App;
