import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const updateUser = (authInfo) => {
    return updateProfile(user, authInfo)
  }

  const logout = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {

      setUser(currentUser)
      setLoading(false)
    })
    return () => unsubscribe();
  }, [])

  const authInfo = {
    createUser,
    login,
    updateUser,
    logout,
    user,
    loading
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