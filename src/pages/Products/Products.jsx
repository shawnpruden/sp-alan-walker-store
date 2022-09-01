import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Box, CircularProgress } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import {
  Card,
  Container,
  Filter,
  Filters,
  Label,
  Icon,
  Icons,
  Info,
  List,
  ListItem,
  Price,
  Select,
  Title,
  UnderImage,
  UpperImage,
} from './styles';

import PopperOverIcon from './PopperOverIcon/PopperOverIcon';
import { loader } from 'styles';
import { filterProducts, sortProducts } from './funcs';

function Products() {
  const [condition, setCondition] = useState('');
  const [category, setCategory] = useState('');

  const { products } = useSelector((state) => state.products);

  const { collection } = useParams();

  const categorizedProducts = products.filter(
    (product) => product.categories[0].slug === collection
  );

  const sortedProducts = filterProducts(
    sortProducts(categorizedProducts, condition),
    category
  );

  return (
    <Container>
      <Filters>
        <Filter>
          <Label>Filter Products:</Label>

          <Select onChange={(e) => setCategory(e.target.value)}>
            <option value="">Category</option>
            <option value="tops">Tops</option>
            <option value="bottoms">Bottoms</option>
            <option value="hats">Hats</option>
            <option value="masks">Masks</option>
            <option value="accessories">Accessories</option>
          </Select>
        </Filter>

        <Filter>
          <Label>Sort by:</Label>

          <Select onChange={(e) => setCondition(e.target.value)}>
            <option value="best-selling">Best selling</option>
            <option value="newest">Newest</option>
            <option value="price-asc">Price: low to high</option>
            <option value="price-desc">Price: high to low</option>
          </Select>
        </Filter>
      </Filters>

      <List>
        {products.length ? (
          sortedProducts.map(({ id, assets, name, price, variant_groups }) => (
            <ListItem key={id}>
              <Card to={`/products/${collection}/${id}`}>
                <UnderImage src={assets[1].url} />

                <UpperImage src={assets[0].url} />

                <Icons>
                  <PopperOverIcon id={id} variant_groups={variant_groups} />

                  <Icon
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <FavoriteBorderIcon fontSize="small" />
                  </Icon>
                </Icons>
              </Card>

              <Info>
                <Title>{name}</Title>

                <Price>{price.formatted_with_symbol}</Price>
              </Info>
            </ListItem>
          ))
        ) : (
          <Box sx={loader}>
            <CircularProgress size={80} sx={{ color: '#000' }} />
          </Box>
        )}
      </List>
    </Container>
  );
}

export default Products;
