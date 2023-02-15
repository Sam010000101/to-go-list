import { React, useState } from "react";
import "./App.css";
import WhereTo from "./components/WhereTo";

function App() {
  
  const [destinationData, setDestinationData] = useState({});
  const [destinationName, setDestinationName] = useState("");

  const setDestination = (data) => {
    setDestinationData(data);
    setDestinationName(data.properties.name);
  }

  return (
    <div className="App">
      <h1 className="bg-red-400">
        Lets see if this branch works
      </h1>
      <h2>{destinationName}</h2>
      <WhereTo setDestination={setDestination}/>

    </div>
  );
}

export default App;
