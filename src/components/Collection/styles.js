import styled from 'styled-components';

export const Gallery = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 60vh 60vh;
`;

export const Image = styled.img`
  height: 100%;
  object-position: center;
  object-fit: cover;

  &:first-child {
    grid-row: 1 / span 2;
  }
`;

export const Container = styled.div`
  padding: 3rem;

  &:nth-child(2) ${Gallery} {
    grid-template-columns: 1fr 2fr;
  }

  &:nth-child(2) ${Image} {
    &:first-child {
      grid-row: 1;
    }

    &:last-child {
      grid-row: 1 / span 2;
    }
  }
`;

export const Title = styled.h2`
  display: inline-block;

  color: #fff;
  text-transform: uppercase;
  font-size: 2rem;
  letter-spacing: 2px;

  margin-bottom: 3rem;
`;

export const Underline = styled.div`
  width: 30%;
  height: 4px;
  background-color: #fdcc0d;
  border-radius: 5px;

  margin-top: 0.5rem;
`;

export const Button = styled.div`
  text-align: center;
  margin-top: 5rem;

  a {
    display: inline-block;
    padding: 0.4rem 2rem;
    border: 2px solid #fdcc0d;

    color: #fdcc0d;
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;

    transition: all 0.5s;

    &:hover {
      color: #fff;
      background-color: #fdcc0d;
    }
  }
`;
