import { Card } from "../../../components/Card";
import { useState, useEffect } from "react";
import { petService } from "../../../service/pets";

const { getAdsByPetType } = petService;

export const CatsPage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAdsByPetType('Cat');
        setData(result.filtered_ads);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, []);

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  const catsToDisplay = data ? data.slice((currentPage - 1) * 8, currentPage * 8) : [];

  return (
    <div className="container">
      <h1>Cats</h1>
      <div className="row">
        {catsToDisplay.map((character) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={character.ad_title}>
            <Card character={character} />
          </div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {currentPage > 1 && (
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            className="button-prev-next"
          >
            {" "}
            Prev{" "}
          </button>
        )}
      {data && (currentPage - 1) * 8 + catsToDisplay.length < data.length && ( 
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="button-prev-next"
          >
            {" "}
            Next{" "}
          </button>
        )}
      </div>
    </div>
  );
};
