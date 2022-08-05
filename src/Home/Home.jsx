import React from 'react'
import styled from 'styled-components'


const Home = () => {

  let userData = JSON.parse(sessionStorage.getItem('user'))
  return (
    <HomeContainer>
      <div className='leftSide'>
        <p>Welcome, {userData.userName}</p>
      </div>
      <div className='rightSide'>
        <h1>Profile Information</h1>
        <ul>
          <li>FiRST NAME : {userData.firstName}</li>
          <li>LAST NAME : {userData.lastName}</li>
          <li>USERNAME : {userData.userName}</li>
          <li>EMAIL ADDRESS : {userData.email}</li>
          <li>AGE : {userData.age}</li>
          <li>GENDER : {userData.select}</li>
          <li>SCHOOL : {userData.school}</li>
        </ul>
      </div>
    </HomeContainer>
  )
};

export default Home

export const HomeContainer = styled.div`
  display:flex;
  justify-content:space-between;
  width:100%;
  height:85vh;

  .leftSide{
    width:25%;
    height:85vh;
    background-color:#16195E;
    color:whitesmoke;
  }
  .rightSide{
    width:70%;
    height:85vh;
    // background-color:whitesmoke;
    color:#16195E;
  }
  h1{
    margin-top:30px;
    // text-align:center;
    margin-left:20%;
  }
  li{
    line-height:50px;
  }
  p{
    margin-top:30px;
    margin-left:5px;
    font-size:20px;
    font-weight:bolder;
  }
  @media screen and (max-width:1025px){
    li{
      line-height:40px;
    }
  }
  @media screen and (max-width:426px){
    h1{
      font-weight:bold;
      font-size:22px;
      margin-left:5%;
    }
  }
  @media screen and (max-width:376px){
    p{
      font-weight:medium;
      font-size:15px;
    }
  }
`