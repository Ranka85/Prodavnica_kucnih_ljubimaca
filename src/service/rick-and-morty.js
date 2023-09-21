import { axiosInstance } from "./api"

class RickAndMortyService {
    getAllCharacters = async () => await axiosInstance.get("/character")

    getAllLocations = async () => await axiosInstance.get("/location")
    
    getAllEpisodes = async () => await axiosInstance.get("/episode")
}

export const rickAndMortyService = new RickAndMortyService()