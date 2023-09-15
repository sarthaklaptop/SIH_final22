import React from 'react'
import Template from '../components/Template'
import farmerssss from '../assets/farmerssss.jpg';

const Login = ({setIsLoggedIn}) => {

  return (
    <Template
      title="Welcome Back"
      desc1="."
      desc2="Guidance to Farmers."
      image={farmerssss}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
    // <h1>Login</h1>
  )
}

export default Login
