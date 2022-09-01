import styled from 'styled-components';
import { mobile } from 'mobile';

export const Container = styled.section`
  position: relative;

  overflow: hidden;

  background-color: #000;
`;

export const ArrowBtn = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === 'left' && '1rem'};
  right: ${(props) => props.direction === 'right' && '1rem'};

  color: #fff;

  width: 30px;
  height: 30px;
  padding: 1.2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  cursor: pointer;

  transition: all 0.5s;

  opacity: 0.8;

  &:hover {
    background-color: #9494947c;
    opacity: 1;
  }

  ${mobile({ display: 'none' })}
`;

export const Wrapper = styled.div`
  display: flex;

  transition: all 1.5s;
  transform: translateX(${(props) => props.slideIndex * -100}vw);

  ${mobile({ transform: 'translateX(-100vw)' })}
`;

export const Banner = styled.div``;

export const Image = styled.img`
  width: 100vw;
  height: 400px;
  object-fit: cover;
  object-position: center;
`;
