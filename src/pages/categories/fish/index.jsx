import { Card } from "../../../components/Card";
import { useState, useEffect } from 'react';
import { petService } from "../../../service/pets";

const { getAllFish } = petService;

export const FishPage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllFish();
        setData(result.data);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, []);

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  const fishToDisplay = data.ads.slice((currentPage - 1) * 8, currentPage * 8);  

  return (
    <div className="container">
      <h1>Fish</h1>
      <div className="row">
        {fishToDisplay.map((character) => (  
          <div className="col-lg-3 col-md-4 col-sm-6" key={character.id}>
            <Card character={character} />
          </div>
        ))}
      </div>
      <div style={{display: "flex", justifyContent: "center"}}>
        {currentPage > 1 && (
          <button onClick={() => setCurrentPage(currentPage - 1)}className="button-prev-next"> Prev </button>
        )}
        { (currentPage - 1) * 8 + fishToDisplay.length < data.ads.length && (
          <button onClick={() => setCurrentPage(currentPage + 1)} className="button-prev-next"> Next </button>
        )}
      </div>
    </div>
  );
};
