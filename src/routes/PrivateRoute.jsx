import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import PageLoader from '../components/PageLoader';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    console.log(user, loading)
    const location = useLocation();

    if (loading) {
        return <PageLoader />
    }
    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace />;
};

export default PrivateRoute;