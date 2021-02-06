import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";

import Slide from "./Components/Carosel/Slide"
import Navbar from "./Components/Navbar"

import RequestTab from "./Components/Requests/Request"
import Services from "./Components/Services/Services"
import Payment from "./Components/Payments/Payment"

function App() {
  return (

    <div className="App">
       <Router>
        <Navbar/>
        <Slide/>
          <Route exact path='/'>
              <RequestTab/>
          </Route>
          <Route path='/services'>
              <Services/>
          </Route>
          <Route path='/payments'>
              <Payment/>
          </Route>
      </Router>
    </div>
    
  );
}

export default App;
