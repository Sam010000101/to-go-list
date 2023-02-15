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
      <h2>{destinationName}</h2>
      <WhereTo setDestination={setDestination}/>
      {/* destinationData will be used to load data from the Geoapify Places API */}
    </div>
  );
}

export default App;
