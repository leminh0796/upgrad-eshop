import apiClient from "common/utils/apiClient";

export const signUp = async (userData) => {
  try {
    const response = await apiClient.post("/auth/signup", userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
}

