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
`;

export const SearchBar = styled.div`
  position: relative;
  z-index: 10;

  display: flex;
  align-items: center;
  border: 1px solid #949494;

  padding: 0.4rem;

  transition: all 0.5s;

  svg {
    transition: all 0.5s;
    color: #949494;
    font-size: 1.2rem;
  }

  @media only screen and (max-width: 500px) {
    position: absolute;
    top: 2px;
    left: 0;
    width: 100%;

    justify-content: space-between;

    padding: 0.4rem 1.2rem;

    background-color: #000;
    transform: translateY(calc(-100% - 2px));
  }
`;

export const MSearchIcon = styled.div`
  display: none;
  ${mobile({ display: 'flex', alignItems: 'center' })}
`;

export const Input = styled.input`
  border: none;

  background-color: #000;
  color: #fff;

  &:focus {
    outline: none;
  }

  ${mobile({ flex: 1 })}
`;

export const SearchPanel = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: -1px;

  opacity: 0;
  visibility: hidden;
  transform: translateY(10px);
  transition: all 0.5s, visibility 0s;

  width: 500px;
  border: 1px solid #eee;
  background-color: #fff;

  ${mobile({ width: 'calc(100% + 2px)' })}
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  padding: 0.5rem;
`;

export const ListItem = styled.li`
  display: flex;

  color: #000;

  border: 2px solid transparent;
  border-radius: 5px;

  transition: all 0.5s;
  &:hover {
    border: 2px solid #fdcc0d;
  }
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;

  object-fit: cover;
  object-position: center;

  padding: 0.5rem;
`;

export const Info = styled.div`
  padding: 1rem 0 0 1rem;
`;

export const Name = styled.h5`
  font-size: 1rem;
`;

export const Price = styled.p`
  margin: 0.5rem 0;

  color: #757575;
  font-size: 0.8rem;
  font-style: italic;
`;

export const Divider = styled.hr`
  margin: 0.5rem 0;

  background-color: #eee;
  border: none;

  width: 100%;
  height: 1px;
`;

export const Message = styled.h6`
  color: #000;
  font-size: 1rem;
  padding: 1rem;
  text-align: center;
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

  @media only screen and (max-width: 500px) {
    display: ${(props) => (props.type === 'account' ? 'none' : 'block')};
  }
`;
