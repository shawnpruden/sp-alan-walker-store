import React, { useState } from 'react';

import { Badge } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import {
  Center,
  Container,
  HeaderLink,
  Input,
  Language,
  Left,
  Logo,
  Right,
  SearchBar,
} from './styles';

import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';

function Header({ totalItems }) {
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
          <HeaderLink to="/account">
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
