import { axiosInstance } from "./api"

class PetService {
    getAllDogs = async () => await axiosInstance.get("/dog")

    getAllCats = async () => await axiosInstance.get("/cat")
    
    getAllEBirds = async () => await axiosInstance.get("/bird")

    getAllFish = async () => await axiosInstance.get("/fish")

    getAllRabbits = async () => await axiosInstance.get("/rabbit")

}

export const petService = new PetService()