import React, { useState } from "react";
import { adsService } from "../../service/ads";
import { useContext, useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import "./postAdd.css";

export const PostNewAdPage = () => {
  const { user } = useContext(UserContext);

  const [adData, setAdData] = useState({
    ad_title: "",
    phone_number: "",
    price: "",
    address: "",
    pet_date_of_birth: "",
    description: "",
    image: "",
    pet_type: "",
    city: "",
    pet_breed_name: "",
    user: user ? user.user_id : null,

    // created: null,
  });
  useEffect(() => {
    if (user) {
      setAdData((prevData) => ({
        ...prevData,
        user: user ? user.user_id : null,
      }));
    }
  }, [user]);

  const petTypes = {
    Dog: 1,
    Cat: 2,
    Bird: 3,
    Fish: 4,
    Rabbit: 5,
  };

  const Cities = {
    Podgorica: 1,
    Nikšić: 2,
    Berane: 3,
  };

  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorFields, setErrorFields] = useState({});
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSuccess(false);
    setIsError(false);
    setErrorFields({});

    const currentTime = new Date().toISOString();
    const formData = new FormData();

    Object.keys(adData).forEach((key) => formData.append(key, adData[key]));

    try {
      const formData = new FormData();
      Object.keys(adData).forEach((key) => formData.append(key, adData[key]));
      if (image) {
        formData.append("image", image);
      }

      if (user && user.user_id) {
        formData.append("user", user.user_id);
      }

      const response = await adsService.postNewAd(formData);

      setIsSuccess(true);
      setTimeout(() => {
        setAdData({
          ad_title: "",
          phone_number: "",
          price: "",
          address: "",
          pet_date_of_birth: "",
          description: "",
          pet_type: "",
          image: "",
          city: "City",
          pet_breed_name: "",
          user: user ? user.user_id : null,
        });
        setIsSuccess(false);
        setIsError(false);
      }, 3000);
    } catch (error) {
      console.error("Error sending data:", error);
      setIsError(true);
      if (error.response) {
        setErrorFields(error.response.data);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let finalValue = value;

    if (name === "pet_type") {
      finalValue = petTypes[value];
    }

    if (name === "city") {
      finalValue = Cities[value];
    }

    setAdData({
      ...adData,
      [name]: finalValue,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div className="post-ad">
      <div className="post-ad-container">
        <h2 className="text-ad">Post a New Ad</h2>
        <form onSubmit={handleSubmit} className="form-postAd">
          <input
            style={{
              border: errorFields.ad_title
                ? "3px solid red"
                : "1px solid black",
            }}
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
            defaultValue=""
            required
            className="input-ad"
          >
            <option value="" disabled hidden>
              {" "}
              Pet Type{" "}
            </option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Bird">Bird</option>
            <option value="Fish">Fish</option>
            <option value="Rabbit">Rabbit</option>
          </select>
          <input
            style={{
              border: errorFields.pet_breed_name  
                ? "3px solid red"
                : "1px solid black",
            }}
            className="input-ad"
            type="text"
            name="pet_breed_name"
            placeholder="Pet Breed"
            value={adData.pet_breed_name}
            onChange={handleInputChange}
            required
          />


          <p className="pet-date">pet date of birth:</p>
          <input
            style={{
              border: errorFields.pet_date_of_birth
                ? "3px solid red"
                : "1px solid black",
            }}
            className="input-ad"
            type="date"
            name="pet_date_of_birth"
            placeholder="pet_date_of_birth"
            value={adData.pet_date_of_birth}
            onChange={handleInputChange}
            required
          />

          <select
            name="city"
            onChange={handleInputChange}
            defaultValue=""
            required
            className="input-ad"
          >
            <option value="" disabled hidden>
              {" "}
              City{" "}
            </option>
            <option value="Podgorica">Podgorica</option>
            <option value="Nikšić">Nikšić</option>
            <option value="Berane">Berane</option>
            
        
          </select>
          <input
            style={{
              border: errorFields.address ? "3px solid red" : "1px solid black",
            }}
            className="input-ad"
            type="text"
            name="address"
            placeholder="Address"
            value={adData.address}
            onChange={handleInputChange}
          />
          <input
            style={{
              border: errorFields.phone_number
                ? "3px solid red"
                : "1px solid black",
            }}
            className="input-ad"
            type="text"
            name="phone_number"
            placeholder="Phone Number"
            value={adData.phone_number}
            onChange={handleInputChange}
            required
          />
          <input
            style={{
              border: errorFields.price ? "3px solid red" : "1px solid black",
            }}
            className="input-ad"
            type="number"
            name="price"
            placeholder="Price"
            value={adData.price}
            onChange={handleInputChange}
          />

          <div className="ad-img-div">
            <p className="p-img">image of your pet</p>
            <input
              style={{
                border: errorFields.user ? "3px solid red" : "1px solid black",
              }}
              className="img-ad"
              type="file"
              name="image"
              onChange={handleImageChange}
            />
          </div>

          <textarea
            className="input-ad"
            name="description"
            placeholder="About the Ad"
            value={adData.description}
            onChange={handleInputChange}
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
