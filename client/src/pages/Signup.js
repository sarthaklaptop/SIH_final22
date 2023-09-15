import React from 'react'
import Template from '../components/Template'
import farmerssss from '../assets/farmerssss.jpg';

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Join the community of farmers to connect with Smart Farmer for free"
      desc1="."
      desc2="Guidance to Farmers"
      image={farmerssss}
      formtype="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Signup
