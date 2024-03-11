import React from 'react';
import './App.scss';
import Home from './pages/Home';
import Users from './pages/Users';
import User from './pages/User';
import Movies from './pages/Movies';
import About from './pages/About';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';


function App() {
  
  return(
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/about/:id" element={<About />} />
      </Routes>
    </div>
  )
 
}

export default App;