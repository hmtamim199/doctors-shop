import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const 

  const authInfo = {
    createUser,
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