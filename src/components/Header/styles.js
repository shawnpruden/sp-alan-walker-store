import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mobile } from '../../mobile';

export const Container = styled.header`
  height: 150px;
  padding: 0.5rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #fff;
  background-color: #000;
  ${mobile({ padding: '1.2rem' })}
`;

export const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;

  ${mobile({ flexDirection: 'column-reverse', alignItems: 'flex-start' })}
`;

export const Language = styled.span`
  font-size: 1rem;
  cursor: pointer;

  ${mobile({ margin: '0.5rem 0.15rem' })}
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #949494;

  margin-left: 2rem;
  padding: 0.4rem;

  transition: all 0.5s;

  svg {
    transition: all 0.5s;
    color: #949494;
    font-size: 1.2rem;
  }

  ${mobile({ display: 'none' })}
`;

export const MSearchIcon = styled.div`
  display: none;
  ${mobile({ display: 'flex', margin: '0.5rem 0' })}
`;

export const Input = styled.input`
  border: none;

  background-color: #000;
  color: #fff;
  &:focus {
    outline: none;
  }
`;

export const Center = styled.div`
  flex: 1;

  text-align: center;
`;

export const Logo = styled.img`
  display: inline-block;
  width: 100px;
  height: 100px;
  padding: 0.5rem;

  transition: all 0.5s;

  &:hover {
    box-shadow: 0 0 15px #fdcc0d;
    transform: scale(1.2);
  }
`;

export const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
  ${mobile({ flexDirection: 'column-reverse', alignItems: 'flex-end' })}
`;

export const HeaderLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1rem;
  color: #fff;

  margin-left: 1.5rem;

  transition: all 0.5s;
  &:hover {
    opacity: 0.8;
  }

  ${mobile({ margin: '0.5rem 0' })}
`;
