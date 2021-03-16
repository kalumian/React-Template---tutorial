import React from 'react'
import { Component } from 'react';
import {BrowserRouter, Route} from "react-router-dom"

// IMPORT CONPONENT
import Contact from '../Contact/index'
import Footer from '../Footer/index'
import  About from '../About/index'
import  Navbar from '../Navbar/index'
import  Portfolio from '../portfolio/index'
import  Profile from '../Profile/index'
import  Social from '../Social/index'
import  Work from '../Work/index'
import  Home from '../Home/index'





class Index extends Component {
  
  render(){
  return (
      <div>
        <Home/>
        <Work/>
        <Portfolio/>
        <Profile/>
        <About/>
        <Social/>
        <Footer/>
      </div>
  );
}}

export default Index;
