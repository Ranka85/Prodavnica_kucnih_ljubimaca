import { useState, useEffect } from "react";
import { Card } from "../../../components/Card";
import { petService } from "../../../service/pets"; 

export const DogsPage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchDogAds = async () => {
    try {
      const response = await petService.getAdsByPetType("Dog");
      setData(response.filtered_ads); 
    } catch (error) {
      setError(`Something went wrong: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchDogAds();
  }, []); 
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div className="container">
      <h1>Dogs</h1>
      <div className="row">
        {data.map((ad) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={ad.ad_title}>
            <Card character={ad} />
          </div>
        ))}
      </div>
    </div>
  );
};
