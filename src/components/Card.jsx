import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import placeholderImage from '../assets/noPicture.jpg' 


export const Card = ({ character }) => 
{
  console.log("CHAR: character", character);
  return (
    <div className="card"  style={{height: 550}}>
      <div className="row">
        <div className="col-12">
          <div className="image w-100">
          <img src={character.image ? character.image : placeholderImage} alt={character.ad_title} className='w-100' />
          </div>
        </div>
        <div className="col-12 px-4 pt-2">
          <h4>{character.ad_title}</h4>
          <h5 className="mt-2">{character.description}</h5>
          <p> <b>Age:</b> {character.pet_date_of_birth} </p>
          <p> <b>Price:</b> {character.price} </p> 
          <p><b>City: </b> {character.city}</p>
          <p className="mt-4"><b>location:</b> {character.address}</p>
          <p> <b>Phone Number: </b> {character.phone_number}</p>
          {/* <p> <b>Posted:</b> {character.created} </p> */}

        </div>
      </div>
    </div>
  );
  
};

