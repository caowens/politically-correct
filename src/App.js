import './App.css';
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import BiasNavBar from './components/BiasNavBar';
import Center from './pages/Center';
import Left from './pages/Left';
import Right from './pages/Right';
import Home from './pages/Home';
import Axios from "axios";
import "./App.css";
import myData from './data/news.json';

function App() {
  return (
    <div className="App">
      
      {/* NavBars for every page */}
      <NavBar />
      <BiasNavBar />
      {/* <h1>Hello</h1>
      {myData.articles.map((item)=><p>{item.title}</p>)} */}

    
      {/* Links to each media bias page */}
      <div className='routes-wrapper'>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="left" element={<Left/>} />
          <Route path="center" element={<Center/>} />
          <Route path="right" element={<Right/>} />
        </Routes>
      </div>
      
    </div>
  );
}

export default App;
