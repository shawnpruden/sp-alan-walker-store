import styled from 'styled-components';
import { mobile } from '../../../mobile';

export const Wrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

export const ProductImage = styled.li`
  flex: 0.5;
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100px;

  margin: 0 2rem;

  ${mobile({ margin: 0 })}
`;

export const ProductDetails = styled.li`
  flex: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-right: 3rem;

  ${mobile({ flexDirection: 'column', padding: '0 1rem' })}
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;

  padding-bottom: 3rem;
  padding-left: 2rem;

  font-weight: 600;

  a {
    color: #000;

    &:hover {
      text-decoration: underline;
      text-underline-offset: 5px;
    }
  }

  ${mobile({ padding: 0, fontSize: '0.8rem' })}
`;

export const Size = styled.span`
  margin-top: 1rem;
  color: #9e9e9e;

  ${mobile({ marginTop: '0.5rem' })}
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;

  ${mobile({
    marginTop: '1.5rem',
    width: '100%',
    justifyContent: 'flex-start',
  })}
`;

export const Price = styled.li`
  flex: 1;

  text-align: center;
`;
