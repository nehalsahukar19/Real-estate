import React from 'react';
import styled, { css } from 'styled-components/macro'
import { Button } from './Button';
const SliderButtons = styled.div`
  position: absilute;

`;

const HeroSection = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
`;

const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;
const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before{
    content: '',
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(0deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%);
  }
`;
const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  
`;
const HeroContent = styled.div`

`;

const Hero = ({ slides }) => {
  return (
    <HeroSection>
        <HeroWrapper>
            {slides.map((slide, index) => {
              return (
                <HeroSlide key={index}>
                  <HeroSlider>
                    <HeroImage src={slide.image} alt={slide.alt}/>
                    <HeroContent>
                      <h1>{slide.title}</h1>
                      <p>{slide.price}</p>
                      <Button to={slide.path} primary='true'
                      css={`max-width: 160px;`}
                      >
                        {slide.label}
                      </Button>
                    </HeroContent>
                  </HeroSlider>
                </HeroSlide>
              );
            })}
            <SliderButtons>

            </SliderButtons>
        </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
