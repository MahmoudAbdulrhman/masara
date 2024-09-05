// src/pages/About/index.js
import React from 'react';
import { Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <Outlet /> {/* This will render nested routes */}
    </div>
  );
};

export default About;
