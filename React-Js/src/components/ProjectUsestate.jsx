import React from 'react'
import { useState } from 'react'

function ProjectUsestate() {

  const [count, setCount]=useState(0)
  return (
    <div className='w-fit space-y-2 h-fit p-2 rounded-2xl shadow-2xl'>

    <div className='bg-slate-700 flex justify-center rounded-lg text-white p-2'>The count is {count}</div>
    {count === 20 && alert("Max limit reached")}
    <button className='bg-amber-500 mr-4 rounded p-2' onClick={()=>{setCount(count=> count+1)}} disabled={count==20} >Increase</button>
    <button className='bg-amber-500 mr-4 rounded p-2' onClick={()=>{setCount(count=>(count-1))}} disabled={count==0}>Decrease</button>

    <button className='bg-amber-500 mr-4 rounded p-2' onClick={()=>{setCount(0)}}>Reset</button>

    <button className='bg-amber-500 mr-4 rounded p-2'onClick={()=>{setCount(count=> count+2)}} disabled={count==20}>+2</button>
    <button className='bg-amber-500 rounded p-2'onClick={()=>{setCount(count=> count+5)}} disabled={count==20}>+5</button>
    
    </div>
  )
}

export default ProjectUsestate