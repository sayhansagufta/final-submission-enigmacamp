// import React from "react";
// import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../lib/axios";
import { useNavigate } from "react-router-dom";
// import { toast } from "sonner";
// import { axiosInstance } from "../../lib/axios";
// import { useEffect } from "react";
// import { toast } from "sonner";

// Validate signUp
const signUpFormSchema = z
  .object({
    // Validasi Input Nama Lengkap
    name: z.string().min(3, "Nama Lengkap Harus Memiliki Setidaknya 3 Karakter!").max(50, "Nama Lengkap Tidak Boleh Lebih dari 50 Karakter!"),
    // Validasi Username
    username: z
      .string()
      .min(3, "Username Harus Memiliki Setidaknya 3 Karakter")
      .regex(/^[a-zA-Z0-9_]+$/, "Username Hanya Boleh Berisi Huruf, Angka, dan UnderScore"),
    // Validasi Password
    password: z.string().min(6, "Password harus memiliki setidaknya 6 Karakter").max(20, "Password Tidak Boleh Lebih dari 20 Karakter"),
    // Validasi Konfirmasi Password
    confirmPassword: z.string(),
  })
  // Untuk mengecek kesamaan password
  .refine((data) => data.password === data.confirmPassword, {
    // Target field untuk pesan error
    path: ["confirmPassword"],
    message: "Password dan Konfirmasi Password Harus Sama!",
  });

const SignUp = () => {
  // Using Hook UseNavigate from react-router-dom
  const navigate = useNavigate();
  // Styles
  const styles = {
    backgroundColor: "#EFF3FA",
    height: "100vh",
  };
  // Setup React Hook Form dengan Resolver Zod
  const form = useForm({
    defaultValues: {
      name: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(signUpFormSchema),
  });

  // Fungsi untuk create user (signup)
  const addRegisterUser = async (data) => {
    try {
      // Kirim data ke endpoint JSON SERVER
      const { name, username, password } = data;
      const response = await axiosInstance.post("/users", {
        name,
        username,
        password,
      });
      alert("You Have an Register Account! Please Login!");
      console.log("User registered successfully:", response.data);
      // Navigasi ke halaman login setelah registrasi berhasil
      navigate("/login");
      // toast.success("You Have an Register Account! Please Login!");
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registrasi gagal. Silakan coba lagi.");
    }
  };

  //   Fungsi untuk Test Submit Data
  // const registerUser = (data) => {
  // console.log(data);
  // };

  return (
    // Container
    <div className="py-20" style={styles}>
      {/* Background Image */}
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div className="hidden lg:block lg:w-1/2 bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')" }}></div>
        {/* Form Section */}
        <form onSubmit={form.handleSubmit(addRegisterUser)} className="w-full p-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-slate-950 text-left">Daftar Dulu ya!</h2>
          <p className="text-small py-3 font-normal text-slate-700 ">Buat akunmu sekarang untuk pengalaman terbaik! Isi data dengan lengkap dan nikmati fitur menarik yang kami tawarkan.</p>
          {/* Nama Lengkap Section */}
          <div className="mt-4">
            {/* Input Nama Lengkap */}
            <label className="block text-gray-700 text-sm font-bold mb-2">Nama Lengkap</label>
            {/* Validasi Input Nama Lengkap */}
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => {
                return <Input {...field} type="text" placeholder="Masukkan Nama Lengkap Anda..." isInvalid={Boolean(fieldState.error)} errorMessage={fieldState.error?.message} />;
              }}
            />
          </div>

          {/* Username Section */}
          <div className="mt-4">
            {/* Input Username */}
            <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
            {/* Validasi Input Username */}
            <Controller
              name="username"
              control={form.control}
              render={({ field, fieldState }) => {
                return <Input {...field} type="text" placeholder="Masukkan Username..." isInvalid={Boolean(fieldState.error)} errorMessage={fieldState.error?.message} />;
              }}
            />
          </div>

          {/* Password Section */}
          <div className="mt-4">
            {/* Input Password */}
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            {/* Validate Input Password */}
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => {
                return <Input {...field} placeholder="Masukkan Password..." type="password" isInvalid={Boolean(fieldState.error)} errorMessage={fieldState.error?.message} />;
              }}
            />
          </div>

          {/* Konfirmasi Password Section */}
          <div className="mt-4">
            {/* Konfirmasi Password */}
            <label className="block text-gray-700 text-sm font-bold mb-2">Konfirmasi Password</label>
            {/* Validate Konfirmasi Password */}
            <Controller
              name="confirmPassword"
              control={form.control}
              render={({ field, fieldState }) => {
                return <Input {...field} type="password" placeholder="Masukkan Konfirmasi Password..." isInvalid={Boolean(fieldState.error)} errorMessage={fieldState.error?.message} />;
              }}
            />
          </div>

          {/* Button Daftar */}
          <div className="mt-8">
            <Button type="submit" className="bg-buttonColor text-white font-bold py-2 px-4 w-full rounded-[20px] hover:bg-buttonColorHover">
              Daftar
            </Button>
          </div>

          {/* Link to Apakah jika Sudah Mempunyai Akun */}
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            {/* <Link to="/wishlist">To wishlist page</Link> */}
            <Link to="/login" className="text-xs text-buttonColor ">
              Sudah Punya Akun?
            </Link>
            {/* <a href="#" className="text-xs text-buttonColor uppercase"> */}
            {/* Sudah Punya Akun ? */}
            {/* </a> */}
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
          {/* End Form Section */}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
