import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { commerce } from '../../lib/commerce';

import {
  Button,
  ButtonGroup,
  Form,
  Input,
  InputGroup,
  Label,
  Select,
  SubTitle,
} from './styles';

function AddressForm({ token, nextStep }) {
  const [countries, setCountries] = useState({});
  const [country, setCountry] = useState('');

  const [subdivisions, setSubdivisions] = useState({});
  const [subdivision, setSubdivision] = useState('');

  const [options, setOptions] = useState([]);
  const [option, setOption] = useState('');

  const { register, handleSubmit } = useForm();

  const fetchCountries = async (tokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      tokenId
    );

    setCountries(countries);
    setCountry(Object.keys(countries)[0]);
  };

  const reformedCountries = Object.entries(countries).map(([code, name]) => ({
    id: code,
    option: name,
  }));

  const fetchSubdivisions = async (code) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      code
    );

    setSubdivisions(subdivisions);
    setSubdivision(Object.keys(subdivisions)[0]);
  };

  const reformedSubdivisions = Object.entries(subdivisions).map(
    ([code, name]) => ({
      id: code,
      option: name,
    })
  );

  const fetchOptions = async (tokenId, country, subDivision = null) => {
    const options = await commerce.checkout.getShippingOptions(tokenId, {
      country,
      subDivision,
    });

    setOptions(options);
    setOption(options[0].id);
  };

  const reformedOptions = options.map((option) => ({
    id: option.id,
    option: `${option.description} - (${option.price.formatted_with_symbol})`,
  }));

  useEffect(() => {
    fetchCountries(token.id);
  }, [token.id]);

  useEffect(() => {
    country && fetchSubdivisions(country);
  }, [country]);

  useEffect(() => {
    subdivision && fetchOptions(token.id, country, subdivision);
  }, [subdivision, token.id, country]);

  return (
    <>
      <SubTitle>Shipping address</SubTitle>
      <Form
        onSubmit={handleSubmit((data) => {
          window.scrollTo(0, 0);

          console.log({ ...data, country, subdivision, option });
          nextStep();
        })}
      >
        <Input
          {...register('firstName', { required: true })}
          placeholder="First Name"
          required
        />
        <Input
          {...register('lastName', { required: true })}
          placeholder="Last Name"
          required
        />
        <Input
          {...register('address', { required: true })}
          placeholder="Address"
          required
        />
        <Input
          {...register('email', { required: true })}
          placeholder="Email Address"
          required
        />
        <Input
          {...register('city', { required: true })}
          placeholder="City"
          required
        />
        <Input
          {...register('zip', { required: true })}
          placeholder="ZIP or Postal Code"
          required
        />
        <InputGroup>
          <Label>Country or region</Label>

          <Select value={country} onChange={(e) => setCountry(e.target.value)}>
            {reformedCountries.map((item) => (
              <option value={item.id} key={item.id}>
                {item.option}
              </option>
            ))}
          </Select>
        </InputGroup>

        <InputGroup>
          <Label>Subdivision</Label>

          <Select
            value={subdivision}
            onChange={(e) => setSubdivision(e.target.value)}
          >
            {reformedSubdivisions.map((item) => (
              <option value={item.id} key={item.id}>
                {item.option}
              </option>
            ))}
          </Select>
        </InputGroup>

        <InputGroup>
          <Label>Shipping Options</Label>

          <Select value={option} onChange={(e) => setOption(e.target.value)}>
            {reformedOptions.map((item) => (
              <option value={item.id} key={item.id}>
                {item.option}
              </option>
            ))}
          </Select>
        </InputGroup>
        <ButtonGroup>
          <Button as={Link} to="/cart">
            Back to cart
          </Button>
          <Button type="submit">Next</Button>
        </ButtonGroup>
      </Form>
    </>
  );
}

export default AddressForm;
