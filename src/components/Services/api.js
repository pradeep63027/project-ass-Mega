import axios from 'axios'

const API_URL = 'http://localhost:3000/register' // Your backend URL

// Signup User
export const signup = async userData => {
  return axios.post(`${API_URL}/users/signup`, userData)
}

// Login User
export const login = async userData => {
  return axios.post(`${API_URL}/users/login`, userData)
}

// Get All Tasks
export const getTasks = async token => {
  return axios.get(`${API_URL}/tasks`, {
    headers: {Authorization: `Bearer ${token}`},
  })
}

// Add New Task
export const addTask = async (taskData, token) => {
  return axios.post(`${API_URL}/tasks`, taskData, {
    headers: {Authorization: `Bearer ${token}`},
  })
}

// Update Task
export const updateTask = async (taskId, taskData, token) => {
  return axios.put(`${API_URL}/tasks/${taskId}, taskData`, {
    headers: {Authorization: `Bearer ${token}`},
  })
}

// Delete Task
export const deleteTask = async (taskId, token) => {
  return axios.delete(`${API_URL}/tasks/${taskId}`, {
    headers: {Authorization: `Bearer ${token}`},
  })
}
