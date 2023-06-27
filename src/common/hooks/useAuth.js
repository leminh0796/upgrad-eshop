import { useState, useEffect, createContext } from "react";
import { signIn } from "api/auth";
import { listUser } from "api/users";

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
      let user = await signIn({ username, password });
      localStorage.setItem("access_token", user.token);
      const listUserResponse = await listUser(user.token);
      if (listUserResponse.status === 200) {
        user = {
          ...user,
          isAdmin: true,
        };
        localStorage.setItem("isAdmin", true);
      }
      setUser(user);
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
    localStorage.removeItem("isAdmin");
  };

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    const isAdmin = localStorage.getItem("isAdmin");
    if (token) {
      setUser({ token: token, isAdmin: isAdmin });
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
