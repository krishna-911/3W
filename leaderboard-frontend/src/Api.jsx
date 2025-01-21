import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:3000/api" });

export const fetchUsers = () => API.get("/users");
export const claimPoints = (userId) => API.post("/claim", { userId });
export const seedUsers = () => API.post("/seed");
