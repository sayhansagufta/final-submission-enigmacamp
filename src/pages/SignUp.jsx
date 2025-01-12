import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/userService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SignUpFormSchema2 } from "../schema/SchemaValidation";

const SignUp = () => {
  const navigate = useNavigate();
  const styles = {
    backgroundColor: "#EFF3FA",
    height: "100vh",
  };
  const form = useForm({
    defaultValues: {
      name: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(SignUpFormSchema2),
  });
  const addRegisterUser = async (userData) => {
    try {
      const response = await registerUser(userData);
      toast.success("Register Berhasil! Silahkan Login!");
      console.log("User registered successfully:", response);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Registrasi gagal. Silakan coba lagi.");
    }
  };

  return (
    <div data-aos="fade-down" data-aos-duration="1000" className="py-2" style={styles}>
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div className="hidden lg:block lg:w-1/2 bg-cover" style={{ backgroundImage: "url('src/assets/png/img1.avif')" }}></div>
        <form onSubmit={form.handleSubmit(addRegisterUser)} className="w-full p-8 lg:w-1/2">
          <h2 className="text-2xl font-bold text-slate-950 text-left">Daftar Dulu ya!</h2>
          <p className="text-small py-3 font-normal text-slate-700 ">Buat akunmu sekarang untuk pengalaman terbaik! Isi data dengan lengkap dan nikmati fitur menarik yang kami tawarkan.</p>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Nama Lengkap</label>
            <Controller
              name="name"
              control={form.control}
              render={({ field, fieldState }) => {
                return <Input {...field} type="text" placeholder="Masukkan Nama Lengkap Anda..." isInvalid={Boolean(fieldState.error)} errorMessage={fieldState.error?.message} />;
              }}
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
            <Controller
              name="username"
              control={form.control}
              render={({ field, fieldState }) => {
                return <Input {...field} type="text" placeholder="Masukkan Username..." isInvalid={Boolean(fieldState.error)} errorMessage={fieldState.error?.message} autoComplete="username" />;
              }}
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => {
                return <Input {...field} placeholder="Masukkan Password..." type="password" isInvalid={Boolean(fieldState.error)} errorMessage={fieldState.error?.message} autoComplete="new-password" />;
              }}
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Konfirmasi Password</label>
            <Controller
              name="confirmPassword"
              control={form.control}
              render={({ field, fieldState }) => {
                return <Input {...field} type="password" placeholder="Masukkan Konfirmasi Password..." isInvalid={Boolean(fieldState.error)} errorMessage={fieldState.error?.message} autoComplete="new-password" />;
              }}
            />
          </div>
          <div className="mt-8">
            <Button type="submit" className="bg-buttonColor text-white font-bold py-2 px-4 w-full rounded-[20px] hover:bg-buttonColorHover">
              Daftar
            </Button>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <Link to="/login" className="text-xs text-buttonColor ">
              Sudah Punya Akun?
            </Link>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
