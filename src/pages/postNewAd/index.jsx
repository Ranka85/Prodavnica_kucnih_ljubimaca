import React, { useState } from "react";
import "./postAdd.css";
import axios from 'axios';


export const PostNewAdPage = () => {
  const [adData, setAdData] = useState({
    ad_title: "",
    phone_number: "",
    price: "",
    address: "",
    user: "",
    pet_date_of_birth: "",
    description: "",
    // image: "",
    pet_type: "",
    city:"",
    created: null, 
  });
  const petTypes = {
    'Cat': 1,
    'Dog': 2,
    'Rabbit': 3,
    'Bird': 4,
    'Fish': 5
  };
  
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorFields, setErrorFields] = useState({});

  

const handleSubmit = async (e) => {
  e.preventDefault();

    const currentTime = new Date().toISOString();
    setAdData({ ...adData, created: currentTime });
  const formData = new FormData();
  Object.keys(adData).forEach((key) => formData.append(key, adData[key]));
  // if (image) {
  //   formData.append("image", image);
 // }
 console.log("Sending Form Data:", formData);  

 try {
   const response = await axios.post("http://127.0.0.1:8000/ads/", formData, {
     headers: {
       'Content-Type': 'multipart/form-data'
     }
   });
   console.log("Data sent successfully:", response.data);
    setIsSuccess(true);
    setTimeout(() => {
      setAdData({
        ad_title: "",
        phone_number: "",
        price: "",
        address: "",
        user: "",
        pet_date_of_birth: "",
        description: "",
        pet_type: "",
        city:"",
        created: null,
      });
      setIsSuccess(false);
      setIsError(false); 
    }, 3000); 

 } catch (error) {
   console.error("Error sending data:", error);
    setIsError(true);
   if (error.response) {
      setErrorFields(error.response.data);
     console.log('Server responded with status:', error.response.status);
     console.log('Error data:', error.response.data);
   }
 }
};


const handleInputChange = (e) => {
  
  const { name, value } = e.target;
  let finalValue = value;
  
  if (name === "pet_type") {
    finalValue = petTypes[value];
  }

  setAdData({
    ...adData,
    [name]: finalValue,
  });
};

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   setImage(file);
  // };


  // const handleDelete = () => {
  //   console.log("Ad deleted");
  //   setAdData({
  //     name: "",
  //     category: "Cat",
  //     age: "",
  //     location: "",
  //     phoneNumber: "",
  //     about: "",
  //     timestamp: null,
  //   });
  // };

  return (
    <div className="post-ad">
      <div className="post-ad-container">
        <h2 className="text-ad">Post a New Ad</h2>
        <form onSubmit={handleSubmit} className="form-postAd">
          <input
          style={{ border: errorFields.ad_title ? '3px solid red' : '1px solid black' }}
            type="text"
            name="ad_title"
            placeholder="Pet Name"
            value={adData.ad_title}
            onChange={handleInputChange}
            required
          />
          <select
            name="pet_type"
            onChange={handleInputChange}
            required
            className="input-ad"
            
          >
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Bird">Bird</option>
            <option value="Fish">Fish</option>
            <option value="Rabbit">Rabbit</option>
          </select>
          <p className="pet-date">pet date of birth:</p>
          <input
          style={{ border: errorFields.pet_date_of_birth ? '3px solid red' : '1px solid black' }}
            className="input-ad"
            type="date"
            name="pet_date_of_birth"
            placeholder="pet_date_of_birth"
            value={adData.pet_date_of_birth}
            onChange={handleInputChange}
            required
          />
          {/* input for city  */}
          <input
          style={{ border: errorFields.city ? '3px solid red' : '1px solid black' }}
            className="input-ad"
            type="text"
            name="city"
            placeholder="City"
            value={adData.city}
            onChange={handleInputChange}
            required
          
         />
          <input
          style={{ border: errorFields.address ? '3px solid red' : '1px solid black' }}
            className="input-ad"
            type="text"
            name="address"
            placeholder="Location"
            value={adData.address}
            onChange={handleInputChange}
            // required
          />
          <input
          style={{ border: errorFields.phone_number ? '3px solid red' : '1px solid black' }}
            className="input-ad"
            type="text"
            name="phone_number"
            placeholder="Phone Number"
            value={adData.phone_number}
            onChange={handleInputChange}
            required
          />
          <input
          style={{ border: errorFields.price ? '3px solid red' : '1px solid black' }}
            className="input-ad"
            type="number"
            name="price"
            placeholder="Price"
            value={adData.price}
            onChange={handleInputChange}
            required
          />

          <input 
          style={{ border: errorFields.user ? '3px solid red' : '1px solid black' }}
          className="input-ad"
          type="text" 
          name="user"
          placeholder="user"
          value={adData.user}
          onChange={handleInputChange}
          required
          />
          {/* <div className="ad-img-div">
          <p className="p-img">image of your pet</p>
          <input
        
            className="img-ad"
            type="file"
            name="image"
            onChange={handleImageChange}
            required
          />
          </div> */}
      
          <textarea
            className="input-ad"
            name="description"
            placeholder="About the Ad"
            value={adData.description}
            onChange={handleInputChange}
            required
          ></textarea>

          <button type="submit" className="button-ad">
            Post Ad
          </button>

        </form>
        <div className="post-ad">
          {isSuccess && (
            <p className="p-ad-suc">Your ad has been posted successfully.</p>
          )}
          {isError && (
            <p className="p-ad-er">There was an error posting your ad.</p>
      
          )}

        </div>
      
      </div>
    </div>
  );
};
