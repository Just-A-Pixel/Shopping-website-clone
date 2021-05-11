import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import {AnimatePresence} from 'framer-motion';


function App() {

  const location = useLocation()

  return (

  
      <div className="App">
        <Header />
    <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Router path="/checkout">
            <Checkout />
          </Router>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </AnimatePresence>

      </div>
    
  );
}

export default App;
