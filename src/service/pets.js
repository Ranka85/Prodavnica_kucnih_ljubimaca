import { axiosInstance } from "./api"

class PetService {
  getAdsByPetType = async (petType) => {
    const response = await axiosInstance.post('ad_filter/', {
      pet_type: petType
    });
    return response.data;
  };
}


export const petService = new PetService()