import React, { useContext, useReducer,useState } from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css';
import {Context} from "../../context/Context";
const axios=require('axios');
function Settings() {
const [file, setFile] = useState(null);
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [success,setSuccess] =useState(false);
const { user, dispatch } = useContext(Context);
const PF = "http://localhost:5000/images/"
const handleSubmit = async (e) => {
  

  e.preventDefault();
  dispatch({type:"UPDATE_START"})
  const updatedUser = {
    userId: user._id,
    username,
    email,
    password,
  };
  if (file) {
    const data = new FormData();
    const filename = Date.now() + file.name;
    data.append("name", filename);
    data.append("file", file);
    updatedUser.profile = filename;
    try {
      await axios.post("http://localhost:5000/api/upload", data);
      
    } catch (err) {console.log(err);}
  }
  
 try{
  
  const res=await axios.put("http://localhost:5000/api/"+user._id,{data:updatedUser});
  setSuccess(true);
  dispatch({type:"UPDATE_SUCCESS",payload:res.data});
  console.log(res.data);
  }

 catch(err)
 {dispatch({type:"UPDATE_FAILURE"});
  console.log(err);}
};
  return (
    <div className='settings'>
        <div className='settingswrapper'>
        <div className='settingstitle'>
            <span className='settingsupdatetitle'>Update your Account</span>
            <span className='settingsdeletetitle'>Delete your account</span>
        </div>
        <from className='settingsform' >
            <label>Profile picture</label>
            <div className='settingspp'>
                <img  src={file ? URL.createObjectURL(file):PF+user.profile} className="settingsimg"   alt=""/>
            <label htmlFor="fileinput">
            <i class="settingppicn fa-solid fa-user"></i>
            </label>
            <input type="file" id="fileinput" style={{display:"none"}}  onChange={(e) => setFile(e.target.files[0])}/>
            </div> 
            <label>Username</label>
            <input type="text" placeholder={user.username} onChange={(e)=>setUsername(e.target.value)}/>
            <label>Email</label>
            <input type="email" placeholder={user.email} onChange={(e)=>setEmail(e.target.value)}/>
            <label>Password </label>
            <input type="password" onChange={(e)=>setPassword(e.target.value)}/>
            <button type="submit" className="settingsupdate" onClick={handleSubmit}>Submit</button>
            {success && <span style={{color:"green",textAlign:"center"}}>Profile has been updated..</span>}
        </from>
        </div>
        <Sidebar/>
    </div>
  )
}

export default Settings