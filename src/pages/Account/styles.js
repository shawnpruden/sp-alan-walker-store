import styled from 'styled-components';
import { mobile } from '../../mobile';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 3rem;

  ${mobile({ padding: '2rem 1rem' })}
`;

export const Title = styled.h3`
  font-size: 3rem;
  margin: 2rem;

  color: #424242;
  font-style: italic;

  ${mobile({ fontSize: '2rem', margin: '0 2rem' })}
`;

export const Wrapper = styled.div`
  width: ${(props) => (props.type === 'login' ? '400px' : '540px')};
  padding: 2rem;

  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);

  ${mobile({ width: '100%', marginTop: '1.5rem' })}
`;

export const SubTitle = styled.h4`
  font-size: 2rem;

  font-weight: normal;

  ${mobile({ fontSize: '1.5rem' })}
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: ${(props) => (props.type === 'login' ? 'nowrap' : 'wrap')};
  flex-direction: ${(props) => (props.type === 'login' ? 'column' : 'row')};
`;

export const Input = styled.input`
  flex: 40%;

  font-size: 1rem;

  padding: 0.8rem;
  margin: 1rem 1rem 0 0;

  border: 2px solid #e5e5e5;

  transition: all 0.5s;
  &:focus {
    outline: none;
    border: 2px solid #fdcc0d;
  }
`;

export const SubText = styled.p`
  margin: 2rem 0;
`;

export const FormBtn = styled.a`
  display: inline-block;

  padding: 0.8rem 4rem;
  margin-bottom: 1.5rem;

  background-color: #fdcc0d;

  font-weight: bold;

  cursor: pointer;

  transition: all 0.5s;
  &:hover {
    opacity: 0.8;
  }
`;

export const Button = styled.button`
  border: none;

  font-size: 1.2rem;

  font-weight: bold;

  margin-bottom: 1rem;

  a {
    display: inline-block;
    padding: 1rem 3rem;
    color: #000;
    background-color: #fdcc0d;

    transition: all 0.5s;
    &:hover {
      opacity: 0.8;
    }
  }

  ${mobile({ margin: '2rem' })}
`;

export const Text = styled.p`
  font-style: italic;

  a {
    color: #000;
    border-bottom: 2px solid transparent;

    transition: all 0.5s;
    &:hover {
      opacity: 0.8;
      border-bottom: 2px solid #000;
    }
  }
`;
