import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { userService } from '../../service/users';
import { Card } from '../../components/Card';

const {getUserAds} = userService;

export const UserPets = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
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

  return (
    <div>
      <h1>Pets of user {id}</h1>
      <div className="row">

            {data.map((character) => (
                
                <div className="col-lg-3 col-md-4 col-sm-6">
                <Card key={character.id} character={character}/>
                </div>
               
               ))}
               </div>
    </div>
  );
};


