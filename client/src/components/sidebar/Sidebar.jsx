import React, { useEffect ,useState} from 'react'
import './siderbar.css';
import {Link} from "react-router-dom";
const axios=require("axios");
function Sidebar() {
  const [cats,setCats]= useState([]);
  useEffect(() =>{
    const getcats= async () =>
    {
      const res= await axios.get("http://localhost:5000/api/cat/get");
      
      setCats(res.data); 
    }
    getcats();
  },[])
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
          <span className='sidebarTitle'>ABOUT ME</span>
          <img className="sidebarimg" src="https://images.pexels.com/photos/340994/pexels-photo-340994.jpeg?cs=srgb&dl=pexels-isabella-mendes-340994.jpg&fm=jpg" alt="not working"/>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
       <div className='sidebarItem'>
        <span className='sidebarTitle'>CATEGORIES</span>
         <ul className='sidebarlist'>
            {cats.map((c) =>{
      
              return(
                <Link to={`/?cat=${c.name}`} className="link"> 
                <li className='sidebarlistitem'>{c.name}</li>
                </Link>
                )
            })}
           
         </ul>
       </div> 
       <div className='sidebarItem'>
        <span className='sidebarTitle'>SOCIALS</span>
        <div className='sidebarSocial'>
        <i className="sidebaricn fa-brands fa-twitter" onClick={()=>{window.open("https://www.twitter.com/","_blank")}}></i>
        <i className="sidebaricn fa-brands fa-facebook" onClick={()=>{window.open("https://www.facebook.com/","_blank")}}></i>
        <i className="sidebaricn fa-brands fa-instagram" onClick={()=>{window.open("https://www.instagram.com/","_blank")}}></i>
        </div>
       </div>
    </div>
  )
}

export default Sidebar;