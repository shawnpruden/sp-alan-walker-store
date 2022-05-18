import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  padding: 3rem;
`;

export const Filters = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
`;

export const Filter = styled.li``;

export const Label = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
`;

export const Select = styled.select`
  font-size: 1rem;
  border: 1px solid transparent;

  padding: 0.2rem 0;
  margin: 0 0.5rem;
  cursor: pointer;
  transition: all 0.5s;

  &:hover {
    border-bottom: 1px solid #000;
  }
  &:focus {
    outline: none;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  position: relative;
  margin: 3rem 0.5rem;
  min-width: 320px;
  height: 380px;
`;

export const Icons = styled.ul`
  position: absolute;
  right: 10px;
  top: 10px;

  opacity: 0;
  transition: all 0.5s;
`;

export const Card = styled(Link)`
  &:hover ${Icons} {
    opacity: 1;
  }
`;

export const Image = styled.img`
  position: absolute;
  cursor: pointer;

  transition: opacity 1s;
  background-color: #fff;

  height: 100%;
  object-fit: cover;
  object-position: center;

  border: 2px solid #000;
`;

export const Info = styled.div`
  position: absolute;
  bottom: -60px;
  left: 5px;
`;

export const Title = styled.p`
  font-weight: 600;
  color: #616161;
`;

export const Price = styled.h3`
  color: #424242;
`;

export const Icon = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  color: #000;
  font-size: 0.5rem;
  border-radius: 50%;

  margin-bottom: 0.5rem;
  padding: 0.5rem;

  background-color: #fdcc0d;
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }

  &:active {
    transform: scale(1.4);
  }
`;
