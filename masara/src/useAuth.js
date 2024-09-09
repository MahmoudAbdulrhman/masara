// src/useAuth.js
import { useState, useEffect } from 'react';
import { auth, db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState('');
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        try {
          const userDocRef = doc(db, 'users', user.uid); // Correctly reference the user document
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            setUserRole(userDoc.data()?.role || '');
          } else {
            setUserRole(''); // Handle case where user document does not exist
          }
        } catch (error) {
          console.error("Error fetching user role:", error);
          setUserRole(''); // Handle error case
        }
      } else {
        setUser(null);
        setUserRole('');
      }
      setLoading(false); // Set loading to false after processing
    });

    return () => unsubscribe();
  }, []);

  return { user, userRole, loading }; // Return loading state as well
};
