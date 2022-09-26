import React, { useContext,useState } from 'react';
import './write.css';
import axios from "axios";
import {Context} from "../../context/Context";
function Write() { 
  const [title,setTitle]=useState("");
  const [desc,setDesc]=useState("");
  const [file,setFile]=useState("");
  const {user}=useContext(Context);
  const handleSubmit = async (e)=>{
    e.preventDefault();
    const newpost={
      username:user.username,
      title,
      desc,
    };
    if(file){
      const data=new FormData(); 
      const filename=Date.now()+file.name;
      data.append("name",filename);
      data.append("file",file);
      newpost.photo=filename;

    try{
      await axios.post("http://localhost:5000/api/upload",data);
      
    }
    catch(err)
    {
      console.log(err);
    }
  }try{
    const res=await axios.post("http://localhost:5000/api/blogpost",newpost);
    window.location.replace("/singlepost/"+res.data._id);
  }
  catch(err){
console.log(err);
  }
  
      
  }
  return (
    <div className='write'>
      {file && (
        <img className="writeimg" src={URL.createObjectURL(file)} alt="nonne"/>)
      }
        <form className='writeform' onSubmit={handleSubmit}>
            <div className='writeformgroup'>
                <label htmlFor="fileinput"><i class="writeicn fa-solid fa-plus"></i></label>
                <input type="file" id="fileinput" style={{display:"none"}} onChange={(e)=> setFile(e.target.files[0])}/>
                <input className="writeinput" type="text" placeholder='Title' autoFocus={true} onChange={(e)=>setTitle(e.target.value)}/>
            </div>
        <div className='writeformgroup'>
        <textarea placeholder='Tell your story..' type="text" className="writeinput writetext" onChange={(e)=>setDesc(e.target.value)}></textarea>
        </div>
        <button type="submit" className='writesubmit'>Submit</button>
        </form>
    </div>
  )
}

export default Write;