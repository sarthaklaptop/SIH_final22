import React from 'react'

const CommunityCards = ({name, location, review}) => {
  return (
    <div className='w-[30%]	bg-white border-slate-400 border-4 rounded-xl p-4 gap-2  my-2'>
        <p className='font-bold text-[#2f2e2e]'>{name}</p>
        <p className='italic underline text-[#515151]'>{location}</p>
        <p>{review}</p>
    </div>
  )
}

export default CommunityCards