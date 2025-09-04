import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [time, setTime] = useState(new Date());
  const [timestamp, setTimestamp] = useState([{ id: 1, time: time }]);

  const TimeStampHandler = () => {
    setTimestamp([...timestamp, { id: timestamp.length + 1, time: time }]);
  };

  useEffect(() => {
    const Timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(Timer);
  }, []);

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div className="clock-container">
      <h1 id="clock-text">Digital Clock</h1>
      <h1 id="clock"> {formattedTime} </h1>
      <button id="time-stamp-button" onClick={TimeStampHandler}>
        TimeStamp
      </button>
      <ul>
        {timestamp.map((obj, index) => (
          index >= 1 ? <li key={index}>
            {obj.time.toLocaleDateString("en-US", {
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </li> : null
        ))}
      </ul>
    </div>
  );
}

export default App;
