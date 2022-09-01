import React, { Fragment } from 'react';

import { Badge } from '@mui/material';

import { mobile } from 'mobile';

import styled from 'styled-components';
const Title = styled.h4`
  font-size: 1.4rem;
  letter-spacing: 1px;

  margin-top: 2rem;
`;

const Wrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
`;

const Product = styled.div`
  display: flex;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;

  object-fit: cover;
  object-position: center;

  padding: 0.5rem;
  border: 2px solid #000;
`;

const ProductInfo = styled.div`
  display: flex;
  justify-self: flex-start;
  flex-direction: column;

  padding: 1rem 0 0 1rem;

  ${mobile({ padding: '0.5rem 0 0 1rem' })}
`;

const Name = styled.h5`
  font-size: 1rem;
`;

const Size = styled.span`
  font-size: 0.8rem;
  color: #9e9e9e;

  ${mobile({ marginTop: '0.5rem' })}
`;

const Price = styled.span`
  font-style: italic;
  font-size: 0.8rem;
`;

const Divider = styled.hr`
  margin: 1rem 0;

  background-color: #eee;
  border: none;

  width: 100%;
  height: 1px;
`;

function Review({ token: { line_items } }) {
  return (
    <>
      <Title>Order Summery</Title>

      {line_items.map((item) => (
        <Fragment key={item.id}>
          <Wrapper>
            <Product>
              <Badge badgeContent={item.quantity} color="primary">
                <Image src={item.image.url} />
              </Badge>

              <ProductInfo>
                <Name>{item.product_name}</Name>
                {item.selected_options.length ? (
                  <Size>Size: {item.selected_options[0].option_name}</Size>
                ) : null}
              </ProductInfo>
            </Product>

            <Price>{item.price.formatted_with_symbol}</Price>
          </Wrapper>

          <Divider />
        </Fragment>
      ))}
    </>
  );
}

export default Review;
