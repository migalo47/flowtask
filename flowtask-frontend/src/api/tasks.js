// src/api/tasks.js
import api from "./axiosConfig";

export const getTasks = async () => {
  const res = await api.get("/tasks");
  return res.data;
};

export const createTask = async (task) => {
  const res = await api.post("/tasks", task);
  return res.data;
};

export const updateTask = async (id, task) => {
  const res = await api.put(`/tasks/${id}`, task);
  return res.data;
};

export const deleteTask = async (id) => {
  await api.delete(`/tasks/${id}`);
};