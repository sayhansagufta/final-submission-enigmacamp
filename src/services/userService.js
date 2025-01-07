// userService.js
import bcrypt from "bcryptjs";
import { axiosInstance } from "../services/axios";

// Fungsi untuk Register
export const registerUser = async (userData) => {
  try {
    // Kirim data ke endpoint JSON SERVER
    const { name, username, password } = userData;
    // Enkripsi password sebelum mengirim ke server
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
    console.error("Error during user registration:", error);
    throw error;
  }
};

// Fungsi untuk login
export const loginUser = async (loginData) => {
  try {
    const response = await axiosInstance.get("/users", {
      params: {
        username: loginData.username,
      },
    });

    if (response.data.length > 0) {
      const user = response.data[0];
      const isValidPassword = await bcrypt.compare(loginData.password, user.password);
      if (isValidPassword) {
        // Jika Username dan Password Cocok
        alert("Login Berhasil!");
        // Direct ke home
      } else {
        alert("Username atau Password Salah!");
      }
    } else {
      // Jika Tidak Cocok
      alert("Username atau Password Salah!");
    }
    return response.data;
  } catch (error) {
    console.error("Terjadi Kesalahan saat login: ", error);
    throw error;
    // alert("Terjadi Kesalahan Coba Lagi Nanti!");
  }
};
