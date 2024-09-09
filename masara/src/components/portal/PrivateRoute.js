// // // src/components/portal/PrivateRoute.js
// // import React from 'react';
// // import { Route, Navigate } from 'react-router-dom';
// // import { useAuth } from '../../useAuth'; // Import your useAuth hook

// // const PrivateRoute = ({ component: Component, allowedRoles, ...rest }) => {
// //   const { user, role } = useAuth();

// //   return (
// //     <Route
// //       {...rest}
// //       render={(props) =>
// //         user && allowedRoles.includes(role) ? (
// //           <Component {...props} />
// //         ) : (
// //           <Navigate to="/login" />
// //         )
// //       }
// //     />
// //   );
// // };

// // export default PrivateRoute;

// // components/portal/PrivateRoute.js
// import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../../useAuth'; // Custom hook for authentication

// const PrivateRoute = ({ element, allowedRoles }) => {
//   const { user, role } = useAuth(); // Get user and role from your custom hook or context

//   if (!user) {
//     // Not authenticated
//     return <Navigate to="/login" />;
//   }

//   if (!allowedRoles.includes(role)) {
//     // Not authorized
//     return <Navigate to="/" />;
//   }

//   return element;
// };

// export default PrivateRoute;

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../useAuth'; // Adjust import path if needed

const PrivateRoute = ({ element, allowedRoles }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>; // Optional: show loading state

  if (user && allowedRoles.includes(user.email)) {
    return element;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
