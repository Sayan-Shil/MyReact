import { useState } from 'react'
import './App.css'

function App() {

  const [backgroundColor, setBackgroundColor] = useState("#000000ff")
  const generateRandomColors = (num) => {
  return Array.from({ length: num }, () =>
    "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")
  );
};

const colors = generateRandomColors(5);

  const changeColorHandler = (color)=>{
    setBackgroundColor(color)
  }


  return (
    <div className='color-container' style={{backgroundColor : backgroundColor}}>
      <h1>Background Color Picker</h1>
      <div className='color-palette'>
        {
          colors.map((col,index)=>(
            <div 
            key={index}
            className='color-box'
            style={{backgroundColor : col}}
            onClick={()=> changeColorHandler(col)}></div>
          ))
        }
      </div>
      <div className='customColorPicker'>
        <input type="color" value={backgroundColor} onChange={(e)=> changeColorHandler(e.target.value)} />
      </div>
    </div>
  )
}

export default App
