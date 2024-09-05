// src/App.js
import React from 'react';
import {  Routes, Route } from "react-router-dom";
import NavScroll from './components/mainPage/navbar'; // Correct path to NavScroll
import Home from './pages/Home'; // Path to Home component
import About from './components/about/Layout'; // Path to About component
import Center from './components/about/center'; // Path to Center component
import Vision from './components/about/vision'; // Path to Vision component
import FooterComponent from './components/mainPage/footer';
import OurTeam from './components/about/ourTeam';
import Classes from './components/classes/Layout';
import Courses from './components/classes/courses';
import Schedule from './components/classes/schedule';
import RegTab from './components/regTab/Layout';
import Form from './components/regTab/form';
import Registration from './components/regTab/regestration';
import './App.css'; // Import your custom CSS for layout


function App() {
  return (
      <div className="d-flex flex-column min-vh-100">
        <NavScroll />
        <div className="flex-grow-1">
         
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />}>
              <Route path="center" element={<Center />} />
              <Route path="vision" element={<Vision />} />
              <Route path="ourTeam" element={<OurTeam />} />
            </Route>
            <Route path="classes" element={<Classes />}>
              <Route path="courses" element={<Courses />} />
              <Route path="schedule" element={<Schedule />} />
            </Route>
            <Route path="regTab" element={<RegTab />}>
              <Route path="form" element={<Form />} />
              <Route path="regestration" element={<Registration />} />
            </Route>
          </Routes>
         
        </div>
        <FooterComponent />
      </div>
  );
}

export default App;
