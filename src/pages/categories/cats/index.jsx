import { Card } from "../../../components/Card"
import { useState, useEffect } from 'react';
import { petService } from "../../../service/pets";
const { getAllCats } = petService;

export const CatsPage =()=>{          
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const result = await getAllCats()
console.log(result);
            setData(result.data);
        } catch (err) {
            setError(err);
        }
    };

    fetchData();

    }, []);

    if (error)
        return <div>Error: {error.message}</div>;


    if (!data)
        return <div>Loading...</div>;
//return images with name 
    return (
        <div className="container">  
            <h1>Cats</h1>
            <div className="row">

            {data.ads.map((character) => (
                
                <div className="col-lg-3 col-md-4 col-sm-6">
                <Card key={character.id} character={character}/>
                </div>
               
               ))}
               </div>
        </div>
    );
     
  
};
    

    

    

