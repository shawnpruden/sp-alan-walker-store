import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import {
  Button,
  Container,
  Image,
  Info,
  Filter,
  Label,
  Left,
  Price,
  Right,
  Title,
  ButtonGroup,
  Icon,
} from './styles';

import { loader, Select } from '../Products/styles';
import { Box, CircularProgress } from '@mui/material';

function Product({ products, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const { productId } = useParams();

  const { id, assets, name, price } =
    products.length !== 0
      ? products.find((product) => product.id === productId)
      : [];

  return (
    <>
      {products.length !== 0 ? (
        <Container>
          <Left>
            <Image src={assets[0].url} alt={name} />
            <Image src={assets[1].url} alt={name} />
          </Left>
          <Right>
            <Title>{name}</Title>
            <Price>{price.formatted_with_symbol}</Price>
            <Filter>
              <Label htmlFor="size">Size</Label>
              <Select id="size">
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
              </Select>
            </Filter>
            <Filter>
              <Label htmlFor="quantity">Quantity</Label>
              <Select
                id="quantity"
                onChange={(e) => setQuantity(e.target.value)}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
              </Select>
            </Filter>

            <ButtonGroup>
              <Button onClick={() => onAddToCart(id, quantity)}>
                Add to cart
              </Button>
              <Icon>
                <FavoriteBorderIcon />
              </Icon>
            </ButtonGroup>

            <Info>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              repellat quia dignissimos, quibusdam facere voluptatum
              consequuntur similique sint aliquid? Quaerat necessitatibus fuga
              optio! Veritatis dolorem velit iure illo sunt, neque, quae, saepe
              sequi nesciunt eum vero autem doloribus rerum error!
            </Info>
            <Info>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
              labore nisi. Sapiente perferendis eos modi, at doloribus corrupti,
              assumenda laudantium, nulla fugiat distinctio quas. Quisquam
              corporis amet quibusdam, optio tenetur quidem eligendi qui non
              alias deserunt unde laudantium cum voluptas suscipit sunt minima
              excepturi quo similique eos incidunt! Quibusdam, itaque!
            </Info>
          </Right>
        </Container>
      ) : (
        <Box sx={loader}>
          <CircularProgress size={80} sx={{ color: '#000' }} />
        </Box>
      )}
    </>
  );
}

export default Product;
