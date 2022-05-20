import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import { mobile } from '../../responsiveness';

const Container = styled.nav`
  background-color: #000;
  border-bottom: 2px solid #252525;
`;

const NavbarItems = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 50px;

  ${mobile({ flexDirection: 'column', alignItems: 'center', height: '100%' })}
`;

const NavbarItem = styled.li`
  margin: 0 1rem;

  cursor: pointer;

  & a {
    color: #fff;
    padding: 0.2rem 0;
    transition: color 0.5s ease-in-out;
  }

  & a:hover {
    color: #fdcc0d;
  }

  ${mobile({ margin: '0.5rem' })}
`;

function Navbar() {
  return (
    <Container>
      <NavbarItems>
        <NavbarItem>
          <NavLink
            to="/products/core-collection"
            style={(navState) =>
              navState.isActive
                ? { color: '#fdcc0d', borderBottom: '2px solid #fdcc0d' }
                : {}
            }
          >
            Core Collection
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to="/products/melting-rose"
            style={(navState) =>
              navState.isActive
                ? { color: '#fdcc0d', borderBottom: '2px solid #fdcc0d' }
                : {}
            }
          >
            Melting Rose
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to="/products/drone-repair-shop"
            style={(navState) =>
              navState.isActive
                ? { color: '#fdcc0d', borderBottom: '2px solid #fdcc0d' }
                : {}
            }
          >
            Drone Repair Shop
          </NavLink>
        </NavbarItem>
      </NavbarItems>
    </Container>
  );
}

export default Navbar;
