import React, { useState } from 'react';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import {
  Container,
  Input,
  InputContainer,
  Label,
  Menu,
  MenuItem,
  MenuList,
  SocialIcon,
  SocialIcons,
  Subscribe,
  Title,
  Wrapper,
} from './styles';

function Footer() {
  const [isFocused, setIsFocused] = useState(false);

  const items = [
    'Contact us',
    'FAQ',
    'w41k3r.com',
    'Sustainability',
    'OUR FOR35T',
    'Privacy Policy',
    'Refund policy',
    'Terms and conditions',
  ];

  return (
    <Container>
      <Menu>
        <Title>Menu</Title>

        <MenuList>
          {items.map((item, index) => (
            <MenuItem key={index}>{item}</MenuItem>
          ))}
        </MenuList>
      </Menu>

      <Wrapper>
        <Subscribe>
          <Label>Subscribe to our emails</Label>

          <InputContainer
            style={isFocused ? { border: '2px solid #fdcc0d' } : null}
          >
            <Input
              placeholder="Email"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <ArrowForwardIcon style={isFocused ? { color: '#fdcc0d' } : null} />
          </InputContainer>
        </Subscribe>

        <SocialIcons>
          <SocialIcon>
            <TwitterIcon />
          </SocialIcon>

          <SocialIcon>
            <FacebookIcon />
          </SocialIcon>

          <SocialIcon>
            <InstagramIcon />
          </SocialIcon>

          <SocialIcon>
            <YouTubeIcon />
          </SocialIcon>
        </SocialIcons>
      </Wrapper>
    </Container>
  );
}

export default Footer;
