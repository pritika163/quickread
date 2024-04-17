import React, { useEffect } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
//import { useState } from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import { Route, Routes, Navigate } from "react-router-dom";
//import StoryList from './Components/StoryList';
//import { nanoid } from 'nanoid';
//import Search from './Components/Search';
//import Header from './Components/Header';
//import AddStory from './Components/AddStory';
//import { CiCirclePlus } from "react-icons/ci";
const App =() => {
    
    return (
        <div >
            
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/about" element={<About/>} />
                <Route exact path="/contact" element={<Contact/>} />
                <Route exact path="*" element={<Navigate to="/" />} />
            </Routes>
             
               
        </div>
    );
};
export default App;