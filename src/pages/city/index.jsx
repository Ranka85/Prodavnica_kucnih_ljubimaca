import { useState, useEffect } from "react";
import { axiosInstance } from "../../service/api";
import { petService } from "../../service/pets";
import { Card } from "../../components/Card";
import "./style.css";

const { getPetBreed } = petService;
const { getPetType } = petService;
const { getCity } = petService;

export const CityPage = () => {
  const [cities, setCities] = useState([]);
  const [petType, setPetType] = useState([]);
  const [petBreeds, setPetBreeds] = useState([]);
  const [selectedPetBreed, setSelectedPetBreed] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchCity = async () => {
      try {
        const response = await getCity();
        setCities(response.cities);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCity();
  });

  useEffect(() => {
    const fetchPetType = async () => {
      try {
        const response = await getPetType();
        setPetType(response.pet_types);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPetType();
  });

  useEffect(() => {
    if (!petType) return;
    const fetchPetBreeds = async () => {
      try {
        const response = await getPetBreed(petType);
        setPetBreeds(response.pet_breeds);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPetBreeds();
  }, [petType]);

  const fetchResults = async () => {
    if (cities && petType) {
      try {
        const response = await axiosInstance.post(`ad_filter/`, {
          city,
          pet_type: petType,
          pet_breeds: selectedPetBreed,
        });
        setResults(response.data.filtered_ads);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    fetchResults();
  }, [cities, petType, selectedPetBreed]);

  return (
    <div className="container">
      <div className="buttons">
        <div className="select-div">
          <select
            value={cities}
            className="select-city"
            onChange={(e) => setCities(e.target.value)}
          >
            <option value="" selected>
              Select City:
            </option>
            {cities.map((city) => (
              <option key={city.id} value={city.city_name}>
                {city.city_name}
              </option>
            ))}
          </select>

          <select
            value={petType}
            className="select-pet"
            onChange={(e) => setPetType(e.target.value)}
          >
            <option value="" selected>
              Select Pet:
            </option>
            {petType.map((type) => (
              <option key={type.id} value={type.pet_type_name}>
                {type.pet_type_name}
              </option>
            ))}
          </select>

          {petType && (
            <select
              value={selectedPetBreed}
              className="select-pet"
              onChange={(e) => setSelectedPetBreed(e.target.value)}
            >
              <option value="" selected>
                Select Pet Breed:
              </option>
              {petBreeds.map((breed) => (
                <option key={breed.id} value={breed.pet_breed_name}>
                  {breed.pet_breed_name}
                </option>
              ))}
            </select>
          )}

          <button
            className="button-city"
            onClick={fetchResults}
            disabled={
              cities === "" || petType === "" || selectedPetBreed === ""
            }
          >
            Search
          </button>
        </div>
        {results.length > 0 ? (
          <div className="result-div">
            {results.map((ad, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6">
                <Card key={index} character={ad} />
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <h1>No results</h1>
          </div>
        )}
      </div>
    </div>
  );
};
