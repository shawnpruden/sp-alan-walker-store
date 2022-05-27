import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import { Badge } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import {
  Center,
  Container,
  Divider,
  HeaderLink,
  Image,
  Info,
  Input,
  Left,
  List,
  ListItem,
  Logo,
  Message,
  MSearchIcon,
  Name,
  Price,
  Right,
  SearchBar,
  SearchPanel,
} from './styles';

import logo from '../../assets/img/logo.png';

function Header({ totalItems, products }) {
  const [isFocused, setIsFocused] = useState(false);
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [cursor, setCursor] = useState(true);

  const [isVisible, setIsVisible] = useState(false);

  const searchBarRef = useRef();
  const listRef = useRef();
  const iconRef = useRef();

  useEffect(() => {
    document.body.addEventListener('click', (e) => {
      if (
        searchBarRef.current.contains(e.target) &&
        !listRef.current.contains(e.target)
      ) {
        setIsFocused(true);
      } else if (iconRef.current.contains(e.target)) {
        setIsVisible((prevState) => !prevState);
      } else {
        setIsFocused(false);
        setIsVisible(false);
      }
    });
  }, []);

  const handleSearch = (e) => {
    setTerm(e.target.value);

    e.target.value
      ? setResults(
          products.filter((product) =>
            product.name.toLowerCase().includes(e.target.value)
          )
        )
      : setResults([]);
  };

  const handleStyle = () => {
    if (isFocused) {
      return { border: '1px solid #fdcc0d', transform: 'translateY(0)' };
    } else if (isVisible) {
      return { transform: 'translateY(0)' };
    } else return {};
  };

  return (
    <>
      <Container>
        <Left>
          <SearchBar ref={searchBarRef} style={handleStyle()}>
            <Input
              placeholder="Search"
              onFocus={() => {
                setIsFocused(true);
                setCursor(true);
              }}
              value={term}
              onChange={handleSearch}
            />
            <SearchIcon style={isFocused ? { color: '#fdcc0d' } : {}} />
            <SearchPanel
              style={
                term && isFocused
                  ? {
                      opacity: 1,
                      visibility: 'visible',
                      transform: 'translateY(0px)',
                    }
                  : {}
              }
            >
              <List ref={listRef}>
                {results.length ? (
                  <>
                    {results.map((result) => (
                      <Fragment key={result.id}>
                        <ListItem
                          as={Link}
                          to={`/products/${result.categories[0].slug}/${result.id}`}
                          onClick={() => {
                            setIsFocused(false);
                            setCursor(false);
                          }}
                          style={
                            cursor ? { cursor: 'pointer' } : { cursor: 'auto' }
                          }
                        >
                          <Image src={result.image.url} />
                          <Info>
                            <Name>{result.name}</Name>
                            <Price>{result.price.formatted_with_symbol}</Price>
                          </Info>
                        </ListItem>
                        <Divider />
                      </Fragment>
                    ))}
                  </>
                ) : (
                  <Message>Sorry! No results found :(</Message>
                )}
              </List>
            </SearchPanel>
          </SearchBar>
          <MSearchIcon ref={iconRef}>
            <SearchIcon />
          </MSearchIcon>
        </Left>
        <Center>
          <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>
        </Center>
        <Right>
          <HeaderLink type="account" to="/account">
            <AccountCircleIcon />
          </HeaderLink>
          <HeaderLink to="/cart">
            <Badge badgeContent={totalItems} color="error">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </HeaderLink>
        </Right>
      </Container>
    </>
  );
}

export default Header;
