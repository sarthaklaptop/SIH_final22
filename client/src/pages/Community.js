import React from 'react';
import CommunityCards from '../components/CommunityCards';
import { Link } from 'react-router-dom';

const Community = ({isLoggedIn, setIsLoggedIn}) => {
  return (
    <div className='w-11/12 mx-auto '>
      <div className='mx-auto flex items-center justify-center font-bold'>
        { isLoggedIn &&
            <Link to="/community/review">
                <button
                  className='bg-richblack-800  py-[8px] text-white
                px-[12px] rounded-[8px] border border-richblack-700'>
                    Write a review
                </button>
            </Link>
            }
      </div>
        <div className='flex  justify-between flex-wrap'>
          <CommunityCards name="Ramesh Kumar" location="Punjab, India" review="I'm a rice farmer, and this app 
          has been a game-changer. Whether it's the dreaded blast disease or brown spot, SmartFarmer has the 
          answers. The expert advice is a lifesaver during the monsoon. My fields have never looked better."/>
          <CommunityCards name="Sunita Devi" location="Andhra Pradesh, India" review="Mangoes are our pride, and
          SmartFarmer has helped us protect our orchards. The app is a treasure trove of information on mango
            diseases. It's our go-to guide during the mango season."/>
          <CommunityCards name="Sanjay Patel" location="Gujarat, India" review="Kudos to SmartFarmer for being 
          available in multiple Indian languages. It's a huge help for farmers like me who prefer to communicate in 
          our mother tongue. The app's user-friendliness and local expertise make it a must-have."/>
          <CommunityCards name="Anjali Sharma" location="Himachal Pradesh, India" review="Tomatoes are our cash crop, 
          and tomato diseases used to give us sleepless nights. Not anymore, thanks to SmartFarmer. We've learned 
          so much from fellow Indian farmers on the app. It's like a virtual farmers' market."/>
          <CommunityCards name="Rajesh Verma" location="Kerala, India" review="Turmeric is our heritage, and SmartFarmer is preserving it. The app's guidance on turmeric diseases and organic farming is invaluable. It's 
            helping us produce the finest haldi (turmeric) for our curries and ceremonies."/>
          <CommunityCards name="Arvind Yadav" location="Uttar Pradesh, India" review="Sugarcane is a major crop here, 
          and SmartFarmer has been our sugar daddy. The app's disease diagnostics and solutions are spot-on. Our 
          sugar mills are happy, and so are we."/>
          <CommunityCards name="Priya Singh" location="Telangana, India" review="Red and green chillies are our pride, 
          and SmartFarmer has helped us spice up our profits. We've connected with experts who understand our local 
          conditions. It's like having a mentor in our pockets."/>
          <CommunityCards name="Vikram Malhotra" location="Haryana, India" review="Wheat is our staple, and 
          SmartFarmer is our staple too. It's a lifeline during the rabi season. The app's disease management 
          tips have saved our harvests. It's a blessing for Indian farmers."/>
          <CommunityCards name="Deepika Patel" location="Gujarat, India" review="Cotton is our white gold, and 
          SmartFarmer is our treasure map. We've learned how to battle bollworms and other pests. The app is a 
          cotton farmer's best friend."/>
        </div>
    </div>
  )
}

export default Community