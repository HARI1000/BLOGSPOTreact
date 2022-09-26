import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import './navbar.css';
import {Context} from "../../context/Context";
function Navbar() {
  const PF = "http://localhost:5000/images/";
  const {user,dispatch}= useContext(Context);
  
  const handleLogout = ()=>{
    console.log("called");
    dispatch({type:"LOGOUT"});
  };
  
  return (
    
    <div className='top'>
        <div className='topLeft'>
        <i className="icn fa-brands fa-twitter" onClick={()=>{window.open("https://www.twitter.com/","_blank")}}></i>
        <i className="icn fa-brands fa-facebook" onClick={()=>{window.open("https://www.facebook.com/","_blank")}}></i>
        <i className="icn fa-brands fa-instagram" onClick={()=>{window.open("https://www.instagram.com/","_blank")}}></i>
        
        </div>
        <div className='topCenter'>
            <ul className='topList'>
                <li className="liele"><Link className="liel" to="/" >HOME</Link></li>
                <li className="liele"><Link className="liel" to="/" >ABOUT</Link></li>
                <li className="liele"><Link className="liel" to="/contact" >CONTACT</Link></li>
                <li className="liele"><Link className="liel" to="/write" >WRITE</Link></li>
                <li className="liel" onClick={handleLogout}>{user && "LOGOUT"}</li>
            </ul>
            
        </div>
        <div className='topRight'>
        
        {user ?(<Link to="/settings"><img className="profileimg" src={PF+user.profile} alt="?"/></Link>)
        :(<><Link className='linkspc' to="/login" style={{textDecoration:"none",color:"grey"}}>LOGIN</Link>
        <Link className='linkspc' to="/register" style={{textDecoration:"none",color:"grey"}}>REGSISTER</Link>
        </>)
        }
        
        </div>
    </div> 
    
  )
}

export default Navbar;