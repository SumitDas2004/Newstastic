import './App.css';
import Navbar from './Components/Navbar';
import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Appbody from './Components/Appbody';
// import Prevnextbutton from './Components/Prevnextbutton';


export default class App extends Component {

  render() {
    return (
      <BrowserRouter basename='/myNewsApp'>
        <Navbar />
        <Routes>
          <Route exact path='/sports' element={<Appbody category={'sports'} key='Sports' heading='Sports'/>} />
          <Route exact path='/business' element={<Appbody category={'business'}  key='Business' heading='Business'/>} />
          <Route exact path='/technology' element={<Appbody category={'technology'}  key='Technology' heading='Technology'/>} />
          <Route exact path='/health' element={<Appbody category={'health'}  key='Health' heading='Health'/>} />
          <Route exact path='/science' element={<Appbody category={'science'}  key='Science' heading='Science'/>} />
          <Route exact path='/entertainment' element={<Appbody category={'entertainment'}  key='Entertainment' heading='Entertainment'/>} />
          <Route exact path='/' element={<Appbody category={''}  key='Top-Headlines' heading='Top-Headlines'/>} />
        </Routes>
      </BrowserRouter>
    )
  }
}
