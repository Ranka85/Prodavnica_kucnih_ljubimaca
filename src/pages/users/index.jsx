import { UserCard } from "../../components/UserCard";
import { useState, useEffect } from 'react';
import { userService } from "../../service/users";

const { getAllUsers } = userService;

export const UsersPage = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
        try {
            const result = await getAllUsers();
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

    
  return (
    <div>
      <h1 className="welcome-text">Our Satisfied Members</h1>
      <div className="container">
        
        <div className="row">
          {data.map((user) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={user.id}>
              <UserCard user={user} />
            </div>
          ))}
        </div>
      </div>
    </div>
    
  );
};


