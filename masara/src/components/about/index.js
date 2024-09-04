// src/pages/About/index.js
import React from 'react';
import { Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div>
      {/* <h1>About Us</h1> */}
      <Outlet /> {/* This will render nested routes */}
    </div>
  );
};

export default About;
