import { axiosInstance } from "./api"

class Pets {
    getAllDogs = async () => await axiosInstance.get("/dog")

    getAllCats = async () => await axiosInstance.get("/cat")
    
    getAllEBirds = async () => await axiosInstance.get("/bird")

    getAllFishes = async () => await axiosInstance.get("/fish")

    getAllRabbits = async () => await axiosInstance.get("/rabbit")

}

export const PetsServices = new Pets()