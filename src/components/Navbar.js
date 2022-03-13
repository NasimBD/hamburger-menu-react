import React, { useEffect, useState } from 'react';
import { MenuData } from '../data/MenuData';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import BarsSVG from '../images/menu-bars-2.svg';
import { Button } from './Button';
import {MdOutlineHouseboat} from 'react-icons/md';


const Nav = styled.nav`
  display: flex;
  height: 80px;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-indx: 10;
  position: fixed;
  width: 100%;
  z-index: 10;
  transition: 0.4s;
  background-color: ${({bg}) => bg ? 'rgba(250,250,250,0.9)' :'transparent'};
`;

const NavLink = css`
  padding: 0.5rem 0.7rem;
  cursor: pointer;
  text-decoration: none;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Logo = styled(Link)`
  ${NavLink};
  font-style: italic;
  font-size: 4rem;
  color: black;
  filter: drop-shadow(3px 3px white);
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 700px) {
    display: none;
  }

`


const NavMenuLink = styled(Link)`
${NavLink};
 color: white;
 font-weight: bold;
 text-shadow:0px 0px 3px black;

 :hover{
   color: black;
   text-shadow: none;
 }
`

const MenuBars = styled.i`
  display: none;

  @media screen and (max-width: 700px){
    display: inline-block;
    width: 2.5rem;
    height: 2.5rem;
    background: url(${BarsSVG}) 100% center/contain;
    cursor: pointer;
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;

  @media screen and (max-width:700px){
    display: none;
  }

`

export const Navbar = ({toggle}) => {
const [navBg, setNavBg] = useState(false);


const handleScroll = () => {
if(window.pageYOffset > 100){
    setNavBg(true);
  }else{
    setNavBg(false);
  }
}


useEffect(() => {
window.addEventListener('scroll' , handleScroll)
return () => window.removeEventListener('scroll' , handleScroll)
}, [])

  return (
    <Nav bg={navBg}>
      <Logo to="/"><MdOutlineHouseboat/></Logo>
      <MenuBars onClick={toggle}/>
      <NavMenu>
         {
        MenuData.map((menu, indx) => <NavMenuLink to={menu.link} key={indx}>{menu.title}</NavMenuLink>)
      }  
      </NavMenu>
      <NavBtn>
        <Button to="/contact" primary={true}>Contact Us</Button>
      </NavBtn>
     
    </Nav>
  )
}
