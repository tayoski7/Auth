import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return (
    <FooterContainer>
        <p>&copy; James Adetimehin 2022</p>
    </FooterContainer>
  )
}

export default Footer

export const FooterContainer= styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:30px;
    background-color:whitesmoke;
    color:#16195E;
    font-weight:bolder;
`