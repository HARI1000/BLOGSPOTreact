import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import SinglePost from "../../components/Singlepost/Singlepost";
import './single.css'
function Single() {
  return (
    <div className='single'>
        <SinglePost />
        <Sidebar/>
    </div>
  )
}

export default Single