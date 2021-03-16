import React from 'react'
import { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom"
import "./index.css";

// IMPORT CONPONENT
import Index from './components/index/index'
import  Navbar from './components/Navbar/index'
import Contact from './components/Contact';


class App extends Component {
  
  render(){
  return (
      <BrowserRouter>
        <Navbar/>
          <Route path="/" exact component={Index}/>
          <Route path="/contact" exact component={Contact}/>
      </BrowserRouter>
  );
}}

export default App;
