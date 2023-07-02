import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react'
const Navbar = () => {
  const [navListStyle, setNavListStyle] = useState('navListHide');
  const [visible, setvisible] = useState(false);
  const [rotate1, setrotate1] = useState({ transform: '' })
  const [rotate2, setrotate2] = useState({ transform: '' })
  const [hide3, sethide3] = useState({ display: '' })
  const toggleNavList = (e) => {
    e.stopPropagation();
    if (!visible) {
      setNavListStyle('');
      setvisible(true);
      setrotate1({
        transform: 'rotate(45deg)',
        marginTop: '10px',
      })
      setrotate2({
        transform: 'rotate(-45deg)',
        marginTop: '-3px'
      });
      sethide3({ display: 'none' })
    }
    else {
      setNavListStyle('navListHide');
      setvisible(false);
      setrotate1({ transform: '' })
      setrotate2({ transform: '' });
      sethide3({ display: '' })
    }
  }
  return (
    <>
      <nav className='navBar flex flex-row items-center bg-white fixed w-full h-16  font-myFont justify-between font-medium z-50'>
        <span className='text-2xl text-navButtons ml-16'>Newstastic</span>
        <div className='absolute right-5 top-3 hover:cursor-pointer h-max w-max p-2 hidden' id='showMenuIcon' onClick={toggleNavList}>
          <div className='h-1 w-6 bg-gray-700 rounded transition-all' style={rotate1}></div>
          <div className='h-1 w-6 bg-gray-700 rounded my-1 transition-all' style={rotate2}></div>
          <div className='h-1 w-6 bg-gray-700 rounded transition-all' style={hide3}></div>
        </div>
        <ul className='hamBurgerList flex items-center mr-12 transition-all' id={navListStyle}><Link to="/"><li className="navbtn">Top-headlines</li></Link>
          <Link to="/business"><li className="navbtn" onClick={toggleNavList}>Business</li></Link>
          <Link to="/entertainment"><li className="navbtn" onClick={toggleNavList}>Entertainment</li></Link>
          <Link to="/health"><li className='navbtn' onClick={toggleNavList}>Health</li></Link>
          <Link to="/science"><li className='navbtn' onClick={toggleNavList}>Science</li></Link>
          <Link to="/sports"><li className='navbtn' onClick={toggleNavList}>Sports</li></Link>
          <Link to="/technology"><li className='navbtn' onClick={toggleNavList}>Technology</li></Link>
        </ul>
        <Outlet />
      </nav>
      <div className='h-16 w-full'></div>
    </>
  )
}
export default Navbar;
