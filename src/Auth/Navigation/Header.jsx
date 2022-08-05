import React, {useState} from 'react'
import styled from 'styled-components'
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-router-dom'
export const Header = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }
  const linkstyle ={
    color:'#16195E',
    textDecoration:'none',
    fontWeight:'bolder',
    fontSize:'1.4em'
  };
  return (
    <Container>
      <ContainerWrapper>
        <LogoWrap>
          <Logo1>Techaton</Logo1>
          <Logo>Project</Logo>
        </LogoWrap>

        <Navs onClick={handleClick} click={click}>
          <Link to='/' style={linkstyle}>
            <NavLinks>Home</NavLinks>
          </Link>
          <Link to='/signin' style={linkstyle}>
            <NavLinks>Sign In</NavLinks>
          </Link>
          <Link to='/signup' style={linkstyle}>
            <NavLinks>Sign Up</NavLinks>
          </Link>
        </Navs>

      
        <MobileIcon onClick={handleClick}>
          {click ? <FaTimes/> : <FaBars/>}
        </MobileIcon>
      </ContainerWrapper>
    </Container>
  )
}

const Container = styled.div`
   width: 100%;
   height: 80px;
   background-color: white;
   color: #16195E;
  //  display: flex;
  //  justify-content: center;
`


const ContainerWrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

`
const Logo = styled.div`
  font-size: 35px;
`
const Logo1 = styled.div`
  font-size: 35px;
  font-weight: bold;
`
const LogoWrap = styled.div`
   display: flex;
   margin-left:10px;
`
const MobileIcon = styled.div`
  font-size: 25px;
 display: none;
  @media screen and (max-width: 768px){
    display: block;
  }
  
`

const Navs = styled.ul`
  width: 500px;
  height:100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-weight: bold;
@media screen and (max-width: 768px){
  flex-direction: column;
  justify-content:space-around;
  position: absolute;
  background-color: whitesmoke;
  // opacity: 0.9;
  height:100%;
  width: 100%;
  top:63px;
  left: ${({click}) => (click ? 0 : '-100%' )};
  transition: all 0.8s ease-in-out;
}
`

const NavLinks = styled.li`
   list-style: none;
`

const Button = styled.div`
  background-color: #00A962;
  width: 120px;
  height: 40px;
  color: white;
  padding: 10px 0 0 0;
  text-align: center;
  @media screen and (max-width:426px){
    display:none;
  }
`