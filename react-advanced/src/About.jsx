import { Outlet, useSearchParams } from "react-router-dom";

export default function About() {

    const [searchParams, setSearchParams] = useSearchParams()

   const handleTopic =(newTopic) => {
    setSearchParams({topic : newTopic})
   }


   const urlParams = new URLSearchParams(window.location.search);
   const topicFromURL = urlParams.get("topic");
   console.log("UseSearchParam : ",topicFromURL)


  return (
    <div className="p-6 bg-blue-50 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">
        ℹ️ About Section
      </h2>
      <p className="text-gray-700 mb-4">
        This section gives you insights about our mission, vision, and team.  
        Navigate deeper to explore specific details.
      </p>

      <div className="mt-6">
        <h3 className="text-xl text-gray-800">Choose A Topic</h3>
        <div className="flex space-x-4 mt-4">
            <button onClick={()=>handleTopic("Team")} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-red-600">Team</button>  
            <button onClick={()=>handleTopic("Mission")}  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-red-600">Mission</button>  
            <button onClick={()=>handleTopic("Project")} className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-red-600">Project</button>  
        </div>
        <h1>Clicked Topic: {searchParams.get("topic")}</h1>
      </div>

      {/* Nested routes render here */}
      <div className="mt-6 p-4 bg-white border rounded-lg shadow-sm">
        <Outlet />
      </div>
    </div>
  );
}
