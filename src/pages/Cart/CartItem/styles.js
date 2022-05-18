import styled from 'styled-components';

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
`;

export const ProductDetails = styled.li`
  flex: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-right: 3rem;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;

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
`;

export const Size = styled.span`
  margin-top: 1rem;
  color: #9e9e9e;
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
`;

export const Price = styled.li`
  flex: 1;

  text-align: center;
`;
