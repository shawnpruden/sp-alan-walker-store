import React, { useCallback, useEffect, useRef, useState } from 'react';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

import { ArrowBtn, Banner, Container, Image, Wrapper } from './styles';

import BannerOne from '../../assets/img/banner-1.jpg';
import BannerTwo from '../../assets/img/banner-2.jpg';

function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);
  const slideInterval = useRef();

  const handleClick = useCallback((direction) => {
    if (direction === 'left') {
      setSlideIndex((prevState) => (prevState > 0 ? prevState - 1 : 1));
    } else {
      setSlideIndex((prevState) => (prevState < 1 ? prevState + 1 : 0));
    }

    clearInterval(slideInterval.current);

    slideInterval.current = setInterval(() => {
      handleClick('right');
    }, 5000);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', () => {
      window.location.reload();

      setWidth(window.innerWidth);
    });

    if (width > 500)
      slideInterval.current = setInterval(() => {
        handleClick('right');
      }, 5000);
  }, [handleClick, width]);

  return (
    <Container>
      <ArrowBtn direction="left" onClick={() => handleClick('left')}>
        <ArrowBackIosNewRoundedIcon />
      </ArrowBtn>
      <Wrapper slideIndex={slideIndex}>
        <Banner>
          <Image src={BannerOne} alt="banner" />
        </Banner>
        <Banner>
          <Image src={BannerTwo} alt="banner" />
        </Banner>
      </Wrapper>
      <ArrowBtn direction="right" onClick={() => handleClick('right')}>
        <ArrowForwardIosRoundedIcon />
      </ArrowBtn>
    </Container>
  );
}

export default Slider;
