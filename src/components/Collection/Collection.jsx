import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Container, Gallery, Image, Title, Underline } from './styles';

function Collection({ collection: { title, img, param } }) {
  return (
    <Container>
      <Title>
        {title}
        <Underline />
      </Title>
      <Gallery>
        <Image src={img[0]} />
        <Image src={img[1]} />
        <Image src={img[2]} />
      </Gallery>

      <Button>
        <Link to={`/products/${param}`}>Shop Now</Link>
      </Button>
    </Container>
  );
}

export default Collection;
