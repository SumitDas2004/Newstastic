import './App.css';
import Navbar from './Components/Navbar';
import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Appbody from './Components/Appbody';
import LoadingBar from 'react-top-loading-bar';


const App = () => {
  const [progress, setprogress] = useState(0);
  const setProgress = (num) => {
    setprogress(num);
  }

  return (
    <BrowserRouter basename='/newstastic'>
      <Navbar />
      <LoadingBar
        color='red'
        progress={progress}
        height={3}
      />
      <Routes>
        <Route exact path='/sports' element={<Appbody setProgress={setProgress} category={'sports'} key='Sports' heading='Sports' apiKey={process.env.REACT_APP_API_KEY} />} />
        <Route exact path='/business' element={<Appbody setProgress={setProgress} category={'business'} key='Business' heading='Business' apiKey={process.env.REACT_APP_API_KEY} />} />
        <Route exact path='/technology' element={<Appbody setProgress={setProgress} category={'technology'} key='Technology' heading='Technology' apiKey={process.env.REACT_APP_API_KEY} />} />
        <Route exact path='/health' element={<Appbody setProgress={setProgress} category={'health'} key='Health' heading='Health' apiKey={process.env.REACT_APP_API_KEY} />} />
        <Route exact path='/science' element={<Appbody setProgress={setProgress} category={'science'} key='Science' heading='Science' apiKey={process.env.REACT_APP_API_KEY} />} />
        <Route exact path='/entertainment' element={<Appbody setProgress={setProgress} category={'entertainment'} key='Entertainment' heading='Entertainment' apiKey={process.env.REACT_APP_API_KEY} />} />
        <Route exact path='/' element={<Appbody setProgress={setProgress} category={''} key='Top-Headlines' heading='Top-Headlines' apiKey={process.env.REACT_APP_API_KEY} />} />
      </Routes>
      <footer className=' bg-slate-700 text-white flex justify-center items-center h-14 font-myFont'><strong>Newstastic</strong>: A react project developed by <strong>&nbsp;Sumit Das</strong></footer>
    </BrowserRouter>
  )
}

export default App;