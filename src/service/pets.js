import { axiosInstance } from "./api";

class PetService {
  getAdsByPetType = async (petType) => {
    const response = await axiosInstance.post("ad_filter/", {
      pet_type: petType,
    });
    return response.data;
  };
  
  getPetBreed = async (petType) => {
    const response = await axiosInstance.get(`pet_breeds/${petType}/`);
    return response.data;
  };
  getPetType = async () => {
    const response = await axiosInstance.get(`pet_types/`);
    return response.data;
  };
  getCity = async () => {
    const response = await axiosInstance.get(`cities/`);
    return response.data;
  };
}

export const petService = new PetService();
