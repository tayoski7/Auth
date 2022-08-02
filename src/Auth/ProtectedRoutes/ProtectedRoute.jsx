import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';


const userAuth = () => {
    let userData = JSON.parse(sessionStorage.getItem('user'))
    return userData;
}
const ProtectedRoute = () => {
    const userDataAuth = userAuth();
  return (
    userDataAuth 
        ? <Outlet/>
        : <Navigate to='/signin'/>
  )
}

export default ProtectedRoute