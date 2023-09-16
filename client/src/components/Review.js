import React from 'react'
import { useState } from 'react';
import FileUpload from '../components/FileUpload';

const Dashboard = () => {

  const [formData, setFormData] = useState({Name:"", Description:"", file:{}})

  function changeHandler(event) {

    const {name, value, checked, type} = event.target

    setFormData( previousFormData => {
      return {
        ...previousFormData, 
        [name] : type === "checkbox" ? checked : value
      }
    })
    console.log(formData)
  }

  function submitHandler(event){
    event.preventDefault();
    // Print in console
    console.log("Finally Printing the Data")
    console.log(formData)
    setFormData({
      Name:"",
      Description :"",
      text:""
    })
  }

  
  

  return (
    <div className='flex flex-col justify-center items-center text-white mx-auto h-full max-w-[1160px] w-full gap-4'>

      {/* Heading */}
      <div className='flex gap-4 flex-col'>
        <h2 className='text-3xl'>Write a Review</h2>
      </div>

      {/* File Upload */}
      <div className=''>
        <form onSubmit={submitHandler} className='flex items-center justify-center flex-col p-10 
         border-2   
         border-sky-500 hover:border-solid hover:shadow-lg hover:shadow-sky-500'>
            <label  className='text-sm font-bold'>Name :</label><br/>
            <input
            className='text-sm w-[200px] rounded-sm text-black placeholder:text-slate-400 p-2'
              type='text'
              placeholder='Name'
              name='Name'
              onChange={changeHandler}
              value={formData.firstName}
            />
            <br/>
            <label  className='text-sm font-bold'>Location :</label><br/>
            <input
            className='text-sm w-[200px] rounded-sm text-black placeholder:text-slate-400 p-2'
              type='text'
              placeholder='Name'
              name='Name'
              onChange={changeHandler}
              value={formData.firstName}
            />
            <br/>
            <label  className='text-sm font-bold'>Review :</label><br/>
            <textarea
            className='text-sm w-[200px] text-black rounded-sm placeholder:text-slate-400 p-2'
              type='text'
              rows={4}
              placeholder='Describe the situation'
              name='Description'
              onChange={changeHandler}
              value={formData.Description}
            />
            {/* <FileUpload /> */}
            <br/>
            <button className='text-lg bg-yellow-50 rounded-[8px] font-medium text-richblack-900 
            px-[12px] py-[8px] mt-6'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Dashboard;
