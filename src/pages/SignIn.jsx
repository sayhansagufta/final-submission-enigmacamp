import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { loginUser } from "../services/userService";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { LoginFormSchema } from "../schema/SchemaValidation";

const SignIn = () => {
  const styles = {
    backgroundColor: "#EFF3FA",
    height: "100vh",
  };
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(LoginFormSchema),
  });

  const loggedIn = async (loginData) => {
    try {
      const response = await loginUser(loginData);
      toast.success(`Login Berhasil! Selamat datang, ${response.username}!`);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      toast.error(error.message || "Login Gagal! Silahkan Coba Lagi Nanti!");
      console.log("Error:", error);
    }
  };

  return (
    <div data-aos="fade-down" data-aos-duration="1000" className="py-2" style={styles}>
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
        <div className="hidden lg:block lg:w-1/2 bg-cover" style={{ backgroundImage: "url('src/assets/png/img1.avif')" }}></div>

        <form onSubmit={form.handleSubmit(loggedIn)} className="w-full p-8 lg:w-1/2">
          <h2 className="text-2xl font-bold text-slate-950 text-left">Login dulu ya!</h2>
          <p className="text-small py-3 font-normal text-slate-700">Masuk ke akunmu untuk melanjutkan! Nikmati kemudahan akses dan fitur eksklusif hanya untuk pengguna terdaftar.</p>

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
                return <Input {...field} placeholder="Masukkan Password..." type="password" isInvalid={Boolean(fieldState.error)} errorMessage={fieldState.error?.message} autoComplete="current-password" />;
              }}
            />
          </div>

          <div className="mt-8">
            <Button type="submit" className="bg-buttonColor text-white font-bold py-2 px-4 w-full rounded-[20px] hover:bg-buttonColorHover">
              Masuk
            </Button>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <span className="border-b w-1/5 md:w-1/4"></span>
            <Link to="/signup" className="text-xs text-buttonColor">
              Belum Punya Akun ?
            </Link>
            <span className="border-b w-1/5 md:w-1/4"></span>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignIn;
