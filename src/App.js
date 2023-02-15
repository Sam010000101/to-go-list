import './App.css';
import React from 'react';
import Main from './components/main';
import Form from './components/travel-form';
import Schedule from './components/schedule';
import Footer from './components/footer';
import Jumbotron from './components/jumbotron';
import Contact from './components/contact';
import Nav from './components/nav';

function App() {
  return (
    <div className="App">
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
