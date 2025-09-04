import { useState } from "react";
import MouseTracker from "./MouseTracker";
import './ParentComponent.css'

function ParentComponent(){
    const [ showComponent, setShowComponent] = useState(true)
    const toggleShowComponent = ()=>{
        setShowComponent((prev)=> !prev)
    }

    return (

        <div>
            <button onClick={toggleShowComponent} >
                {showComponent ? 'Unmount Tracker' : 'Mount Tracker'}
            </button>

            {showComponent && <MouseTracker/>}
        </div>

    );
}

export default ParentComponent;