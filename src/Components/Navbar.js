import React, { Component } from 'react'
import { Link, Outlet } from 'react-router-dom'
export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      navListStyle: 'navListHide',
      visible: false,
      rotate1: { transform: '' },
      rotate2: { transform: '' },
      hide3: { display: '' }
    }
  }
  toggleNavList = (e) => {
    e.stopPropagation();
    if (!this.state.visible)
      this.setState({
        navListStyle: '',
        visible: true,
        rotate1: {
          transform: 'rotate(45deg)',
          marginTop: '10px',
        },
        rotate2: {
          transform: 'rotate(-45deg)',
          marginTop: '-3px'
        },
        hide3: { display: 'none' }
      });
    else this.setState({
      navListStyle: 'navListHide',
      visible: false,
      rotate1: { transform: '' },
      rotate2: { transform: '' },
      hide3: { display: '' }
    });
  }
  render() {
    return (
      <>
        <nav className='navBar flex flex-row items-center bg-white fixed w-full h-16  font-myFont justify-between font-medium z-50'>
          <span className='text-2xl text-navButtons ml-16'>Newstastic</span>
          <div className='absolute right-5 top-3 hover:cursor-pointer h-max w-max p-2 hidden' id='showMenuIcon' onClick={this.toggleNavList}>
            <div className='h-1 w-6 bg-gray-700 rounded transition-all' style={this.state.rotate1}></div>
            <div className='h-1 w-6 bg-gray-700 rounded my-1 transition-all' style={this.state.rotate2}></div>
            <div className='h-1 w-6 bg-gray-700 rounded transition-all' style={this.state.hide3}></div>
          </div>
          <ul className='hamBurgerList flex items-center mr-12 transition-all' id={this.state.navListStyle}><Link to="/"><li className="navbtn">Top-headlines</li></Link>
            <Link to="/business"><li className="navbtn" onClick={this.toggleNavList}>Business</li></Link>
            <Link to="/entertainment"><li className="navbtn" onClick={this.toggleNavList}>Entertainment</li></Link>
            <Link to="/health"><li className='navbtn' onClick={this.toggleNavList}>Health</li></Link>
            <Link to="/science"><li className='navbtn' onClick={this.toggleNavList}>Science</li></Link>
            <Link to="/sports"><li className='navbtn' onClick={this.toggleNavList}>Sports</li></Link>
            <Link to="/technology"><li className='navbtn' onClick={this.toggleNavList}>Technology</li></Link>
          </ul>
          <Outlet />
        </nav>
        <div className='h-16 w-full'></div>
      </>
    )
  }
}
