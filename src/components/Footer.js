import React from 'react';
import styled from 'styled-components';

export const Footer = () => {
   const date = new Date(); 
   let year =  date.getFullYear();
   console.log(year);

  const FooterWrapper = styled.div`
    margin-top: 2rem;
    background-color: hsl(0, 0%, 80%);
    padding: 2rem;
  ` 

  const Footer = styled.p`
    text-align: center;
    color: gray;
    font-size: 0.8rem;
  `
  
  return (
    <FooterWrapper>
        <Footer>
            &copy;copyright {year}
        </Footer>
    </FooterWrapper>
  )
}
