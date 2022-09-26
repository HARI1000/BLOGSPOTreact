import React ,{useContext} from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {Context} from "./context/Context";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Contact from './pages/contact/Contact';
function App() {
  const {user}= useContext(Context);
  return (

    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/posts" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/register" element={user?<Home/>:<Register/>}/>
          <Route path="/login" element={user?<Home/>:<Login/>}/>
          <Route path="/write" element={user?<Write/>:<Login/>}/>
          <Route path="/settings" element={user?<Settings/>:<Login/>}/>
          <Route path="/singlepost/:postid" element={user?<Single/>:<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
