import { useEffect, useState } from "react";
import "./App.css";
import api from  "./Utils/api"


// API ----------------


//GET

// function App() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState({
//     status: false,
//     body: "",
//   });

//   useEffect(() => {
//     setLoading(true);
//     try{
//     //  fetch("https://jsonplaceholder.typicode.com/comments")
     
//     axios.all([
//       axios.get("https://jsonplaceholder.typicode.com/comments"),
//       axios.get("https://jsonplaceholder.typicode.com/posts")
//     ]
//     )
//       // .then((response) => response.json())
//       .then(axios.spread((comments,posts) => {

//         setData(comments.data);
//         setLoading(false);
//       }))
//       .catch((error) => {
//         setLoading(false);
//         console.log(`Fetching Issue : ${error}`);
//         setError(prev => ({ ...prev, status: true, body: "Error Occurred" }));
//       });
//     }catch(error){
//       setLoading(false)
//        console.log(`API Error Issue : ${error}`);
//         setError(prev => ({ ...prev, status: true, body: "API  Error" }));
//     }
//   }, []);

//   if (loading) {
//     return (
//       <div>
//         <p>Loading . . .</p>
//       </div>
//     );
//   }

//   if (error.status) {
//     return (
//       <div>
//       <p>Error Facing : {error.body}</p>
//     </div>
//     )
//   }

//   return (
//     <div>
//       <ul>
//         {data.map((post) => (
//           <li key={post.id}>
//             <p>https://jsonplaceholder.typicode.com/posts
//               <strong>Post ID: {post.id}</strong>
//             </p>
//             <p>Data: {post.body}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// POST

function App() {

  const [data, setData] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      title: 'Why Java Matters',
      body : 'Java isn’t just another programming language—it’s the backbone of countless systems we use daily. From enterprise applications and Android apps to financial platforms and large-scale backend systems, Java powers it all.' ,
      userId: 1
    }
    api.post('/posts',newPost)
    .then((response)=> {
      console.log('New Post Added ',response.data)
      setData(prevData => [response.data]);
    })
  };
  

  return (
    <div>
      <h1>Post Request</h1>
      <form onSubmit={handleSubmit}> 
        <button type="submit"> Add Post </button>
      </form>
    </div>
  );
}

export default App;
