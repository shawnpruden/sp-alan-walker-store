import styled from 'styled-components';
import { mobile } from '../../responsiveness';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 3rem;

  ${mobile({ padding: '1rem' })}
`;

export const Title = styled.h3`
  font-size: 2rem;
  margin-bottom: 2rem;

  ${mobile({ fontSize: '1.5rem', margin: '0 2rem 2rem' })}
`;

export const TextWrapper = styled.ul`
  display: flex;
  align-items: center;

  width: 100%;
  font-style: italic;
  color: #9e9e9e;

  li:nth-child(2) {
    ${mobile({ display: 'none' })}
  }

  li:nth-child(3) {
    ${mobile({ textAlign: 'end' })}
  }
`;

export const Text = styled.li`
  flex: ${(props) => (props.space === 'wider' ? 2 : 1)};

  text-align: ${(props) => (props.space === 'wider' ? 'start' : 'center')};
`;

export const Divider = styled.hr`
  margin: 1rem 0;

  background-color: #eee;
  border: none;

  width: 100%;
  height: 1px;
`;

export const CartDetails = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-end;

  width: 100%;
`;

export const Subtotal = styled.h4`
  font-size: 1.5rem;
  margin: 4rem;

  ${mobile({ margin: '2rem 0', fontSize: '1.2rem' })}
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;

  width: 100%;

  ${mobile({ justifyContent: 'space-between' })}
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 220px;
  height: 50px;

  background-color: ${(props) => (props.type === 'clear' ? '#e63946' : '#000')};
  border: none;
  box-shadow: 0 2px 5px #616161;
  cursor: pointer;

  color: #fff;
  font-size: 1rem;

  margin: 2rem;

  opacity: 0.8;

  transition: all 0.5s;
  &:hover {
    opacity: 1;
  }

  a {
    color: #fff;
  }

  ${mobile({ margin: '0 0.5rem 2rem' })}
`;
