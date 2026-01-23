import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

// SERVICES
export const getServices = () => API.get("/services");
export const addService = (data) => API.post("/services", data);
export const deleteService = (id) => API.delete(`/services/${id}`);

// WORKERS
export const getWorkers = () => API.get("/workers");
export const addWorker = (data) => API.post("/workers", data);
export const deleteWorker = (id) => API.delete(`/workers/${id}`);

// RESERVATIONS
export const addReservation = (data) => API.post("/reservations", data);
export const getReservations = () => API.get("/reservations");
export const updateReservation = (id, status) =>
  API.put(`/reservations/${id}`, { status });

// ---------- NEW: Admin login ----------
export const adminLogin = (data) => API.post("/admin/login", data);
