
import { React, useState, useRef } from "react";

import './App.css';
import Schedule from './components/schedule';
import Footer from './components/footer';
import Jumbotron from './components/jumbotron';
import Contact from './components/contact';
import Nav from './components/nav';
import Attractions from "./components/attractions";
import Subsection from "./components/subsection";

function App() {
  const initialState = {properties: {name: "polynesia", country_code: "nz"}};
  const [destinationData, setDestinationData] = useState(initialState);
  const [backgoundImage, setBackgoundImage] = useState("");
  const [places, setPlaces] = useState([]);
  const [itinerary, setItinerary] = useState([ [], [], [], [], [], [], [], ]);
  const scrollToListings = useRef();
  const scrollToTop = useRef();

  const setDestination = (data) => {
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

      <Nav  scrollToTop={scrollToTop} />
      <Jumbotron destinationName={destinationData.properties.name} setDestination={setDestination} backgroundImage={backgoundImage} setBackgroundImage={setBackgoundImage} />
      <div className="container mx-auto grid gap-4 grid-cols-1 w-11/12">  
        <button ref={scrollToListings} onClick={() => scrollToTop.current.scrollIntoView({ behavior: 'smooth' })} className="font-itim font-bold text-xl text-blue-500 hover:text-blue-700 pt-6 pb-1">Change destination</button>    
        <div className="container grid mx-auto grid-cols-1 md:grid-cols-2 gap-4 max-h-min">
          <Attractions destinationData={destinationData} places={places} setPlaces={setPlaces} itinerary={itinerary} setItinerary={setItinerary} scrollToListings={scrollToListings} />
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
