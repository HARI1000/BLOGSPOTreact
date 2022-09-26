import React from 'react';
import "./header.css";

function Header() {
  return (
    <div className='header'>
      <div className='headerTitles'>
        <span className='headertitlesm'> React & node</span>
        <span className='headertitlelg'>Blog</span>

      </div>
      <img  className='headerimg' src='https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?cs=srgb&dl=pexels-simon-berger-1323550.jpg&fm=jpg' alt="noload"/>
    </div>
  )
}
export default Header;