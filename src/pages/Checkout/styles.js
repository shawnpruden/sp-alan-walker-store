import styled from 'styled-components';
import { mobile } from 'mobile';

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

  ${mobile({ fontSize: '1.5rem', textAlign: 'center' })}
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

  .Mui-active,
  .Mui-completed {
    color: #000 !important;
  }

  .css-kb8kkt-MuiBadge-badge {
    background-color: #000;
  }

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

  svg {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    right: 1rem;

    font-size: 1.2rem;

    pointer-events: none;
  }
`;

export const Label = styled.label`
  font-weight: 600;
  color: rgba(0, 0, 0, 0.5);
  font-style: italic;
`;

export const Select = styled.select`
  font-size: 1rem;

  width: 100%;
  padding: 0.8rem;

  border: 2px solid #e5e5e5;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;

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
  color: ${({ type }) => (type === 'submit' ? '#000' : '#fff')};

  background-color: ${({ type }) => (type === 'submit' ? '#fdcc0d' : '#000')};
  border: none;
  box-shadow: 0 2px 5px #616161;

  cursor: pointer;

  transition: all 0.5s;
  &:hover {
    opacity: 0.8;
  }
`;
