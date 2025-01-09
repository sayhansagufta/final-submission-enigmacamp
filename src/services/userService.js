import bcrypt from "bcryptjs";
import { axiosInstance } from "../services/axios";

export const registerUser = async (userData) => {
  try {
    const { name, username, password } = userData;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const response = await axiosInstance.post("/users", {
      name,
      username,
      password: hashedPassword,
      type: "USER",
      created_at: new Date().toISOString(),
    });
    return response.data;
  } catch (error) {
    throw new error();
  }
};

export const loginUser = async (loginData) => {
  try {
    const response = await axiosInstance.get("/users", {
      params: { username: loginData.username },
    });
    if (response.data.length > 0) {
      const user = response.data[0];
      const isValidPassword = await bcrypt.compare(loginData.password, user.password);
      if (isValidPassword) {
        return user;
      } else {
        throw new Error("Password Salah!");
      }
    } else {
      throw new Error("Username tidak ditemukan!");
    }
  } catch (error) {
    throw new error();
  }
};
