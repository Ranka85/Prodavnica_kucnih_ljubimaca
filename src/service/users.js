
import { axiosInstance } from "./api"

class UserService{
    getAllUsers = async () => await axiosInstance.get("users/")

    getUser = async (id) => await axiosInstance.get(`users/${id}/`)

}

export const userService = new UserService()