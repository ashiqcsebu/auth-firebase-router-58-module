import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext);

    if(loading){
        return <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">   </svg>
    }

    if(user && user.uid){
        return children;
    }
    return <Navigate to='/login'></Navigate>;
};

export default PrivateRoute;