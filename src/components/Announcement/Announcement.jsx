import React from 'react';

import { mobile } from 'mobile';

import styled from 'styled-components';
export const Container = styled.p`
  height: 40px;
  font-size: 0.9rem;
  font-style: italic;
  font-weight: 700;
  color: #fff;
  background-color: #000;
  border-bottom: 2px solid #252525;

  display: flex;
  justify-content: center;
  align-items: center;

  ${mobile({ fontSize: '0.7rem' })}
`;

function Announcement() {
  return (
    <Container>
      Make sure you place your order in good time for the holidays!
    </Container>
  );
}

export default Announcement;
