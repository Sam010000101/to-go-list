
import { React, useState } from "react";
import WhereTo from "./components/WhereTo";

import './App.css';
import Main from './components/main';
import Form from './components/travel-form';
import Schedule from './components/schedule';
import Footer from './components/footer';
import Jumbotron from './components/jumbotron';
import Contact from './components/contact';
import Nav from './components/nav';


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

      <Nav />
      <div className="container my-8 mx-auto grid gap-4 grid-cols-1 w-11/12">
      <Jumbotron />
      <Form />
      <Schedule />
      <Main />
      <Contact />
      </div>
      <Footer />

    </div>
  );
}

export default App;
