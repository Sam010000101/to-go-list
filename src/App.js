
import { React, useState } from "react";

import './App.css';
import Main from './components/main';
import Form from './components/travel-form';
import Schedule from './components/schedule';
import Footer from './components/footer';
import Jumbotron from './components/jumbotron';
import Contact from './components/contact';
import Nav from './components/nav';


function App() {
  
  const [destinationData, setDestinationData] = useState({properties: {name: "maldives"}});
  const [backgoundImage, setBackgoundImage] = useState("");

  const setDestination = (data) => {
    setDestinationData(data);
  }

  return (
    <div className="App">

      {/* destinationData will be used to load data from the Geoapify Places API */}

      <Nav />
      <div className="container my-8 mx-auto grid gap-4 grid-cols-1 w-11/12">
      <Jumbotron destinationName={destinationData.properties.name} setDestination={setDestination} backgroundImage={backgoundImage} setBackgroundImage={setBackgoundImage}/>
      <Schedule />
      <Main />
      <Contact />
      </div>
      <Footer />

    </div>
  );
}

export default App;
