import { axiosInstance } from "./axios";

const categoryService = {
    getCategory: async () => {
        try {
            const response = await axiosInstance.get("/categories?_embed=notes");
            return (response);
        } catch (error) {
            return (error);
        }
    },
    createCategory: async () => {
        //bisa diisi hit data post category bisa diisikan juga parameternya
    },
};

export default categoryService;