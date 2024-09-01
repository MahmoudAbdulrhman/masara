// src/App.js
import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import NavScroll from './components/mainPage/navbar'; // Correct path to NavScroll
import Home from './pages/Home'; // Path to Home component
import About from './components/about';
import Center from './components/about/center'; // Path to Center component

function App() {
  return (
    <div> {/* Ensure Router is wrapping your Routes */}
      <div>
        <NavScroll />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />}>
            <Route path="center" element={<Center />} /> {/* Nested route */}
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
