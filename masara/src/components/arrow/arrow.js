// src/components/BackToTopButton.js
import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; // You need to install react-icons for this

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        display: isVisible ? 'flex' : 'none',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        zIndex: '1000',
      }}
    >
      <FaArrowUp size={24} />
    </button>
  );
};

export default BackToTopButton;
