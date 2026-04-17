import { useState } from 'react'
import React from 'react'

function Usestate() {

  const [count, setCount]=useState(0);
  return (
    <>
    <div className='flex gap-4'>
    <div  className='border bg-slate-700 p-2 text-white rounded'>The count is {count} </div>
    <button className='border p-2 bg-amber-400 rounded' onClick={(()=>(setCount(count =>count+1)))}>Increase</button>
    <button className='border p-2 bg-amber-400 rounded' onClick={(()=>(setCount(count => count-1)))} disabled={count==0}>Decrease</button>
    </div>
      

   
    </>
    
  )
}

export default Usestate