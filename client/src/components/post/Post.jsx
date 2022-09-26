import React from 'react';
import './post.css';
import {Link} from "react-router-dom";
function post({post}) {
  const PF ="http://localhost:5000/images/";
  
  return (
    <div className='post'>
    {
      post.photo &&(
    <img className="postimage" src={PF + post.photo} alt="not working"/>
    )}
    <div className="postInfo">
        <div className="postCats">
            {post.category.map((c)=>(
              <span className="postCat">{c}</span>
            ))}
        </div>
        <Link to={`/singlepost/${post._id}`} className="link">
        <span className='postTitle'>
        {post.title}
        </span>
        </Link>
        <span className='postDate'>
        {new Date(post.createdAt).toDateString()}
        </span>
    </div>
    <p className='postDesc'>
    {post.desc}
    </p>
    <hr/>
    </div>
  )
}

export default post