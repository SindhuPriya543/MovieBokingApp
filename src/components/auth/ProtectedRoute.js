import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

    if (!isAuthenticated) {
        // If not authenticated, redirect to login page
        return <Navigate to="/login" />;
    }

    // If authenticated, allow access to the page
    return children;
};

export default ProtectedRoute;