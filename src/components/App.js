
import React from "react";
import {Route,Router,Switch}from 'react-router-dom'
import About from './About';
import Home from './Home';
import Navigation from './Navigation';
import './../styles/App.css';

const App = () => {
  return (
   <Router>
    <Navigation />
    <Switch>
      <Route path ="/" element ={<Home />} />
      <Route path ="/about" element ={<About />} />
    </Switch>
    </Router>
  )
}

export default App
