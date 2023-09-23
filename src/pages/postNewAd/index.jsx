import React, { useState } from "react";
import "./postAdd.css";

export const PostNewAdPage = () => {
  const [adData, setAdData] = useState({
    name: "",
    category: "Cat",
    age: "",
    location: "",
    phoneNumber: "",
    about: "",
    timestamp: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdData({
      ...adData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(adData).forEach((key) => formData.append(key, adData[key]));
    if (image) {
      formData.append("image", image);
    }
    console.log("Form Data:", formData);
  };

  const handleDelete = () => {
    console.log("Ad deleted");
    setAdData({
      name: "",
      category: "Cat",
      age: "",
      location: "",
      phoneNumber: "",
      about: "",
      timestamp: null,
    });
  };

  return (
    <div className="post-ad">
      <div className="post-ad-container">
        <h2 className="text-ad">Post a New Ad</h2>
        <form onSubmit={handleSubmit} className="form-postAd">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={adData.name}
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
          </select>
          <input
            className="input-ad"
            type="number"
            name="age"
            placeholder="Age of Pet"
            value={adData.age}
            onChange={handleInputChange}
            required
          />
          <input
            className="input-ad"
            type="text"
            name="location"
            placeholder="Location"
            value={adData.location}
            onChange={handleInputChange}
            required
          />
          <input
            className="input-ad"
            type="number"
            name="phoneNumber"
            placeholder="Phone Number"
            value={adData.phoneNumber}
            onChange={handleInputChange}
            required
          />
          <div className="ad-img-div">
          <p className="p-img">image of your pet</p>
          <input
        
            className="img-ad"
            type="file"
            name="image"
            onChange={handleImageChange}
            required
          />
          </div>
          <textarea
            className="input-ad"
            name="about"
            placeholder="About the Ad"
            value={adData.about}
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
