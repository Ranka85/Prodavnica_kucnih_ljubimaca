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
    category: "dog",
    created: null, 
  });
  

const handleSubmit = async (e) => {
  e.preventDefault();
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
 } catch (error) {
   console.error("Error sending data:", error);
   if (error.response) {
     console.log('Server responded with status:', error.response.status);
     console.log('Error data:', error.response.data);
   }
 }
};


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdData({
      ...adData,
      [name]: value,
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
            type="text"
            name="ad_title"
            placeholder="Ad title"
            value={adData.ad_title}
            onChange={handleInputChange}
            required
          />
          <select
            name="category"
            onChange={handleInputChange}
            required
            className="input-ad"
          >
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
            <option value="Rabbit">Rabbit</option>
            <option value="Bird">Bird</option>
            <option value="Fish">Fish</option>
            {/* value ={adData.category} */}
          </select>
          <input
            className="input-ad"
            type="date"
            name="pet_date_of_birth"
            placeholder="pet_date_of_birth"
            value={adData.pet_date_of_birth}
            onChange={handleInputChange}
            required
          />
          <input
            className="input-ad"
            type="text"
            name="address"
            placeholder="Location"
            value={adData.address}
            onChange={handleInputChange}
            // required
          />
          <input
            className="input-ad"
            type="text"
            name="phone_number"
            placeholder="Phone Number"
            value={adData.phone_number}
            onChange={handleInputChange}
            required
          />
          <input
            className="input-ad"
            type="number"
            name="price"
            placeholder="Price"
            value={adData.price}
            onChange={handleInputChange}
            required
          />

          <input 
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
          {/* created */}
          <input
            className="input-ad"
            type="date"
            name="created"
            placeholder="Created"
            value={adData.created}
            onChange={handleInputChange}
            required
          />
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
          {/* <button type="button" onClick={handleDelete} className='button-ad'>Delete Ad</button> */}
        </form>
        {adData.timestamp && (
          <p className="p-ad">
            Posted at: {new Date(adData.timestamp).toLocaleString()}
          </p>
        )}
      </div>
    </div>
  );
};
