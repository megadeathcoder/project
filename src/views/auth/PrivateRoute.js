// PrivateRoute.js
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ children }) => {
  const { authToken } = useAuth();
  const location = useLocation();

  if (!authToken) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/auth/loginformik" state={{ from: location }} replace />;
  };

  return children;
};

// Add PropTypes validation
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired
};

export default PrivateRoute;
