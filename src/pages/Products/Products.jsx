import React from 'react';
import { useParams } from 'react-router-dom';

import { Box, CircularProgress } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
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
import { loader } from '../../styles';

function Products({ products, onAddToCart }) {
  const { collection } = useParams();

  const categorizedProducts = products.filter(
    (product) => product.categories[0].slug === collection
  );

  return (
    <Container>
      <Filters>
        <Filter>
          <Label>Filter Products:</Label>

          <Select>
            <option value="">Category</option>
            <option value="tops">Tops</option>
            <option value="bottoms">Bottoms</option>
            <option value="hats">Hats</option>
            <option value="masks">Masks</option>
          </Select>
        </Filter>
        <Filter>
          <Label>Sort by:</Label>
          <Select>
            <option value="best-selling">Best selling</option>
            <option value="newest">Newest</option>
            <option value="price-ascending">Price: low to high</option>
            <option value="price-descending">Price: high to low</option>
          </Select>
        </Filter>
      </Filters>

      <List>
        {products.length ? (
          categorizedProducts.map(
            ({ id, assets, name, price, variant_groups }) => (
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
                  />

                  <Icons>
                    {!variant_groups.length ? (
                      <Icon
                        onClick={(e) => {
                          e.preventDefault();
                          onAddToCart(id, 1);
                        }}
                      >
                        <AddShoppingCartIcon fontSize="small" />
                      </Icon>
                    ) : (
                      <PopperOverIcon
                        id={id}
                        variant_groups={variant_groups}
                        onAddToCart={onAddToCart}
                      />
                    )}
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
            )
          )
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
