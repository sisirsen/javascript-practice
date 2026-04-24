import React from 'react'
import { useState } from 'react'

function Project1() {
  const [color,setColor]=useState("black")
  return (
    <div className='w-full h-screen duration-300' style={{backgroundColor:color}}>
     

       <div className='flex bg-white/40  p-2 list-none  w-fit gap-40 items-center justify-center rounded-2xl shadow-lg backdrop-blur-xl fixed bottom-5 left-1/2 -translate-x-1/2'>

      <button onClick={()=> setColor("red")} className='bg-red-500 p-1 px-4 rounded-xl'>Red</button>
      <button onClick={()=> setColor("green")} className='bg-green-500 p-1 rounded-xl px-4'>Green</button>
      <button onClick={()=> setColor("yellow")} className='bg-yellow-500 p-1 rounded-xl px-4'>Yellow</button>
      <button onClick={()=> setColor("purple")} className='bg-purple-500 p-1 rounded-xl px-4'>Purple</button>
      <button onClick={()=> setColor("blue")} className='bg-blue-500 p-1 rounded-xl px-4'>Blue</button>
    </div>
    </div>
   
  )
}

export default Project1