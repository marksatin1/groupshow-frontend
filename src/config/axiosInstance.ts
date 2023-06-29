import axios from "axios";

const accessJwt = localStorage.getItem("accessJwt");
const baseURL = "http://localhost:8000";

export const axInst = axios.create({
  baseURL,
});

export const axInstAccess = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${accessJwt}`,
  },
});
