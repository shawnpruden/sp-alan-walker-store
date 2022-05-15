import React, { useState } from 'react';
import { Button, Container, Title } from './styles';

function Cart() {
  const [isEmpty, setIsEmpty] = useState(true);

  const EmptyCart = () => (
    <>
      <Title>There is no items in your shopping cart</Title>
      <Button to="/">Continue shopping</Button>
    </>
  );

  const FilledCart = () => (
    <>
      <Title></Title>
    </>
  );

  return <Container>{isEmpty ? <EmptyCart /> : <FilledCart />}</Container>;
}

export default Cart;
