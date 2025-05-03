import React, { useContext } from 'react';
import { UserContext } from '../Utility/AuthContext/ContextProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading';


const PrivateRoute = ({children}) => {
    const location = useLocation();
    const {CurrentUser, loading} = useContext(UserContext)
    if( loading){
        return <Loading></Loading>
    }
  
    if(CurrentUser&& CurrentUser?.email){
        return children;
    }
  
     return  <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
    
        
};

export default PrivateRoute;