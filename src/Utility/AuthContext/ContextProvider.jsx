import React, { createContext, useEffect, useState } from 'react';
import { app } from '../Firebase/Firebase_init';
import { createUserWithEmailAndPassword, getAuth,onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile  } from "firebase/auth";
export const UserContext = createContext();

const ContextProvider = ({children}) => {
    const auth = getAuth(app);
    const [CurrentUser,setCurrentUser]= useState(null)
    const [loading,setLoading]= useState(true)
    const handleRegister=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const handleLogin=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
        

    }
    const UpdateUser = (updateInfo) => {
       return updateProfile(auth.currentUser, updateInfo
          )
    }
    const logOut = ()=>{
        signOut(auth).then(() => {
            alert('You have logged Out');
          }).catch((error) => {
           console.log(error.errorMessage);
          }); 
    }
    
    const userData ={
        CurrentUser,
      setCurrentUser,
      handleRegister,
      handleLogin,
      logOut,
      loading,
      setLoading,
      UpdateUser
    }
    useEffect(()=>{
       const unSubscribe =  onAuthStateChanged (auth, (user) => {
            if (user) {
             
          
                setCurrentUser(user)
                setLoading(false)
             
            } else {
             
                setCurrentUser(null)
            }
          });
          return unSubscribe;
          
    },[])
    return (
        
            <UserContext.Provider value={userData}>
                {children}
            </UserContext.Provider>
       
    );
};

export default ContextProvider;