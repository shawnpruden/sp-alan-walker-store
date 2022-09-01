import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { handleCart } from 'features/cartSlice';

import { Box, CircularProgress } from '@mui/material';
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

import { Select } from '../Products/styles';
import { disabled, loader, miniLoader } from 'styles';

function Product() {
  const [isLoading, setIsLoading] = useState(false);

  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState({});

  const { products } = useSelector((state) => state.products);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const { productId } = useParams();
  const { id, assets, name, price, variant_groups } = products.length
    ? products.find((product) => product.id === productId)
    : [];

  useEffect(() => {
    setIsLoading(false);
  }, [cart]);

  useEffect(() => {
    products.length &&
      variant_groups.length &&
      setSize({
        [variant_groups[0].id]: variant_groups[0].options[0].id,
      });
  }, [products.length, variant_groups]);

  const handleAddToCart = () => {
    setIsLoading(true);

    dispatch(
      handleCart({ type: 'add', productId: id, quantity, variant: size })
    );
  };

  return (
    <>
      {products.length ? (
        <Container>
          <Left>
            <Image src={assets[0].url} alt={name} />
            <Image src={assets[1].url} alt={name} />
          </Left>

          <Right>
            <Title>{name}</Title>

            <Price>{price.formatted_with_symbol}</Price>
            {variant_groups.length === 0 ? null : (
              <Filter>
                <Label htmlFor="size">Size</Label>

                <Select
                  id="size"
                  onChange={(e) =>
                    setSize({ [variant_groups[0].id]: e.target.value })
                  }
                >
                  {variant_groups[0].options.map((option) => (
                    <option value={option.id} key={option.id}>
                      {option.name}
                    </option>
                  ))}
                </Select>
              </Filter>
            )}

            <Filter>
              <Label htmlFor="quantity">Quantity</Label>

              <Select
                id="quantity"
                onChange={(e) => setQuantity(e.target.value)}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value, index) => (
                  <option key={index} value={value}>
                    {value}
                  </option>
                ))}
              </Select>
            </Filter>

            <ButtonGroup>
              <Button
                onClick={handleAddToCart}
                style={isLoading ? disabled : null}
              >
                {isLoading ? (
                  <Box sx={miniLoader}>
                    <CircularProgress size={25} sx={{ color: '#000' }} />
                  </Box>
                ) : (
                  'Add to cart'
                )}
              </Button>

              <Icon>
                <FavoriteBorderIcon />
              </Icon>
            </ButtonGroup>

            <Info>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
              architecto eos explicabo aut praesentium, fugiat labore tempora
              laboriosam sapiente itaque.
            </Info>

            <Info>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              optio voluptate ea, odit sed cum quidem impedit illum, harum
              accusamus incidunt maxime tempore cumque ullam aperiam ducimus
              voluptatibus perferendis. Facilis!
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
