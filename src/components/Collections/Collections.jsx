import React from 'react';

import Collection from '../Collection/Collection';

import { collections } from '../../data';

import styled from 'styled-components';

const Container = styled.section`
  background-color: #000;
  padding: 3rem 0;
`;

function Collections() {
  return (
    <Container>
      {collections.map((collection) => (
        <Collection collection={collection} key={collection.id} />
      ))}
    </Container>
  );
}

export default Collections;
