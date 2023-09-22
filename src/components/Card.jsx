import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Card = ({ character }) => 
{
  console.log("CHAR: character", character);
  return (
    <div className="card"  style={{height: 500}}>
      <div className="row">
        <div className="col-12">
          <div className="image w-100">
            <img src={character.image} alt={character.name} className='w-100' />
          </div>
        </div>
        <div className="col-12 px-4 pt-2">
          <h4>{character.name}</h4>
          <h5 className="mt-2">{character.status}</h5>
          <p className="mt-4">location: {character.location.name}</p>
          <p> <b>Age:</b> 1 </p>
          <p> <b>Posted:</b> {character.time} </p>

        </div>
      </div>
    </div>
  );
  
};

