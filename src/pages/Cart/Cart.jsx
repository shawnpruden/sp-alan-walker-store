import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Box, CircularProgress } from '@mui/material';

import CartItem from './CartItem/CartItem';
import { loader, miniLoader } from '../../styles';

import {
  Button,
  ButtonGroup,
  CartDetails,
  Container,
  Divider,
  Subtotal,
  Text,
  TextWrapper,
  Title,
} from './styles';

function Cart({
  cart,
  cart: { line_items, subtotal },
  onUpdateCartItem,
  onRemoveCartItem,
  onEmptyCart,
}) {
  const [isLoading, setIsLoading] = useState(false);

  const handleEmptyCart = () => {
    setIsLoading(true);
    onEmptyCart();
  };

  useEffect(() => {
    setIsLoading(false);
  }, [cart]);

  const EmptyCart = () => (
    <>
      <Title>There is no items in your shopping cart</Title>
      <Button>
        <Link to="/" style={{ color: '#fff' }}>
          Continue shopping
        </Link>
      </Button>
    </>
  );

  const FilledCart = () => (
    <>
      <Title>Your shopping cart</Title>
      <TextWrapper>
        <Text space="wider">Product</Text>
        <Text>Quantity</Text>
        <Text>Price</Text>
      </TextWrapper>
      <Divider />

      {line_items.map((item) => (
        <Fragment key={item.id}>
          <CartItem
            cart={cart}
            item={item}
            onUpdateCartItem={onUpdateCartItem}
            onRemoveCartItem={onRemoveCartItem}
          />
          <Divider />
        </Fragment>
      ))}

      <CartDetails>
        <Subtotal>Subtotal: {subtotal.formatted_with_symbol}</Subtotal>
        <ButtonGroup>
          <Button type="clear" onClick={handleEmptyCart}>
            {isLoading ? (
              <Box sx={miniLoader}>
                <CircularProgress size={25} sx={{ color: '#000' }} />
              </Box>
            ) : (
              'CLEAR CART'
            )}
          </Button>
          <Button type="checkout">CHECK OUT</Button>
        </ButtonGroup>
      </CartDetails>
    </>
  );
  console.log(line_items, subtotal);

  return (
    <Container>
      {line_items ? (
        !line_items.length ? (
          <EmptyCart />
        ) : (
          <FilledCart />
        )
      ) : (
        <Box sx={loader}>
          <CircularProgress size={80} sx={{ color: '#000' }} />
        </Box>
      )}
    </Container>
  );
}

export default Cart;
