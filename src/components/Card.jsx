import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import placeholderImage from "../assets/noPicture.png";
import { axiosInstance } from "../service/api";

export const Card = ({ character, user, currentUsername }) => {

  const [image, setImage] = useState(null);

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    ad_title: character.ad_title,
    description: character.description,
    pet_date_of_birth: character.pet_date_of_birth,
    price: character.price,
    city: character.city,
    address: character.address,
    phone_number: character.phone_number,
    // created: character.created,
    // last_updated:character/last_updated,
  });
  const Cities = {
    Podgorica: 1,
    Nikšić: 2,
    Berane: 3,
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleDelete = async () => {
    try {
      const response = await axiosInstance.delete(`/ads/${character.id}`);
      if (response.status === 200) {
        window.location.reload();
      }
    } catch (error) {
      console.error("Error deleting ad:", error);
    }
  };

  const handleEdit = async () => {
    try {
      const formData = new FormData();
      formData.append("image", image);

      const response = await axiosInstance.put(
        `/ads/${character.id}/`,
        editData
      );

      if (response.status === 200) {
        window.location.reload();
        setIsEditing(false);
      }
    } catch (error) {
      console.error("Error editing ad:", error);
      if (error.response) {
        console.error("Server responded with:", error.response.data);
      }
    }
  };

  return (
    <div className="card" style={{ minHeight: "590px" }}>
      {isEditing ? (
        <div>
          <h4 style={{ textAlign: "center", color: "pink" }}>Edit Ad</h4>
          <div className="image w-100">
            <img
              src={character.image ? character.image : placeholderImage}
              alt={character.ad_title}
              className="w-100"
              style={{ height: "150px" }}
            />
          </div>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className="form-control"
          />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontSize: "14px" }}>
              <b>Pet name:</b>
            </p>
            <input
              value={editData.ad_title}
              onChange={(e) =>
                setEditData({ ...editData, ad_title: e.target.value })
              }
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontSize: "14px" }}>
              <b>Description:</b>
            </p>
            <input
              value={editData.description}
              onChange={(e) =>
                setEditData({ ...editData, description: e.target.value })
              }
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontSize: "14px" }}>
              <b>Date of Birth:</b>
            </p>
            <input
              type="date"
              value={editData.pet_date_of_birth}
              onChange={(e) =>
                setEditData({ ...editData, pet_date_of_birth: e.target.value })
              }
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontSize: "14px" }}>
              <b>Price:</b>
            </p>
            <input
              type="number"
              min="0"
              value={editData.price}
              onChange={(e) =>
                setEditData({ ...editData, price: e.target.value })
              }
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontSize: "14px" }}>
              <b>City:</b>
            </p>

            <select
              name="city"
              onChange={(e) =>
                setEditData({ ...editData, city: e.target.value })
              }
              defaultValue=""
              required
              className="input-ad"
            >
              <option value="" disabled hidden>
                {" "}
                {editData.city}{" "}
              </option>
              <option value="Podgorica">Podgorica</option>
              <option value="Nikšić">Nikšić</option>
              <option value="Berane">Berane</option>
            </select>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontSize: "14px" }}>
              <b>Address:</b>
            </p>
            <input
              value={editData.address}
              onChange={(e) =>
                setEditData({ ...editData, address: e.target.value })
              }
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontSize: "14px" }}>
              <b>Phone Number:</b>
            </p>
            <input
              value={editData.phone_number}
              onChange={(e) =>
                setEditData({ ...editData, phone_number: e.target.value })
              }
            />
          </div>

          <div className="edit-but">
            <button onClick={handleEdit} className="edit-button">
              Submit Changes
            </button>
            <button onClick={() => setIsEditing(false)} className="edit-button">
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="row">
            <div className="col-12">
              <div className="image w-100">
                <img
                  src={character.image ? character.image : placeholderImage}
                  alt={character.ad_title}
                  className="w-100"
                  style={{ height: "190px" }}
                />
              </div>
            </div>
            <div className="col-12 px-4 pt-2">
              <h4>{character.ad_title}</h4>
              <h5 className="mt-2">{character.description}</h5>
              <p>
                {" "}
                <b>Age:</b> {character.pet_date_of_birth}{" "}
              </p>
              <p>
                {" "}
                <b>Price:</b> {character.price}{" "}
              </p>
              <p>
                {" "}
                <b>City:</b> {character.city}{" "}
              </p>
              <p className="mt-4">
                {" "}
                <b>Location:</b> {character.address}{" "}
              </p>
              <p>
                {" "}
                <b>Phone Number:</b> {character.phone_number}{" "}
              </p>
              <p>
                {" "}
                <b>Posted:</b> {character.created}{" "}
              </p>
            </div>
          </div>
          {character.user.user_id === user?.user_id ? (
            <div className="edit-but" style={{ marginBottom: "3px" }}>
              <button
                onClick={() => setIsEditing(true)}
                className="edit-button"
              >
                Edit
              </button>
              <button onClick={handleDelete} className="delete-button">
                Delete
              </button>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};
