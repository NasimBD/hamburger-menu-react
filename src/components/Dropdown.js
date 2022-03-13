import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { MenuData } from '../data/MenuData';
import { Button } from './Button';

const DropdownContainer = styled.div`
    position: fixed;
    z-index: 10;
    width: 100%;
    height: 100%;
    background: #cd853f;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => isOpen ? '1' : '0'};
    top: ${({isOpen}) => isOpen ? '0' : '-100%'};
    }
`

const Icon = styled.div`
position: absolute;
right: 1.5rem;
top: 1.2rem;
font-size: 2rem;
cursor: pointer;
`

const CloseIcon = styled(FaTimes)`
   color: #000d1a; 
`

const DropdownWrapper = styled.div``

const DropdownMenu = styled.div `
display: grid;
grid-template-columns: 1fr;
grid-template-rows: repeat(4, 80px);
text-align: center;
margin-bottom: 4rem;

@media screen and (max-width: 480px){
    grid-template-rows: repeat(4, 60px);
  }
`

const DropdownLink = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
color: #fff;
font-size: 1.5rem;
text-decoration: none;
cursor: pointer;
transition: 0.2s ease-in-out;

&:hover{
    color: #000d1a;
}
`

const BtnWrapper = styled.div`
display: flex;
justify-content: center;
`

export const Dropdown = ({isOpen, toggle}) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
         <Icon onClick={toggle}>
            <CloseIcon/>
         </Icon>   
        <DropdownWrapper>
            <DropdownMenu>
                 {
                MenuData.map((item, index) => <DropdownLink key={index} to={item.link}>{item.title}</DropdownLink>)
            }
            </DropdownMenu>
            <BtnWrapper>
                <Button to="/contact" primary={true} big={true}>Contact Us</Button>
            </BtnWrapper>
        </DropdownWrapper>
    </DropdownContainer>
  )
}
