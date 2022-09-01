import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleCart } from 'features/cartSlice';
import { Link, useNavigate } from 'react-router-dom';

import { commerce } from 'lib/commerce';

import { Box, CircularProgress, Step, StepLabel, Stepper } from '@mui/material';

import { Button, Container, SubTitle, Title, Wrapper } from './styles';

import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';

import { loader } from 'styles';
import { Divider } from '../Cart/styles';

const steps = ['Shipping', 'Payment', 'Confirmation'];

function Checkout() {
  const [activeStep, setActiveStep] = useState(0);
  const [token, setToken] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);

  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    const createToken = async () => {
      try {
        const token =
          cart.id &&
          (await commerce.checkout.generateToken(cart.id, {
            type: 'cart',
          }));

        setToken(token);
      } catch {
        setTimeout(() => {
          navigate('/');
        }, 10000);
      }
    };

    createToken();
  }, [cart, navigate]);

  const Confirmation = () =>
    isCompleted ? (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Title
          style={{
            marginTop: '2rem',
            fontWeight: 'bold',
            textTransform: 'capitalize',
          }}
        >
          Thank you for your purchase
        </Title>

        <SubTitle style={{ fontWeight: 'normal' }}>
          ORDER NO. 52656155954
        </SubTitle>

        <Divider />

        <Button as={Link} to="/" style={{ display: 'inline-block' }}>
          Back to Home
        </Button>
      </div>
    ) : (
      <Box sx={loader}>
        <CircularProgress size={60} sx={{ color: '#000' }} />
      </Box>
    );

  const backStep = () => setActiveStep((prevState) => prevState - 1);

  const nextStep = () => setActiveStep((prevState) => prevState + 1);

  const timeout = () => {
    setTimeout(() => {
      setIsCompleted(true);

      dispatch(handleCart({ type: 'refresh' }));
    }, 3000);
  };

  const CheckoutForm = () => {
    switch (activeStep) {
      case 0:
        return <AddressForm token={token} nextStep={nextStep} />;

      case 1:
        return (
          <PaymentForm
            token={token}
            nextStep={nextStep}
            backStep={backStep}
            timeout={timeout}
          />
        );

      case 2:
        return <Confirmation />;

      default:
        return null;
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Checkout</Title>

        <Stepper activeStep={activeStep}>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel>{step}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {token ? (
          <CheckoutForm />
        ) : (
          <Box sx={loader}>
            <CircularProgress size={60} sx={{ color: '#000' }} />
          </Box>
        )}
      </Wrapper>
    </Container>
  );
}

export default Checkout;
