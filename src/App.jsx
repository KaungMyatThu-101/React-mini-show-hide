import { useState } from "react";

import "./App.css";
import TripList from "./Components/Triplist/TripList";

function App() {
  const [count, setCount] = useState(0);
  let [show, setshow] = useState(true);

  return (
    <>
      <div className="container">
        <div className="flex-container">
          <div>
            <button onClick={() => setshow(false)}>Hide</button>
            <button onClick={() => setshow(true)}>Show</button>
          </div>
        </div>
      </div>

      {show && <TripList />}
    </>
  );
}

export default App;
