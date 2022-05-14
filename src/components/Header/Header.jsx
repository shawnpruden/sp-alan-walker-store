import React, { useState } from 'react';
import { Badge } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {
  Center,
  Container,
  Input,
  Language,
  Left,
  Logo,
  HeaderItem,
  Right,
  SearchBar,
} from './styles';

import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <>
      <Container>
        <Left>
          <Language>En</Language>
          <SearchBar style={isFocused ? { border: '1px solid #fdcc0d' } : {}}>
            <Input
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <SearchIcon style={isFocused ? { color: '#fdcc0d' } : {}} />
          </SearchBar>
        </Left>
        <Center>
          <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>
        </Center>
        <Right>
          <HeaderItem>Sign Up</HeaderItem>
          <HeaderItem>
            <Badge badgeContent={4} color="error">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </HeaderItem>
        </Right>
      </Container>
    </>
  );
}

export default Header;
