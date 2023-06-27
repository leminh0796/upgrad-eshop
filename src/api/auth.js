import apiClient from "common/utils/apiClient";

export const signUp = async (userData) => {
  try {
    const response = await apiClient.post("/auth/signup", userData);
    return response.data;
  } catch (error) {
    const message = error.response.data.message;
    if (message) throw new Error(message);
    else throw new Error(error.response.data.error);
  }
};

export const signIn = async (credentials) => {
  try {
    const response = await apiClient.post("/auth/signin", credentials);
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      throw new Error("Wrong email or password");
    } else {
      throw new Error("Something went wrong, please try again later");
    }
  }
};
