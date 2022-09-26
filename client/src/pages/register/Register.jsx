import React,{useState} from 'react';
import './register.css';
import {Link} from "react-router-dom";
const axios =require("axios");
function Register() {
  const[username,setUsername]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[error,setError]=useState(false);
  const handleSubmit = async (e) => {
    setError(false);
    e.preventDefault();
    try{
    const res= await axios.post("http://localhost:5000/api/register",{
      username,
      email,
      password
    });
  res.data && window.location.replace("/login");
  }
  catch(err)
  {setError(true);
    console.log(err);
  }
  }
  return (
    <div className='register'>
    <span className='registertitle'>Register</span>
        <form className='registerfrom' onSubmit={handleSubmit}>
            <label>Username</label>
            <input onChange={e=>setUsername(e.target.value) } className="registerinput" type="text" placeholder='enter your name'/>
            <label>Email</label>
            <input onChange={e=>setEmail(e.target.value) } className="registerinput" type='text' placeholder='enter your email..'/>
            <label>Password</label>
            <input onChange={e=>setPassword(e.target.value) } className="registerinput" type='password' placeholder='enter your password..'/>
            <button className='registerbutton' >register</button>
        </form>
            <button className='registerloginbutton'><Link to="/login">Login</Link></button>
          {error && <span>Somethingwentwrong</span>}
    </div>
  )
}

export default Register;