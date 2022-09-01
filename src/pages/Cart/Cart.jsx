import React, { useEffect, useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleCart } from 'features/cartSlice';

import { Box, CircularProgress } from '@mui/material';

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

import CartItem from './CartItem/CartItem';
import { disabled, loader, miniLoader } from 'styles';

function Cart() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    cart: { line_items, subtotal },
  } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(false);
  }, [line_items]);

  const handleEmptyCart = () => {
    setIsLoading(true);

    dispatch(handleCart({ type: 'empty' }));
  };

  const EmptyCart = () => (
    <>
      <Title>There is no items in your shopping cart</Title>

      <Button as={Link} to="/">
        CONTINUE SHOPPING
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
          <CartItem item={item} />
          <Divider />
        </Fragment>
      ))}

      <CartDetails>
        <Subtotal>Subtotal: {subtotal.formatted_with_symbol}</Subtotal>

        <ButtonGroup>
          <Button
            type="clear"
            onClick={handleEmptyCart}
            style={isLoading ? disabled : null}
          >
            {isLoading ? (
              <Box sx={miniLoader}>
                <CircularProgress size={25} sx={{ color: '#fff' }} />
              </Box>
            ) : (
              'CLEAR CART'
            )}
          </Button>

          <Button type="checkout" as={Link} to="/checkout">
            CHECK OUT
          </Button>
        </ButtonGroup>
      </CartDetails>
    </>
  );

  return (
    <Container>
      {line_items ? (
        !!line_items.length ? (
          <FilledCart />
        ) : (
          <EmptyCart />
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
