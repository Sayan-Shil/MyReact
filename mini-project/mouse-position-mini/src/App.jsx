import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
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
    } ,[]
  )

  return (
    <div className='mouse-position-container'>
      <h1 id='mouse-text'>Your Mouse pointer is at </h1>
      <div id='position'>
        <p>X : {position.x}</p>
      <p>Y : {position.y}</p>
      </div>
    </div>
   
  )
}

export default App
