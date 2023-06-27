import apiClient from "common/utils/apiClient";

export const listUser = async (access_token) => {
  try {
    apiClient.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
    const response = await apiClient.get("/users/");
    return response;
  } catch (error) {
    return { status: error.response.status };
  }
};
