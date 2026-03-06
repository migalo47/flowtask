import api from "./axiosConfig";

export const getUsers = async () => {
  const res = await api.get("/users");
  return res.data;
};

export const createUser = async (task) => {
  const res = await api.post("/users", task);
  return res.data;
};

export const updateUser = async (id, user) => {
  const res = await api.put(`/users/${id}`, user);
  return res.data;
};

export const deleteUser = async (id) => {
  await api.delete(`/users/${id}`);
};