import React, { useEffect, useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import { commerce } from './lib/commerce';

import { Announcement, Footer, Header, Navbar } from './components';
import { Cart, Home, Product, Products, Checkout, Account } from './pages';

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
    const { cart } = await commerce.cart.add(productId, quantity, variant);

    setCart(cart);
  };

  const handleUpdateCartItem = async (cartItemId, quantity) => {
    const { cart } = await commerce.cart.update(cartItemId, { quantity });
    setCart(cart);
  };

  const handleRemoveCartItem = async (cartItemId) => {
    const { cart } = await commerce.cart.remove(cartItemId);
    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  const handleRefreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Announcement />
      <Header totalItems={cart.total_items} products={products} />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products/:collection"
          element={
            <Products
              products={products}
              cart={cart}
              onAddToCart={handleAddToCart}
            />
          }
        />
        <Route
          path="/products/:collection/:productId"
          element={
            <Product
              products={products}
              cart={cart}
              onAddToCart={handleAddToCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              onUpdateCartItem={handleUpdateCartItem}
              onRemoveCartItem={handleRemoveCartItem}
              onEmptyCart={handleEmptyCart}
            />
          }
        />

        <Route path="/account/*" element={<Account />} />
        <Route
          path="/checkout"
          element={<Checkout cart={cart} onRefreshCart={handleRefreshCart} />}
        />
      </Routes>

      <Footer />
    </ThemeProvider>
  );
};

export default App;
