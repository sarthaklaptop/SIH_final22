import React from 'react'
import farmerssss from '../assets/BgMainPage.png'
import ButtonComponent from '../components/ButtonComponent'
import ImageScroll from '../components/ImageScroll'

const Home = ({isLoggedIn}) => {
  return (
    <div className=''>
      {/* Hero Section */}
      <div className='flex flex-row justify-center items-center text-white h-[100%] gap-4  '>
        <div className='flex flex-col px-10'>
          <h1 className='text-[#ffffff] text-4xl font-bold '>Empowering Farmers <br/> Through Expertise</h1><br></br>
          <p className='text-[#515151] -py-2 font-bold pb-20'>Connect with Agricultural Experts to Enhance Your Crop Health</p>

          <botton className="bg-white flex justify-center items-center my-2 w-2/6 text-black font-bold py-[8px] px-[12px] rounded-full
          border border-richblack-700 cursor-pointer hover:border-orange-400 hover:text-orange-400 hover:shadow-orange-500 
          hover:delay-75 hover:scale-200"><ButtonComponent/></botton>
        </div>

        <img src={farmerssss} width={500} className="rounded-xl hover:scale-110 hover:delay-75 transition-all"></img>
      </div>

      {/* How It Works Section */}

      {/* <p>How It Works Section</p> */}

      <div className='w-11/12 flex flex-row gap-4 mx-auto my-4 mb-4'>
          <ImageScroll className="w-full"/>
      </div>
    </div>
  )
}

// bg-richblack-800 text-richblack-100 py-[8px] 
// px-[12px] rounded-[8px] border border-richblack-700

// cursor-pointer hover:bg-orange-300 p-3 rounded-lg

export default Home;
