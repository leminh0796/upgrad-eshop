import { useState, useEffect, createContext } from "react";
import { signIn } from "api/auth";
import CryptoJS from "crypto-js";

const AuthCtx = createContext({
  user: null,
  login: async () => {},
  logOut: () => {},
  isLoading: true,
});

// Please modify the backend server AuthController sign in route
// to return the user object which has id, roles, token instead of the token only.
const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const login = async (username, password) => {
    setIsLoading(true);
    try {
      let user = await signIn({ username, password });
      user = { ...user, isAdmin: user.roles.includes("ADMIN") };
      const simpleEncrypt = CryptoJS.AES.encrypt(
        JSON.stringify(user),
        "somesecretkey"
      );
      localStorage.setItem("data", simpleEncrypt);
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
    localStorage.removeItem("data");
  };

  useEffect(() => {
    const data = localStorage.getItem("data");
    const secret = "somesecretkey";
    let user = null;
    if (data) {
      user = JSON.parse(
        CryptoJS.AES.decrypt(data, secret).toString(CryptoJS.enc.Utf8)
      );
    }
    if (user) {
      setUser(user);
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
