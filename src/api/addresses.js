import apiClient from "common/utils/apiClient";

export const getAddresses = async () => {
  try {
    const response = await apiClient.get("/addresses");
    return response.data;
  } catch (error) {
    const message = error.response.data.message;
    if (message) throw new Error(message);
    else throw new Error(error.response.data.error);
  }
};

export const addAddress = async (addressData) => {
  try {
    const response = await apiClient.post("/addresses", addressData);
    return response.data;
  } catch (error) {
    const message = error.response.data.message;
    if (message) throw new Error(message);
    else throw new Error(error.response.data.error);
  }
};
