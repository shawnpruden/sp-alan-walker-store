import React from 'react';

import Review from './Review';
import { Button, ButtonGroup } from './styles';

function PaymentForm({ token, backStep, nextStep, timeout }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    timeout();

    nextStep();
  };

  return (
    <>
      <Review token={token} />

      <form onSubmit={handleSubmit}>
        <ButtonGroup>
          <Button onClick={backStep}>Back</Button>

          <Button type="submit">
            Pay {token.live.subtotal.formatted_with_symbol}
          </Button>
        </ButtonGroup>
      </form>
    </>
  );
}

export default PaymentForm;
