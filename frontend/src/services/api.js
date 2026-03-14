import axios from "axios";

const API = axios.create({
  baseURL: "https://diet-tracker-deploy-backend.vercel.app/api"
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers["x-auth-token"] = token;
  }

  return req;
});

export const login = (formData) => API.post("/auth/login", formData);
export const register = (formData) => API.post("/auth/register", formData);

export const fetchMeals = () => API.get("/meals");
export const addMeal = (mealData) => API.post("/meals", mealData);
export const deleteMeal = (id) => API.delete(`/meals/${id}`);
export const updateMeal = (id, mealData) => API.put(`/meals/${id}`, mealData);