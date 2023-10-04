
import { axiosInstance } from "./api"

class UserService{
    getAllUsers = async () => await axiosInstance.get("users/")

    getUserAds = async (id) => await axiosInstance.get(`users/${id}/user_ads/`)

}

export const userService = new UserService()