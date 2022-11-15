import { onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, createUserWithEmailAndPassword, updateProfile,} from 'firebase/auth';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

  const providerLogin =(provider) =>{
    setLoading(true);
    return signInWithPopup(auth, provider); 
  }

  const createUser = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword( auth, email, password) 
  }

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword( auth, email, password); 
  }

  const updateUser = (userInfo)=>{
    return updateProfile(user, userInfo);
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth); 
  }
  
  useEffect( () =>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
         setUser(currentUser);
         setLoading(false);
    })
    return () => unsubscribe();
  },[])

 const authInfo = { 
          user, 
          loading,
          createUser, 
          signIn,
          logOut,
          providerLogin,
          updateUser
 }

  return (
    <div>
      <AuthContext.Provider value={authInfo}>
           {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;