import { z } from "zod";

export const SignUpFormSchema = z
  .object({
    name: z.string().min(3, "Nama Lengkap Harus Memiliki Setidaknya 3 Karakter!").max(50, "Nama Lengkap Tidak Boleh Lebih dari 50 Karakter!"),
    username: z
      .string()
      .min(3, "Username Harus Memiliki Setidaknya 3 Karakter")
      .regex(/^[a-zA-Z0-9_]+$/, "Username Hanya Boleh Berisi Huruf, Angka, dan UnderScore"),
    password: z.string().min(6, "Password harus memiliki setidaknya 6 Karakter").max(20, "Password Tidak Boleh Lebih dari 20 Karakter"),
    confirmPassword: z.string(),
    type: z.enum(["USER", "ADMIN"], "Tipe Pengguna Harus USER atau ADMIN"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password dan Konfirmasi Password Harus Sama!",
  });

export const SignUpFormSchema2 = z
  .object({
    name: z.string().min(3, "Nama Lengkap harus memiliki setidaknya 3 karakter").max(50, "Nama Lengkap tidak boleh lebih dari 50 karakter"),
    username: z
      .string()
      .min(3, "Username harus memiliki setidaknya 3 karakter")
      .max(30, "Username tidak boleh lebih dari 30 karakter")
      .regex(/^[a-zA-Z0-9_]+$/, "Username hanya boleh berisi huruf, angka, dan garis bawah"),
    password: z.string().min(6, "Password harus memiliki setidaknya 6 karakter").max(20, "Password Tidak Boleh Lebih dari 20 Karakter"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password dan Konfirmasi Password harus sama!",
  });

export const LoginFormSchema = z.object({
  username: z
    .string()
    .min(3, "Username Harus Memiliki Setidaknya 3 Karakter")
    .regex(/^[a-zA-Z0-9_ ]+$/, "Username Hanya Boleh Berisi Huruf, Angka, dan UnderScore"),
  password: z.string().min(6, "Password Harus Memiliki Setidaknya 6 Karakter").max(20, "Password Tidak Boleh Lebih dari 20 Karakter"),
});
