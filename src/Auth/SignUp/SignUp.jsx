import React,{useState,} from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SignUp = () => {
  const linkstyle ={
    color:'red',
    textDecoration:'none',
    fontWeight:'bolder',
    fontSize:'1em',
  };
  const showPassword = '&';
  const hidePassword = 'O';
  const navigate = useNavigate();
  const initialValue = [{
    firstName:'',
    lastName:'',
    userName:'',
    email:'',
    password:'',
    confirmPassword:'',
    age:0,
    school:'',
    select:'',
    tick:false,
  }];

  const [userData,setUserData] = useState(initialValue);
  const [show,setShow] = useState(false);

  const handleChange =(e)=>{
    const {name,value,type,checked} = e.target;
    setUserData({...userData,[name]
      : type === 'checkbox'
      ? checked
      : value});

  };
  console.log(userData);

  const submitHandler =(e)=>{
    e.preventDefault();
        const user = JSON.stringify(userData);
        sessionStorage.getItem('user') === null &&
         sessionStorage.setItem('user',user);
         userData.password === userData.confirmPassword
          ? navigate('/signin')
          : alert ('password and Confirm password must be same');
  };
  return (
    <SignUpContainer>

      <form 
        className='signInForm'
        onSubmit={submitHandler}
      >
        <div className='rowDiv'>
          <input 
            className="inputBox" type={'text'} name={"firstName"} 
            placeholder={"Enter Your First Name"}
            value={userData.firstName} 
            onChange={handleChange} required
          /> <br/>
          
          <input 
            className="inputBox" type="text" name="lastName"
            placeholder="Enter Your Last Name" 
            value={userData.lastName} 
            onChange={handleChange} required
          /><br/>
        </div>

        <div className='rowDiv'>

          <input 
            className="inputBox" type={"text"} name={"userName"} 
            placeholder={"Enter Your User Name"} 
            value={userData.userName} 
            onChange={handleChange} required
          /> <br/>

          <input
            className="inputBox" type="email" name={"email"} 
            placeholder="Enter Your E-mail" 
            onChange={handleChange} required
            value={userData.email} 
          /><br/>
        </div>

        <div className='rowDiv'>
          <input 
            className="inputBox" type={show?"text":"password"}
            name={"password"} value={userData.password} 
            placeholder={"Enter Your Password"} 
            onChange={handleChange} required
          /><br/>
          <button 
            className='showPassword'
            type={'button'}
            onClick={()=>setShow((prev)=>!prev)}
          >
            {show? showPassword:hidePassword}
          </button>

          <input 
            className="inputBox" value={userData.confirmPassword}
            name={"confirmPassword"} 
            type={show?"text":"password"}
            placeholder={"Confirm Your Password"}
            onChange={handleChange} required
          /><br/>
          <button 
            className='showPassword'
            type={'button'}
            onClick={()=>setShow((prev)=>!prev)}
          >
           {show?showPassword:hidePassword}
          </button>
        </div>

        <div className='rowDiv'>
          <input 
            className="inputBox" type={"number"} name={"age"} 
            placeholder={"Enter Your Age"} 
            value={userData.age}
            onChange={handleChange} required
          /><br/>

          <input 
            className="inputBox" type="text" 
            name="school" 
            placeholder="Enter Your School Name" 
            onChange={handleChange} required
          /><br/>
        </div>

        <select 
          name={'select'} id='select'
          value={userData.select}
           onChange={handleChange}
        >
          <option value=''>Choose a Gender</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
        </select>

        <div className="termsOfService">
          <input 
            type={"checkbox"} id="readTerms" required
            name={'tick'} value={userData.tick}
            onChange={handleChange}
          />
          <p className="termsPara">
            I, have read, understood and i agree to the terms 
            and conditions
          </p>
        </div>

        <button 
          className="submitButton" type='submit'
        >
          Sign Up
        </button>
        <p className='signUpSignIn'>Already have an account ? 
           <Link to="/signin" style={linkstyle}
          >
            &nbsp;Sign In
          </Link>
        </p>

      </form>

    </SignUpContainer>
  )
}

export default SignUp

export const SignUpContainer=styled.div`
  background-color:#16195E;
  // rgb(0,128,0);
  width:100%;
  height:85vh;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  .signInForm{
      width:100%;
      height:70vh;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      border-radius: 30px;
      background-color:#16195E; 
  }
  .termsOfService{
      display:flex; 
      align-items:center;
      width:90%;
      justify-content:center;
  }
  .inputBox{
      border:none;
      margin:20px;
      height:40px;
      width:30%;
      border-radius: 6px;
      background: #fffff;
      box-shadow: inset 4px 4px 9px #003200, inset -4px -4px 9px #fffff;
      &::placeholder{
          color:#16195E;
          font-weight:bolder;
          padding-left:10px;
      } 
    }
  }
  .submitButton{
      background-color:whitesmoke;
      color:#16195E;
      border:none;
      width:120px;
      height:50px;
      border-radius:5px;
      font-weight:bolder;
      font-size:20px;
      margin-top:20px;
  }
  .submitButton:hover{
    background-color:#16195E;
    color:whitesmoke;
    border:0.5px solid whitesmoke;
  }
  .termsPara{
      color:whitesmoke;
      padding-left:5px;
  }
  .rowDiv{
    display:flex;
    width:100%;
    align-items:center;
    justify-content:center;
  }
  #select{
    height:40px;
    margin-bottom:10px;
  }
  .signUpSignIn{
    color:whitesmoke;
    margin-top:5px;
    margin-bottom:10px;
  }
  .showPassword{
    height:30px;
    border:none;
    color:#16195E;
    border-radius:3px;
    background-color:lightgrey;
    position:relative;
    left:-40px;
  }
  @media screen and (max-width:1025px){
    .inputBox{
      height:25px;
    }
    .showPassword{
      height:20px;
    }
  }
  @media screen and (max-width:426px){
    .inputBox{
      width:45%;
      font-size:11px;
    }
  }
  @media screen and (max-width:376px){
    .inputBox{
      font-weight:medium;
      font-size:9px;
    }
  }
  @media screen and (max-width:321px){
    .inputBox{
      font-weight:medium;
      font-size:6px;
    }
    .showPassword{
      height:15px;
    }
  }
`