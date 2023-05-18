import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login';
import Profile from './Profile';
import Home from './Home'
import Navbar from './Navbar'
function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
