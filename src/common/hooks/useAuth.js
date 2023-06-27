import { useState, useEffect, createContext } from "react";
import { signIn } from "api/auth";

const AuthCtx = createContext({
  user: null,
  login: async () => {},
  logOut: () => {},
  isLoading: true,
});

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const login = async (username, password) => {
    setIsLoading(true);
    try {
      const user = await signIn({ username, password });
      setUser(user);
      localStorage.setItem("access_token", user.token);
      return user;
    } catch (error) {
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const logOut = () => {
    setUser(null);
    localStorage.removeItem("access_token");
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) {
      setUser({ token: token });
    }
    setIsLoading(false);
  }, []);

  return { user, login, logOut, isLoading };
};

const AuthProvider = ({ children }) => {
  const auth = useAuth();

  return <AuthCtx.Provider value={auth}>{children}</AuthCtx.Provider>;
};

export { AuthCtx, AuthProvider, useAuth };
