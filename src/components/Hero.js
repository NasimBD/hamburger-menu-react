import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components';
import {HiArrowCircleLeft, HiArrowCircleRight} from 'react-icons/hi'
import { Button } from './Button';

const HeroSection = styled.div`
height: 100vh;
max-hight: 1100px;
overflow: hidden;
`;


const HeroWrapper = styled.div`
width: 100%;
height: 100%;
position: relative;

&::after{
content: '';
background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.2));
width: 100%;
height: 100%;
position: absolute;
left: 0;
top: 0;
}
`;


const HeroSlider = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
`;


const HeroImage = styled.img`
position: absolute;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
object-fit: cover;
`;


const HeroContent = styled.div`
position: relative;
z-index: 1;
padding-left: 0.7rem;

& > * {
    margin-bottom: 1rem;
}

h1, p{
    color: white;
}

p{
    font-weight: bold;
}
`;


const SliderButtons = styled.div`
position: absolute;
z-index:1;
bottom: 1rem;
right: 50%;
transform: translateX(50%);
display: flex;
align-items: center;
`;


const ArrowButtons = css`
color: white;
font-size: 2.7rem;
transition: 0.3s;
user-select: none;
cursor: pointer;

&:hover{
    color: gold;
    transform: scale(1.05);
}
`;


const PrevArrow = styled(HiArrowCircleLeft)`
${ArrowButtons};
margin-right: 0.3rem;
`;


const NextArrow = styled(HiArrowCircleRight)`
${ArrowButtons};
`;


export const Hero = ({slides}) => {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const sliderTimeOutId = setTimeout(() => {
            nextSlide();
        }, 5000)
        return () => clearTimeout(sliderTimeOutId);
    }, [slideIndex])

    const nextSlide = () => {
        if(slideIndex === slides.length - 1 ) {
            setSlideIndex(0);
        }else setSlideIndex(slideIndex + 1);
    }


    const prevSlide = () => {
        if(slideIndex === 0 ) {
            setSlideIndex(slides.length - 1);
        }else setSlideIndex(slideIndex - 1);
    }


  if(!Array.isArray(slides) || slides.length <= 0) {
      return null;
  }  

  return (
   <HeroSection>
       <HeroWrapper>
           {
               slides.map((slide, indx) => {
                   if(indx === slideIndex) {
                       return (
                           <HeroSlider key={indx}>
                               <HeroImage src={slide.image} alt={slide.alt}/>
                               <HeroContent>
                                   <h1>{slide.title}</h1>
                                   <p>{slide.price}</p>
                                   <Button to={slide.path} primary={true}>{slide.label}</Button>
                               </HeroContent>
                           </HeroSlider>
                       )
                   }
                   return null;
               })
           }
           <SliderButtons>
               <PrevArrow onClick={prevSlide}/>
               <NextArrow onClick={nextSlide}/>
           </SliderButtons>
       </HeroWrapper>
   </HeroSection>
  )
}
