import styled from 'styled-components';
import { mobile } from '../../mobile';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 3rem;

  ${mobile({ padding: '2rem 1rem' })}
`;

export const Title = styled.h4`
  font-size: 2rem;
  font-weight: normal;
  text-transform: uppercase;

  margin-bottom: 1rem;

  ${mobile({ fontSize: '1.5rem' })}
`;

export const SubTitle = styled.h4`
  font-size: 1.4rem;
  letter-spacing: 1px;

  margin-top: 2rem;
`;

export const Wrapper = styled.div`
  width: 540px;
  padding: 2rem;

  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);

  ${mobile({ width: '100%', padding: '1rem 0.5rem' })}
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  flex: 1;
  font-size: 1rem;

  padding: 0.8rem;
  margin: 1rem 1rem 0 0;

  border: 2px solid #e5e5e5;

  transition: all 0.5s;
  &:focus {
    outline: none;
    border: 2px solid #fdcc0d;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  margin: 1rem 1rem 0 0;
`;

export const Label = styled.label`
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
  font-style: italic;
`;

export const Select = styled.select`
  font-size: 1rem;

  margin: 0.5rem 0;
  padding: 0.8rem;

  border: 2px solid #e5e5e5;

  transition: all 0.5s;
  &:focus {
    outline: none;
    border: 2px solid #fdcc0d;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
`;

export const Button = styled.button`
  padding: 0.6rem 2rem;
  margin: 2rem 0;

  font-size: 1rem;
  color: #fff;
  background-color: #000;
  border: none;
  box-shadow: 0 2px 5px #616161;
  cursor: pointer;

  transition: all 0.5s;
  &:hover {
    opacity: 0.8;
  }
`;
