import { Card } from "../../components/Card";
import { useState, useEffect } from 'react';
import { adsService } from "../../service/ads";

const { getAllAds } = adsService;

export const ShopPage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllAds();
        console.log(result);
        setData(result.data);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }
    const NavigateToPets = () => {
        window.location.href = "/pet";
    };



  return (
    <div>
      <h1 className="welcome-text">Welcome to our Pet Shop</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <button className="btn" onClick={NavigateToPets}>Search by pet type</button>
          </div>
        <div className="row">
          {data.map((character) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={character.id}>
              <Card character={character} />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};
