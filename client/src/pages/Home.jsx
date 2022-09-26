import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import Header from '../components/header/Header';
import Posts from '../components/posts/Posts';
import Sidebar from '../components/sidebar/Sidebar';
import {useState } from 'react';
import "./home.css";
import axios from "axios"
function Home() {
  const [posts,setPosts]=useState([]);
  const {search}= useLocation();
  useEffect(()=>{
    const fetchPosts=async ()=> {
      const res= await axios.get('http://localhost:5000/api/'+search);
     
      setPosts(res.data);
      }
    fetchPosts();
  },[search])
  return (
    <div>
    <Header/>
    <div className="homecontent">
    <Posts posts={posts}/>
    <Sidebar/>
    </div>
    </div>
  )
};

export default Home;