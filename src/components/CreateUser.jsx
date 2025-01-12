import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";
import { SignUpFormSchema2 } from "../schema/SchemaValidation";
import { registerUser } from "../services/userService";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      name: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(SignUpFormSchema2),
  });

  const addCreateUser = async (userData) => {
    console.log("Data submitted:", userData); // Tambahkan log ini
    try {
      const response = await registerUser(userData);
      toast.success("Akun Berhasil dibuat!");
      console.log("Akun berhasil dibuat: ", response);
      setTimeout(() => {
        navigate("/user");
      }, 2000);
    } catch (error) {
      console.error("Gagal Buat akun!: ", error);
      toast.error("Akun Gagal dibuat. Coba lagi!");
    }
  };

  return (
    <>
      <section data-aos="fade-down" data-aos-duration="1000" className="flex flex-col items-center pt-6">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Buat User Baru</h1>
            <p className="text-small py-0 font-normal text-slate-700">Lengkapi data pengguna baru Anda sekarang untuk kemudahan dan kenyamanan!</p>
            <form onSubmit={form.handleSubmit(addCreateUser)} className="space-y-4 md:space-y-6">
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
                  render={({ field, fieldState }) => (
                    <div>
                      <Input {...field} type="password" placeholder="Masukkan Konfirmasi Password..." isInvalid={Boolean(fieldState.error)} />
                      {fieldState.error && <span className="text-red-500 text-sm">{fieldState.error.message}</span>}
                    </div>
                  )}
                />
              </div>

              <div className="mt-16">
                <Button type="submit" className="bg-buttonColor text-white font-bold py-2 px-4 w-full rounded-[20px] hover:bg-buttonColorHover">
                  Buat Pengguna Baru
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default CreateUser;
