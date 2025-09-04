import { useEffect, useState } from 'react'
import './MouseTracker.css'

function MouseTracker() {
  const [position, setPosition] = useState({
    x : 0,
    y: 0
  })

  useEffect(
    ()=> {
      const onHandleMouseMove = (event)=>{
        setPosition({x : event.clientX , y: event.clientY})
      }
      window.addEventListener('mousemove',onHandleMouseMove)

      // CleanUp Function
      return ()=> (
         window.removeEventListener('mousemove',onHandleMouseMove)
      );
    } ,[]
  )

  return (
    <div className='mouse-position-container'>
      <h1 id='mouse-text'>Your Mouse pointer is at </h1>
      <div id='position'>
        <p>X : {position.x}</p>
      <p>Y : {position.y}</p>
      </div>
      <button id='button' onClick={()=> setPosition({x : 0, y: 0})}>Clean</button>
    </div>
   
  );
}

export default MouseTracker
