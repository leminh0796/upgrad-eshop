import apiClient from "common/utils/apiClient";

export const createOrder = async (data) => {
  try {
    const response = await apiClient.post("/orders", data);
    return response.data;
  } catch (error) {
    const message = error.response.data.message;
    if (message) throw new Error(message);
    else throw new Error(error.response.data.error);
  }
};
