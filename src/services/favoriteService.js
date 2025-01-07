import { axiosInstance } from "./axios";

const favoriteService = {
    getFavoriteNotes: async () => {
        try {
            const response = await axiosInstance.get("/favorites?_embed=note");
            return response;
        } catch (error) {
            console.log(error);
        }
    },
};
export default favoriteService;