import React from 'react';
import farmerssss from '../assets/farmerssss.jpg';
import ImageScroll from '../components/ImageScroll';
import AboutImageCards from '../components/AboutImageCards';

const About = ({isLoggedIn}) => {
    return (
    <div className='flex flex-col  justify-center items-center text-white h-[100%] gap-4  '>
        <div className='flex flex-row justify-center items-center text-white h-[100%] gap-4 p-10 mt-15'>
          <div className='flex flex-col w-1/2 gap-0 ml-10'>
            <h1 className=' text-[#ffffff] text-4xl font-bold '>Empowering Farmers Through Expertise</h1><br></br>
            <p className='text-[#515151] text-base pb-20 font-bold w-4/5'> Here, we are on a mission to revolutionize agriculture by 
              connecting farmers like you with seasoned agricultural experts. Our platform 
              allows you to upload photos of your crops and receive expert guidance to ensure 
              your farm's success.
            </p>
          </div>

          <div className='w-1/2 '>
            <img width={500} height={500} src={farmerssss}/>
          </div>
        </div>

        {/* <div className='w-11/12 flex flex-row'>
          <ImageScroll className="w-full"/>
        </div> */}
        <div className='w-11/12 flex flex-row gap-4 mx-auto my-4 mb-4'>
          <AboutImageCards className="w-full"/>
        </div>


      </div>
    )
  }


export default About;