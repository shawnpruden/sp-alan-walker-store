import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import {
  SubText,
  Button,
  Container,
  Form,
  FormBtn,
  Input,
  SubTitle,
  Text,
  Title,
  Wrapper,
} from './styles';

function Account() {
  const SignUp = () => (
    <Wrapper>
      <SubTitle>CREATE AN ACCOUNT</SubTitle>
      <Form>
        <Input type="text" placeholder="First Name" />
        <Input type="text" placeholder="Last Name" />
        <Input type="text" placeholder="Username" />
        <Input type="email" placeholder="Email Address" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
      </Form>
      <SubText>
        By creating an account with us, you agree to the{' '}
        <em>Terms & Conditions</em> and <em>Privacy Policy</em>.
      </SubText>
      <FormBtn type="submit">CREATE</FormBtn>
      <Text>
        Already have an account? <Link to="/account/login">Log in</Link>
      </Text>
    </Wrapper>
  );

  const LogIn = () => (
    <Wrapper type="login">
      <SubTitle>LOG IN</SubTitle>
      <Form type="login">
        <Input type="text" placeholder="Username or Email address" />
        <Input type="password" placeholder="Password" />
      </Form>
      <FormBtn type="submit" style={{ marginTop: '2rem' }}>
        LOG IN
      </FormBtn>

      <Text style={{ marginBottom: '1rem' }}>
        <Link to="/">
          <em>Forgot your password?</em>
        </Link>
      </Text>
      <Text>
        or <Link to="/account/signup">Create a new account</Link>
      </Text>
    </Wrapper>
  );
  return (
    <Container>
      <Title>Welcome to Alan Walker Store!</Title>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Button>
                <Link to="signup">Create an account</Link>
              </Button>
              <Text>
                Already have an account? <Link to="login">Log in</Link>
              </Text>
            </>
          }
        />
        <Route path="signup" element={<SignUp />} />
        <Route path="login" element={<LogIn />} />
      </Routes>
    </Container>
  );
}

export default Account;
