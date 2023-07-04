import apiClient from "common/utils/apiClient";

const access_token = localStorage.getItem("access_token");
apiClient.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;

export const getProducts = async () => {
  try {
    const response = await apiClient.get("/products");
    return response.data;
  } catch (error) {
    const message = error.response.data.message;
    if (message) throw new Error(message);
    else throw new Error(error.response.data.error);
  }
};

export const getProduct = async (productId) => {
  try {
    const response = await apiClient.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    const message = error.response.data.message;
    if (message) throw new Error(message);
    else throw new Error(error.response.data.error);
  }
};

export const getCategories = async () => {
  try {
    const response = await apiClient.get("/products/categories");
    return response.data;
  } catch (error) {
    const message = error.response.data.message;
    if (message) throw new Error(message);
    else throw new Error(error.response.data.error);
  }
};

export const addProduct = async (productData) => {
  try {
    const response = await apiClient.post("/products", productData);
    return response.data;
  } catch (error) {
    const message = error.response.data.message;
    if (message) throw new Error(message);
    else throw new Error(error.response.data.error);
  }
};
