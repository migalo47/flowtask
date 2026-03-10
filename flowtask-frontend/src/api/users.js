import api from "./axiosConfig";

export const registerUser = async (user) => {
  const res = await api.post("/users", user);
  return res.data;
};

export const getUserByEmail = async (email) => {
  const res = await api.get(`/users/correo/${email}`);
  return res.data;
};