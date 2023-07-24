import axios from "axios";

export const loginService = async (username, password) =>
  await axios.post("/api/auth/login", {
    username,
    password,
  });

export const signupService = async (
  username,
  password,
  firstName,
  lastName,
  avatar
) =>
  await axios.post("/api/auth/signup", {
    username,
    password,
    firstName,
    lastName,
    avatar,
  });
