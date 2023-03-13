import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './components/Register/Registration';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import { auth } from './firebase';

function App() {
  const [userName,setUserName]=useState("")
  useEffect(()=>{auth.onAuthStateChanged((user)=>{
    if(user){
      setUserName(user.displayName)
    }else setUserName("")
  });
},[])
  return (
    
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home name={userName}/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Registration/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
