import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'
export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className='flex items-center bg-white fixed w-full h-16  font-myFont justify-evenly font-medium z-50'>
          <ul className='flex space-x-5'>
            <Link to="/"><li className="navbtn">Top-headlines</li></Link>
            <Link to="/business"><li className="navbtn">Business</li></Link>
            <Link to="/entertainment"><li className="navbtn">Entertainment</li></Link>
            <Link to="/health"><li className='navbtn'>Health</li></Link>
          </ul>
          <span className='text-2xl text-navButtons'>myNEWs</span>
          <ul className='flex space-x-5 items-center'>

            <Link to="/science"><li className='navbtn'>Science</li></Link>
            <Link to="/sports"><li className='navbtn'>Sports</li></Link>
            <Link to="/technology"><li className='navbtn'>Technology</li></Link>
          </ul>
          <Outlet />
        </nav>
        <div className='h-16 w-full'></div>
      </>
    )
  }
}
