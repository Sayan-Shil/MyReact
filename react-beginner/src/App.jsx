
import './App.css'
import MyButton from './MyButton'
import ProfileCard from './ProfileCard'
import PropArray from './PropArray'

//---------------------------------------------------
// First Vite + React

// function App() {

// const element =  <h1 className='greeting'>Hello,World !!</h1>;
// const text = <p>Hello</p>
// let name = "Sayan" 
// const buttonLabel = "Click Here"
// const alertbox = "Button Click"
// const imageurl = "vite.svg"


//   return (
//     <div>
//      {element}
//      <p>Hello , {name}</p>
//      <button onClick={()=> alert(alertbox) } style={{backgroundColor : 'green' , color: 'white'}}>{buttonLabel}</button>
//      {text}
//      <img src={imageurl} alt='Image ' />
//     </div>
//   )
// }

//---------------------------------------------------
//Conditional Redenering

// function App() {

//   // const isLogging = false;
//   // if(isLogging){
//   //   return (
//   //   <div>
//   //     <h1>Welcome Back Nigga</h1>
//   //   </div>
//   // )
//   // }else{
//   //    return (
//   //     <div>
//   //     <h1>Login Kar Nigga</h1>
//   //   </div>
//   //    )
//   // }

//   // let isLogging = false;
//   // const log = <h1> {isLogging ? "Welcome Nigga" : "Bye Nigga"} </h1>

//   // return log

//   const messages  = ["1","6",""]
//   return(
//     <div>
//       {messages.length>0 && <h2>You have {messages.length} unread messages </h2>}
//     </div>
//   )

// }


//-------------------------------------------------------------
//JSX And Function

// function App() {

//   function greet(time){
//      return <h1>Good {time} !!</h1>
//   }

//   const hour = new Date().getHours();
//   var time ;
  

//  switch (hour) {
//   case (hour >= 5 && hour <= 11): time = "Morning"; break;
//   case (hour === 12): time = "Noon"; break;
//   case (hour >= 13 && hour <= 17): time = "Afternoon"; break;
//   case (hour >= 18 && hour <= 20): time = "Evening"; break;
//   default: time = "Night";
// }

//   return(
//    <div>
//      {greet(time)}
//    </div>
//   )
// }


//-------------------------------------------------------------
// Components

// function App(){
//   return(
//     <div>

//       <MyButton/>
//       <MyButton/>
//       <MyButton/>
//       <MyButton/>
//       <MyButton/>
//       <MyButton/>
//       <MyButton/>
//       <MyButton/>
//       <MyButton/>
//       <MyButton/>

//     </div>
//   )
// }

/*

-------------------------------
PROPS

*/

// function App(){
//   return(
//     <div>
//       <h1>Hello</h1>
//       <ProfileCard name="Sayan"/>
//       <ProfileCard name="Arka"/>
//     </div>
//   )
// }
// function App(){

//   const show  = (key)=> {
//     alert("You have been touching..."+key)
//   }


//   function callObject(arr, method) {
//   return {
//     items: arr,          // remove { }
//     clickMethod: method  // remove { }
//   }
// }

 

//   return(
//     // <div>
//     //   <PropArray items={[1,2,3,4,5,6]} clickMethod= {show}/>
//     // </div>
//      <div>
//       <PropArray {...callObject([1,2,3,4,5,6], show)} />
//     </div>
//   )
// }


function App(){
 
  var count =0;

  const inc = function(){
    count++;
  }

  return(
     <div>
      <button onClick={()=> inc()} >Button </button>
      <p>{count}</p>
    </div>
  )
}


export default App
