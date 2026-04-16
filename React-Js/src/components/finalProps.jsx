import React from 'react'

function FinalProps({goal,location,career}) {
  return (
    <div className='h-[90px] w-[90px] rounded-xl bg-blue-700 text-white  shadow-lg '>
      <div>{goal}</div>
      
      <div>{career}</div>
      
      <div>{location}</div>

    </div>
  )
}

export default FinalProps;