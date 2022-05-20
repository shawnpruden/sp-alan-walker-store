import styled from 'styled-components';
import { mobile } from '../../responsiveness';

export const Container = styled.footer`
  padding: 3rem;
  background-color: #000;
  color: #fff;
  border-top: 2px solid #252525;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h4`
  font-size: 1.5rem;
  text-transform: uppercase;
`;

export const MenuList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  ${mobile({ flexDirection: 'column', alignItems: 'center' })}
`;

export const MenuItem = styled.li`
  margin: 1.2rem 0.8rem;

  cursor: pointer;

  transition: all 0.5s ease-in-out;

  &:hover {
    color: #fdcc0d;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 3rem;
  ${mobile({ flexDirection: 'column', alignItems: 'center' })}
`;

export const Subscribe = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.p`
  font-weight: 600;
  margin-bottom: 0.8rem;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 300px;
  border: 2px solid #949494;
  padding: 0.8rem;
  transition: all 0.5s;

  svg {
    transition: all 0.5s;
    color: #949494;
    font-size: 1.2rem;
    cursor: pointer;
  }
`;

export const Input = styled.input`
  font-size: 1rem;
  border: none;

  background-color: #000;
  color: #fff;

  &:focus {
    outline: none;
  }
`;

export const SocialIcons = styled.ul`
  display: flex;
  ${mobile({ marginTop: '1rem' })}
`;

export const SocialIcon = styled.li`
  margin: 1rem;
  opacity: 0.7;
  transition: all 0.5s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;
