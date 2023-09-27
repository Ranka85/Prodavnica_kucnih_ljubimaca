import { axiosInstance } from "./api"

class PetService {
    getAllDogs = async () => await axiosInstance.get("pet_type_filter/Dog")

    getAllCats = async () => await axiosInstance.get("pet_type_filter/Cat")
    
    getAllBirds = async () => await axiosInstance.get("pet_type_filter/Bird")

    getAllFish = async () => await axiosInstance.get("pet_type_filter/Fish")

    getAllRabbits = async () => await axiosInstance.get("pet_type_filter/Rabbit")
    

}


export const petService = new PetService()