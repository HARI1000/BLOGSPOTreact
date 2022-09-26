import React,{useRef,useContext} from 'react';
import {Context} from "../../context/Context";
import './login.css';
import {Link} from "react-router-dom";
const axios =require('axios');
function Login() {
  const userRef=useRef();
  const passwordRef =useRef();
  const {dispatch,isFetching}=useContext(Context);
  const handleSubmit = async (e) =>
  {
    e.preventDefault();
    dispatch({type:"LOGIN_START"});
    try{
      const res=await axios.post("http://localhost:5000/api/login",{
      username:userRef.current.value,
      password:passwordRef.current.value,
      });
      dispatch({type:"LOGIN_SUCCESS",payload:res.data});
    }
    catch(err){
      dispatch({type:"LOGIN_FAILURE"});
    }
  }
  
  return (
    <div className='login'>
    <span className='logintitle'>Login</span>
        <form className='loginfrom'>
            <label>Username</label>
            <input className="logininput" type='text' placeholder='enter your username..' ref={userRef}/>
            <label>Password</label>
            <input className="logininput" type='password' placeholder='enter your password..' ref={passwordRef}/>
            <button className='loginbutton' type="Submit" onClick={handleSubmit} disabled={isFetching}>Login</button>
        </form>
            <button className='loginregisterbutton'><Link to="/register">Register</Link></button>
    </div>
  )
}

export default Login;