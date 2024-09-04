// src/hooks/useOutsideClick.js
import { useEffect } from 'react';

/**
 * Custom hook to detect clicks outside of a specified element.
 * @param {function} callback - Function to be called on outside click.
 */
const useOutsideClick = (callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the referenced element
      if (event.target.closest('.navbar-collapse') === null) {
        callback();
      }
    };

    // Attach the event listener to the document
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [callback]);
};

export default useOutsideClick;
