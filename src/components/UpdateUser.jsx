import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { SignUpFormSchema } from "../schema/SchemaValidation";
import { Input } from "@nextui-org/react";
import { Button } from "flowbite-react";
import { axiosInstance } from "../services/axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const UpdateUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      name: "",
      username: "",
      password: "",
      confirmPassword: "",
      type: "USER", // Nilai default untuk type
    },
    resolver: zodResolver(SignUpFormSchema),
  });

  useEffect(() => {
    const fetchUserById = async () => {
      try {
        const response = await axiosInstance.get(`/users/${id}`);
        const { name, username, type } = response.data;

        form.reset({
          name: name || "",
          username: username || "",
          password: "",
          confirmPassword: "",
          type: type || "USER", // Set nilai type dari data API
          created_at: new Date().toISOString(),
        });
      } catch (error) {
        console.error("Error fetching user data: ", error);
        toast.error("Failed to fetch user data.");
      }
    };

    fetchUserById();
  }, [id, form]);

  const handleUpdate = form.handleSubmit(async (data) => {
    try {
      const payload = {
        id: data.id,
        name: data.name,
        username: data.username,
        password: data.password,
        created_at: new Date().toISOString(),
        type: data.type, // Pastikan type disertakan di payload
      };

      // Kirim data yang diupdate
      await axiosInstance.put(`/users/${id}`, payload);
      toast.success("User updated successfully!");
      setTimeout(() => {
        navigate("/user");
      }, 2000);
    } catch (error) {
      console.error("Error updating user: ", error);
      toast.error("Failed to update user.");
    }
  });

  return (
    <>
      <section className="flex flex-col items-center pt-6">
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">Update User</h1>
            <form onSubmit={handleUpdate} className="space-y-4 md:space-y-6">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Nama Lengkap</label>
                <Controller name="name" control={form.control} render={({ field, fieldState }) => <Input {...field} type="text" placeholder="Nama Lengkap" isInvalid={Boolean(fieldState.error)} errorMessage={fieldState.error?.message} />} />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Username</label>
                <Controller name="username" control={form.control} render={({ field, fieldState }) => <Input {...field} type="text" placeholder="Username" isInvalid={Boolean(fieldState.error)} errorMessage={fieldState.error?.message} />} />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Password Baru</label>
                <Controller
                  name="password"
                  control={form.control}
                  render={({ field, fieldState }) => <Input {...field} type="password" placeholder="Password" isInvalid={Boolean(fieldState.error)} errorMessage={fieldState.error?.message} />}
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Konfirmasi Password Baru</label>
                <Controller
                  name="confirmPassword"
                  control={form.control}
                  render={({ field, fieldState }) => <Input {...field} type="password" placeholder="Konfirmasi Password" isInvalid={Boolean(fieldState.error)} errorMessage={fieldState.error?.message} />}
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">Tipe Pengguna</label>
                <Controller
                  name="type"
                  control={form.control}
                  render={({ field }) => (
                    <select {...field} className="w-full p-2.5 border rounded-lg">
                      <option value="USER">User</option>
                      <option value="ADMIN">Admin</option>
                    </select>
                  )}
                />
              </div>

              <div className="mt-4">
                <Button type="submit" className="bg-blue-600 text-white font-bold py-2 px-4 w-full rounded-md hover:bg-blue-700">
                  Update User
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

export default UpdateUser;
