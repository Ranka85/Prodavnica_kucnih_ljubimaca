import { useState, useEffect } from "react";
import { axiosInstance } from "../../service/api";
import { Card } from "../../components/Card";
import "./style.css";

export const CityPage = () => {
  const [city, setCity] = useState("");
  const [petType, setPetType] = useState("");
  const [results, setResults] = useState([]);

  const fetchResults = async () => {
    if (city && petType) {
      try {
        const response = await axiosInstance.post(`ad_filter/`, {
          city,
          pet_type: petType,

        });
        setResults(response.data.filtered_ads);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    fetchResults();
  }, [city, petType]);


  return (
    <div className="container">
      <div className="buttons">
        <div className="select-div">
          <select
            value={city}
            className="select-city"
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="" selected>
              {" "}
              Select City:
            </option>
            <option value="Berane">Berane</option>
            <option value="Podgorica">Podgorica</option>
            <option value="Niksic">Niksic</option>
          </select>

          <select
           value={petType}
            className="select-pet"
            onChange={(e) => setPetType(e.target.value)}
          >
            <option value="" selected>
              {" "}
              Select Pet:
            </option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Fish">Fish</option>
            <option value="Bird">Bird</option>
            <option value="Rabbit">Rabbit</option>
          </select>

          <button
            className="button-city"
            onClick={fetchResults}
            disabled={city === "" || petType === ""}
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
