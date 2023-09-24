import { axiosInstance } from "./api"

class PetService {
    getAllDogs = async () => await axiosInstance.get("/Dogs")

    getAllCats = async () => await axiosInstance.get("/Cat/Berane")
    
    getAllBirds = async () => await axiosInstance.get("/Bird")

    getAllFish = async () => await axiosInstance.get("/Fish")

    getAllRabbits = async () => await axiosInstance.get("/Rabbit")
    

}

export const petService = new PetService()