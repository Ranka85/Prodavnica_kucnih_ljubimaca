import { UserCard } from "../../components/UserCard";
import { useState, useEffect } from 'react';
import { userService } from "../../service/users";

const { getAllUsers } = userService;

export const UsersPage = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllUsers();
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

  const usersToDisplay = data.slice((currentPage - 1) * 16, currentPage * 16); 

  return (
    <div>
      <h1 className="welcome-text">Our Satisfied Members</h1>
      <div className="container">
        <div className="row">
          {usersToDisplay.map((user) => (  
            <div className="col-lg-3 col-md-4 col-sm-6" key={user.id}>
              <UserCard user={user} />
            </div>
          ))}
        </div>
        <div style={{display:"flex", justifyContent:"center"}}>  
          { currentPage > 1 && (
            <button onClick={() => setCurrentPage(currentPage - 1)} className="button-prev-next"> Prev </button>
          )}
          { (currentPage - 1) * 16 + usersToDisplay.length < data.length && (
            <button onClick={() => setCurrentPage(currentPage + 1)} className="button-prev-next"> Next </button>
          )}
        </div>

      </div>
    </div>
  );
};
