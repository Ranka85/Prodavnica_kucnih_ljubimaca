import { axiosInstance } from "./api"

class AdsService{
    getAllAds =  async () => await axiosInstance.get("ads/")

    postNewAd = async (formData) => await axiosInstance.post("ads/", formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    
    
}

export const adsService = new AdsService()