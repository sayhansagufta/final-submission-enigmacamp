import { axiosInstance } from "../services/axios";

export const registerUser = async (userData) => {
  try {
    const { name, username, password } = userData;
    const response = await axiosInstance.post("/users", {
      name,
      username,
      password: password,
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
    // Panggil endpoint untuk mendapatkan user berdasarkan username
    const response = await axiosInstance.get("/users", {
      params: { username: loginData.username },
    });

    // Periksa apakah ada data user yang ditemukan
    if (response.data && response.data.length > 0) {
      const user = response.data[0]; // Ambil user pertama dari hasil query

      // Validasi password
      const isValidPassword = await (loginData.password, user.password); // Asumsikan properti password ada
      if (isValidPassword) {
        return user; // Kembalikan user jika login berhasil
      } else {
        throw new Error("Password salah!"); // Error jika password salah
      }
    } else {
      throw new Error("Username tidak ditemukan!"); // Error jika username tidak ditemukan
    }
  } catch (err) {
    // Log error untuk debugging
    console.error("Error during login:", err);

    // Lempar error kembali ke pemanggil fungsi
    throw new Error(err.response?.data?.message || "Terjadi kesalahan saat login.");
  }
};
