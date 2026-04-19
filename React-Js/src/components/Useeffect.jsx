import React, { useEffect } from 'react'
import { useState, UseEffect } from 'react'

function UseEff() {
  const [count, setcount] = useState(0)
  const [first, setfirst] = useState(0)

  useEffect(() => {
    alert("The page will open after click")
    
  }, [])

  useEffect(() => {
    alert("First also doing good")
    
  }, [count])
  
  
  return (
    <>
    <div>Useeffect {count}</div>
    <button onClick={()=>{setcount(count=>count+1)}}>count</button>
    </>
  )
}

export default UseEff