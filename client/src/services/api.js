import axios from "axios";

const API = axios.create({
  baseURL: "https://study-assistant-ai-production.up.railway.app",
});

export const generateContent = async (data) => {
  const response = await API.post("/generate", data);
  return response.data;
};
