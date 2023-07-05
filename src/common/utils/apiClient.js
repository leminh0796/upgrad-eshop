import axios from "axios";
import CryptoJS from "crypto-js";

export const getUserFromStorage = () => {
  const data = localStorage.getItem("data");
  const secret = "somesecretkey";
  let user = null;
  if (data) {
    user = JSON.parse(
      CryptoJS.AES.decrypt(data, secret).toString(CryptoJS.enc.Utf8)
    );
  }
  return user;
};

const getAuthHeader = () => {
  const user = getUserFromStorage();
  let authHeader = "";
  if (user) {
    authHeader = `Bearer ${user.token}`;
  } else {
    if (window.location.pathname !== "/login")
    window.location.href = "/login";
  }
  return authHeader;
};

const apiClient = axios.create({
  // INFO: This is the base URL for the API
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: getAuthHeader(),
  },
});

export const handle401 = () => {
  localStorage.removeItem("data");
  window.location.href = "/login";
};

export default apiClient;
