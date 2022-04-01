import "./App.css";
import { useEffect,useState } from "react";
import { Timer } from "./timer";

function App() {
  const [visible,setVisible]=useState(true);
  return (
    <div className="App">
      {visible ? <Timer /> : null}
      <button
        onClick={() => {
          setVisible(visible ? false : true);
        }}
      >
        {visible ? "Restart" : "Start"}
      
      </button>
    </div>
  );
}
      
export default App;
