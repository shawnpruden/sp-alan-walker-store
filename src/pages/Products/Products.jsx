import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { Box, CircularProgress } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import PopperOverIcon from './PopperOverIcon/PopperOverIcon';

import {
  Card,
  Container,
  Filter,
  Filters,
  Label,
  Icon,
  Icons,
  Image,
  Info,
  List,
  ListItem,
  Price,
  Select,
  Title,
} from './styles';

import { loader, miniLoader } from '../../styles';

const sortProducts = (products, condition) => {
  switch (condition) {
    case 'price-asc':
      return products.sort(
        (productA, productB) => productA.price.raw - productB.price.raw
      );

    case 'price-desc':
      return products.sort(
        (productA, productB) => productB.price.raw - productA.price.raw
      );

    case 'newest':
      return products.reverse();

    default:
      return products;
  }
};

const filterProducts = (products, category) => {
  switch (category) {
    case 'tops':
      return products.filter(
        (product) => product.variant_groups[1].options[0].name === 'tops'
      );
    case 'bottoms':
      return products.filter(
        (product) => product.variant_groups[1].options[0].name === 'bottoms'
      );

    case 'hats':
      return products.filter(
        (product) => product.variant_groups[1].options[0].name === 'hats'
      );

    case 'masks':
      return products.filter(
        (product) => product.variant_groups[1].options[0].name === 'masks'
      );

    case 'accessories':
      return products.filter(
        (product) => product.variant_groups[1].options[0].name === 'accessories'
      );
    default:
      return products;
  }
};

function Products({ products, onAddToCart }) {
  const [condition, setCondition] = useState('');
  const [category, setCategory] = useState('');

  const [isLoading, setIsLoading] = useState(true);
  console.log(isLoading);

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
                <Image src={assets[1].url} />
                <Image
                  src={assets[0].url}
                  onMouseEnter={(e) => {
                    e.target.style.opacity = 0;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.opacity = 1;
                  }}
                  onLoad={() => setIsLoading(false)}
                />

                {isLoading ? (
                  <Box
                    sx={{
                      ...miniLoader,
                      height: '100%',
                    }}
                  >
                    <CircularProgress size={50} sx={{ color: '#000' }} />
                  </Box>
                ) : null}

                <Icons>
                  <PopperOverIcon
                    id={id}
                    variant_groups={variant_groups}
                    onAddToCart={onAddToCart}
                  />
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
