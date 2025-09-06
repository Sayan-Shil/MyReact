import './App.css'
//useState
import { createContext, useContext, useEffect, useRef, useState } from 'react'

// React Hook -------------------------------


// function App() {

//   // Array Destructuring
// //   const [count, setCount] = useState(0); // Returning Array state and function to update



  
// //   return (
// //     <div className='app-container'>
// //       <h1>Counter Value : {count}</h1>
// //       <button onClick={()=> setCount(count+1)}> + </button>
// //       <button onClick={()=> setCount(count-1)}> - </button>
// //     </div>
// //   )
// // }

// UseState
// ----------------------------------------------------
// // Step Counter

// const [count, setCount] = useState(1); // Returning Array state and function to update
// const [step, setStep] = useState(1); 

// const multiply = ()=>{
//   // setCount(count*step) // Direct Form will not rerender
//    setCount(count => count*step) // Indirect Form will rerender
// }
// const divide = ()=>{
//   // setCount(count/step)
//   setCount(count => count/step)
// }


  
//   return (
//     <div className='app-container'>
//       <h1>Counter Value : {count}</h1>
    
//       <button onClick={()=> multiply()}> + </button>
//       <button onClick={()=> divide()}> - </button>
//       <input type="number" value={step} onChange={e => setStep(parseInt(e.target.value))} />
//     </div>
//   )
// }



// function App() {

// // Step Counter

// const [counter,setCounters] = useState([{id: 1, value:0}])

// // Change Counter
// const addCounter = ()=>{
//   // setCounters([{id: 1, value:0} , {id: 2, value:0} , {id: 3, value:0}])
//   setCounters([...counter, {id: counter.length+1, value:0}])
// }

// const increament = (id)=>{
//   setCounters(counter.map(c=>  c.id === id ? {...c,value: c.value +1} : c))
// }
  
//   return (
//     <div className='app-container'>
//       <button onClick={addCounter}>Add Button</button>
//       <ul>
//         {counter.map(c => (
//           <li key={c.id}>
//             Counter No : {c.id}
//             Counter: {c.value}
//             <button onClick={()=>increament(c.id)}>+</button></li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// function App() {
//     // How you change the variable?
//     const [count,setCount] = useState(0)
//     const onClickHandler = ()=> {
//         setCount(count=> count+1);
//     }

//     // What changes you want to see if variable changed?
//     useEffect(()=>{
//         document.title = `Count : ${count+1}`;
//     },[count])

  
//   return (
//     <div>
//         <button onClick={onClickHandler}>Click Me</button>
//     </div>
//   )
// }

//----------------------------------------------------------------
// UseRef 

// function App() {
    
//     const [count,setCount] = useState(0);
//     const countRef = useRef(0)

//     const onClickHandler = ()=> {
//         setCount(count=> count+1);
//     }
//     const onClickRefHandler = ()=> {
//         countRef.current += 1;
//     }

//     // What changes you want to see if variable changed?
//     useEffect(()=>{
//        console.log("Re-rendered")
//        console.log("Count :",count)
//        console.log("CountRef :",countRef.current)
//        console.log("---------------------------------")
//     })

  
//   return (
//     <div>
//       <h1> Count : {count} </h1>
//       <button onClick={onClickHandler}>Change Count</button>
//       <h1> CountRef : {countRef.current} </h1>
//       <button onClick={onClickRefHandler}>Change CountRef</button>
//     </div>
//   )
// }


// function App() {
    
//    // UseRef in DOM manipulation
//    const input = useRef(null)

//    const focusHandler = ()=>{
//     input.current.focus();
//     input.current.style.background= "black"
//    }
  
//   return (
//     <div>
//       <input ref={input}  type="text" placeholder='Type Your Name' />
//       <button onClick={focusHandler}> Focus </button>
//     </div>
    
//   )
// }

// ----------------------------------------------------
// UseContext

//Create context outside function
// const MyContext = createContext("React")

// function App() {
    
  
//   return (
//     <div style={{margin: '20px'}}>
//       <GrandChildApp/>
//       <MyContext.Provider value='Java'>
//       <div className='app' style={{border: '2px solid black', padding: '20px'}}>
//       <p>I am inside App Container</p>
//       <ChildApp/>
//     </div>
//     </MyContext.Provider>

//     </div>
    
//   )
// }

// function ChildApp() {

//   return (
//     <div className='child-app' style={{border: '2px solid blue', padding: '20px'}} >
//       <p>I am inside Child App Container</p>
//       <GrandChildApp/>
//     </div>
//   )
// }

// function GrandChildApp(){

//   // //  Get Context
//    const getContext = useContext(MyContext)

//   return (

//       <div className='grand-child-app' style={{border: '2px solid green', padding: '20px'}}>
//       <p>I am inside Grand Child App Container</p>
//       <h1>I am Grand Child of {getContext}</h1>
//     </div>
    

     
//   )

// }

//----------------------------------------------------
// Custom Hook - Use React Logic accross project



function App() {

  const {count,increament,decreament} = useCounter(450);
  
  return (

    <div>
      <h1>Custom Hooks</h1>
      <h1>Counter: {count} </h1>
      <button onClick={increament}> + </button>
      <button onClick={decreament}> - </button>
      
    </div>
  )
}

function useCounter(initValue){

  const [count,setCount] = useState(initValue)
  const increament = () => setCount((c)=>c+1)
  const decreament = () => setCount((c)=>c-1)

  return {count,increament,decreament}

}






export default App
