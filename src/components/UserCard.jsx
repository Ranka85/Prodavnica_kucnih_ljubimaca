import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { userService } from '../service/users';

//const { getUserById } =  userService;

export const UserCard = ({ user }) => {
 const navigate = useNavigate(); 

    const handleCardClick = () => {
        navigate(`/user/${user.id}/`);
   

    };
  

  

  return (
    <div className="usercard" onClick={handleCardClick}>
      <div className="row">    
        <div className="col-12 px-4 pt-2">
          <h4>{user.username}</h4>
          {/* <h5 className="mt-2">{user.first_name}</h5> */}
          <p> <b>First Name:</b> {user.first_name} </p>
        <p> <b>Last Name:</b> {user.last_name} </p>
            <p> <b>Email:</b> {user.email} </p>
        </div>
      </div>
    </div>
  );
  
};

