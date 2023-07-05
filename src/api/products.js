import apiClient, { handle401 } from "common/utils/apiClient";

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

export const modifyProduct = async (productId, productData) => {
  try {
    const response = await apiClient.put(`/products/${productId}`, productData);
    return response.data;
  } catch (error) {
    if (error.response.status === 401) handle401();
    const message = error.response.data.message;
    if (message) throw new Error(message);
    else throw new Error(error.response.data.error);
  }
}

export const deleteProduct = async (productId) => {
  try {
    const response = await apiClient.delete(`/products/${productId}`);
    return response.data;
  } catch (error) {
    if (error.response.status === 401) handle401();
    const message = error.response.data.message;
    if (message) throw new Error(message);
    else throw new Error(error.response.data.error);
  }
}
