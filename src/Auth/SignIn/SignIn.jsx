import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const SignIn = () => {
  const navigate = useNavigate();

  const [userName,setUserName] = useState('');
  const [password,setPassword] = useState('');
  const [userData,setUserData] = useState('');

  useEffect(()=>{
    const registerData=JSON.parse(sessionStorage.getItem('user'));
    setUserData(registerData);
    console.log(userData);
},[]);

  const submitHandler =(e)=>{
    e.preventDefault();
    if(userData?.userName===userName && 
        userData?.password===password){
            navigate('/')
    }
    else{
        alert('Username or password not correct')
    }
  };

  return (
    <SignInContainer>
      <form 
        className='formBox' 
        onSubmit={submitHandler}
      >
        <h1>Sign In</h1>
        <input 
          className="inputBox" type={"text"} name={"userName"} 
          placeholder={"Enter Your User Name"} 
          value={userName} 
          onChange={(e)=>setUserName(e.target.value)} required
        /> <br/>
        <input 
          className="inputBox" type={"password"}
          name={"password"} value={password} 
          placeholder={"Enter Your Password"} 
          onChange={(e)=>setPassword(e.target.value)} required
        /><br/>

        <button 
          className="submitButton" type='submit'
         
        >
          Sign In
        </button>
      </form>
    </SignInContainer>
  )
}

export default SignIn

export const SignInContainer = styled.div`
  width:100%;
  height:85vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  .formBox{
    width:100%;
    height:85vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
  }
  background-color:#16195E;
  .inputBox{
    width:45%;
    height:50px;
    margin-top:20px;
    border-radius:8px;
    @media screen and (max-width:376px){
      width:50%;
    }
    ::placeholder{
      padding-left:2%;
      color:#16195E;
      font-weight:bolder;
      
    }
  }
  .submitButton{
    width:120px;
    height:40px;
    background-color:whitesmoke;
    color:#16195E;
    border-radius:3px;
    font-size:1.3em;
    font-weight:bolder;
    border:1px solid whitesmoke;
  }
  .submitButton:hover{
    background-color:#16195E;
    color:whitesmoke;
    border:0.5px solid whitesmoke;
  }
  h1{
    color:whitesmoke;
  }
`