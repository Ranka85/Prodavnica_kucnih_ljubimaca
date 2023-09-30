import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { userService } from "../../service/users";
import { Card } from "../../components/Card";

const { getUserAds } = userService;

export const UserPets = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getUserAds(id);
        setData(result.data.current_user_ads);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, [id]);

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>Loading...</div>;

  const petsToDisplay = data.slice((currentPage - 1) * 8, currentPage * 8);

  return (
    <div>
      <div className="container">
        <div className="row">
          {petsToDisplay.map((character) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={character.id}>
              <Card character={character} />
            </div>
          ))}
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
            {(currentPage - 1) * 8 + petsToDisplay.length < data.length && (
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
      </div>
    </div>
  );
};
