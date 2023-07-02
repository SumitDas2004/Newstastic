import './App.css';
import Navbar from './Components/Navbar';
import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Appbody from './Components/Appbody';
import LoadingBar from 'react-top-loading-bar';


export default class App extends Component {
    constructor(){
      super();
      this.state={
        progress:0
      }
    }
    setProgress=(num)=>{
      this.setState({progress: num});
    }
  render() {
    return (
      <BrowserRouter basename='/myNewsApp'>
        <Navbar />
        <LoadingBar
        color='red'
        progress={this.state.progress}
        height={3}
      />
        <Routes>
          <Route exact path='/sports' element={<Appbody setProgress={this.setProgress} category={'sports'} key='Sports' heading='Sports'/>} />
          <Route exact path='/business' element={<Appbody setProgress={this.setProgress} category={'business'}  key='Business' heading='Business'/>} />
          <Route exact path='/technology' element={<Appbody setProgress={this.setProgress} category={'technology'}  key='Technology' heading='Technology'/>} />
          <Route exact path='/health' element={<Appbody setProgress={this.setProgress} category={'health'}  key='Health' heading='Health'/>} />
          <Route exact path='/science' element={<Appbody setProgress={this.setProgress} category={'science'}  key='Science' heading='Science'/>} />
          <Route exact path='/entertainment' element={<Appbody setProgress={this.setProgress} category={'entertainment'}  key='Entertainment' heading='Entertainment'/>} />
          <Route exact path='/' element={<Appbody setProgress={this.setProgress} category={''}  key='Top-Headlines' heading='Top-Headlines'/>} />
        </Routes>
      </BrowserRouter>
    )
  }
}
