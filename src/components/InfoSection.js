import React from 'react';
import styled from 'styled-components';
import {Button} from './Button';

const Section = styled.section`
width: 100%;
margin-top: 1rem;
margin-bottom: 1rem;
`

const Container = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
// grid-template-rows: 800px;
align-items: center;
`

const ColumnLeft = styled.div`
padding: 1rem;
line-height: 1.4;
color: rgba(0,0,0,0.6);

h1{
  color: rgba(0,0,0,0.8);
  margin-bottom: 1rem;
  font-size: clamp(1.5rem, 6vw, 2rem);
}

p{
  margin-bottom: 1rem;
}
`


const ColumnRight = styled.div`
padding: 1rem;
order: ${({reverse}) => reverse ? '-1' : '0'};

img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}
`


export const InfoSection = ({heading, paragraphOne, paragraphTwo, buttonLabel, image, reverse, delay}) => {
  return (
    <Section>
      <Container>
          <ColumnLeft>
            <h1>{heading}</h1>
            <p>{paragraphOne}</p>
            <p>{paragraphTwo}</p>
            <Button to="/homes" primary={true}>{buttonLabel}</Button>
          </ColumnLeft>
          <ColumnRight reverse={reverse}>
            <img src={image} alt="home"/>
          </ColumnRight>
      </Container>
    </Section>
  )
}
