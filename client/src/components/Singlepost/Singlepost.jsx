import React ,{useContext, useEffect,useState} from 'react'
import './Singlepost.css';
import {useLocation} from "react-router";
import axios from 'axios';
import {Link} from "react-router-dom";
import {Context} from "../../context/Context";

  
  
function Singlepost() {
  const location = useLocation();
  const path =location.pathname.split("/")[2];
  const {user}=useContext(Context);
  const [title,setTitle]=useState('');
  const [desc,setDesc]=useState('');
  const [post,setPost]=useState({});
  const[updatemode,setUpdatemode]=useState(false);

  const PF = "http://localhost:5000/images/";
  useEffect(()=>{
    const getpost= async () => {
      const res = await axios.get("http://localhost:5000/api/getpost/"+path);
      setPost(res.data);
      setTitle(res.data.title);
      setDesc(res.data.desc);
    }
    getpost();
  },[path]);
  const deletepost= async () =>
  {try{
    await axios.delete(`http://localhost:5000/api/deletepost/${post._id}`,{data : {username:user.username,id:post._id}});
    window.location.replace("/");
  }
  catch(err)
  {
    console.log(err);}
  
     
  } 
  const handleUpdate =async ()=>{
    try{
      await axios.put(`http://localhost:5000/api/update/${post._id}`,{username:user.username,title,desc});
      window.location.reload();
    }
    catch(err)
    {
      console.log(err);
    }
      
    
  }
  return (
    <div className='singlepost'>
        <div className='singlepostwrapper'>
        { post.photo &&
            <img className="singlepostimg"  src={PF+post.photo} alt=""/>}
            {updatemode ?<input type="text" onChange={(e)=>setTitle(e.target.value)} placeholder={title} className='singleposttitleinput' />:(
            <h1 className='singleposttitle'>
            {post.title}
              {post.username === user?.username &&(
              <div className='singlepostedit'>
              <i className="singleposticn fa-solid fa-pen-to-square" onClick={()=>setUpdatemode(true)}></i>
              <i className="singleposticn fa-solid fa-trash-can" onClick={deletepost}></i></div>)}
            </h1>
            )}
            
            <div className='singlepostinfo'>
                <span className='singlepostauthor'>Author:<Link to={`/?user=${post.username}` } className="link"><b>{post.username}</b></Link></span>
                <span className='singlepostdate'>Date:<b>{new Date(post.createdAt).toDateString()}</b></span>
            </div>
            {updatemode?<textarea placeholder={desc} onChange={(e) => setDesc(e.target.value)} className='singlepostdescinput'/>:
            (<p className='singlepostdesc'>
                {post.desc}
            </p>)}
            {updatemode && <button className='singlepostbutton' onClick={handleUpdate}>Update</button>}
        </div>
    </div>
  )
}

export default Singlepost