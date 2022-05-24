import styled from 'styled-components';
import { mobile } from '../../mobile';

export const Container = styled.section`
  display: flex;
  padding: 5rem;

  ${mobile({ padding: '1rem', flexDirection: 'column' })}
`;

export const Left = styled.div`
  flex: 2;
`;

export const Image = styled.img`
  border: 2px solid #eee;
  margin-bottom: 1rem;
`;

export const Right = styled.div`
  flex: 1;
  margin: 0 3rem;

  ${mobile({ margin: 0 })}
`;

export const Title = styled.h3`
  font-size: 2rem;
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 1rem;
`;

export const Price = styled.p`
  font-size: 1.2rem;
  text-decoration: underline;
  text-underline-offset: 5px;
  margin: 1rem 0;
`;

export const Label = styled.label`
  font-size: 1rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;

  margin: 2rem 0 5rem 0;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 160px;
  height: 50px;

  font-size: 1rem;
  color: #000;
  border: none;
  background-color: #fdcc0d;
  box-shadow: 0 2px 5px #616161;

  cursor: pointer;

  transition: all 0.5s;

  &:hover {
    opacity: 0.8;
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  margin: 0 0.8rem;

  transition: all 0.5s;

  &:hover {
    color: #fdcc0d;
  }
`;

export const Info = styled.p`
  margin: 1rem 0;
`;
