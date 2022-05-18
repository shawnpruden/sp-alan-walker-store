import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, ButtonGroup, CircularProgress } from '@mui/material';

import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

import {
  Image,
  Price,
  ProductDetails,
  ProductImage,
  ProductInfo,
  Quantity,
  Size,
  Wrapper,
} from './styles';

import { miniLoader } from '../../../styles.js';

function CartItem({
  cart,
  item: { id, image, name, line_total, quantity, product_id, selected_options },
  onUpdateCartItem,
  onRemoveCartItem,
}) {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(false);
  }, [cart]);

  let collection;
  if (name.includes('CORE')) {
    collection = 'core-collection';
  } else if (name.includes('MELTING ROSE')) {
    collection = 'melting-rose';
  } else if (name.includes('DRONE REPAIR SHOP')) {
    collection = 'drone-repair-shop';
  }
  return (
    <Wrapper>
      <ProductImage>
        <Link to={`/products/${collection}/${product_id}`}>
          <Image src={image.url} />
        </Link>
      </ProductImage>
      <ProductDetails>
        <ProductInfo>
          <Link to={`/products/${collection}/${product_id}`}>{name}</Link>
          {selected_options.length === 0 ? null : (
            <Size>Size: {selected_options[0].option_name}</Size>
          )}
        </ProductInfo>
        <Quantity>
          <ButtonGroup
            variant="outlined"
            color="inherit"
            sx={{ height: '2rem' }}
          >
            <Button
              sx={{ padding: 0 }}
              onClick={() => {
                setIsLoading(true);
                onUpdateCartItem(id, quantity - 1);
              }}
            >
              <RemoveIcon fontSize="inherit" />
            </Button>
            <Button sx={{ cursor: 'text' }}>{quantity}</Button>
            <Button
              sx={{ padding: 0 }}
              onClick={() => {
                setIsLoading(true);
                onUpdateCartItem(id, quantity + 1);
              }}
            >
              <AddIcon fontSize="inherit" />
            </Button>
          </ButtonGroup>
          <DeleteIcon
            sx={{ marginLeft: '1rem', color: '#616161', cursor: 'pointer' }}
            onClick={() => {
              setIsLoading(true);
              onRemoveCartItem(id);
            }}
          />
        </Quantity>
      </ProductDetails>
      <Price>
        {isLoading ? (
          <Box sx={miniLoader}>
            <CircularProgress size={25} sx={{ color: '#000' }} />
          </Box>
        ) : (
          line_total.formatted_with_symbol
        )}
      </Price>
    </Wrapper>
  );
}

export default CartItem;
