import React, { useState, createContext } from "react";

const AuthCtx = createContext();

const useAuthentication = (history, location) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const login = (email, password) => {};

  const logOut = () => {
    setUser(null);
    setError(null);
  };

  return {
    AuthCtx,
    AuthProvider: ({ children }) => (
      <AuthCtx.Provider value={{ error, user, login, logOut }}>
        {children}
      </AuthCtx.Provider>
    )
  };
};

export default useAuthentication;
