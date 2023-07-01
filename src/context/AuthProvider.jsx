import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

  function getAuth(){return JSON.parse(localStorage.getItem("auth"));}
  function setAuth(data){
    localStorage.setItem('auth', JSON.stringify(data));
  }
  return (
    <AuthContext.Provider value={{ getAuth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
