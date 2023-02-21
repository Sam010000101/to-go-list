
import { React, useState } from "react";

import './App.css';
import Schedule from './components/schedule';
import Footer from './components/footer';
import Jumbotron from './components/jumbotron';
import Contact from './components/contact';
import Nav from './components/nav';
import Attractions from "./components/attractions";
import Subsection from "./components/subsection";

function App() {
  
  const initialState = {properties: {name: "maldives"}};
  const [destinationData, setDestinationData] = useState(initialState);
  const [backgoundImage, setBackgoundImage] = useState("");
  const [places, setPlaces] = useState([]);
  const [itinerary, setItinerary] = useState([ [], [], [], [], [], [], [], ]);

  const setDestination = (data) => {
    setDestinationData(data ? data : initialState);

    if (data) {
      setDestinationData(data);
    } else {
      setDestinationData(initialState);
      setPlaces([]);
    }
  }

  return (
    <div className="App">

      {/* destinationData will be used to load data from the Geoapify Places API */}

      <Nav />
      <div className="container mx-auto grid gap-4 grid-cols-1 w-11/12">
      <Jumbotron destinationName={destinationData.properties.name} setDestination={setDestination} backgroundImage={backgoundImage} setBackgroundImage={setBackgoundImage} />
      
      <div className="container grid mx-auto grid-cols-1 md:grid-cols-2 gap-4 max-h-min">
        <Attractions destinationData={destinationData} places={places} setPlaces={setPlaces} itinerary={itinerary} setItinerary={setItinerary} />
        <Schedule itinerary={itinerary} setItinerary={setItinerary} />
      </div>

      <Subsection destinationData={destinationData}/>
      <Contact />
      </div>
      <Footer />

    </div>
  );
}

export default App;
