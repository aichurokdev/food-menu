import React, { useState } from "react";
import "./Admin.scss";
import { useNavigate } from "react-router-dom";
import {v4 as uuidv4 } from "uuid"

const Admin = () => {
  const [image, setImage] = useState(null);
  const [foodName, setFoodName] = useState("");
  const [price, setPrice] = useState("");
  const [isPolya, setIsPolya] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleCreate = () => {
    // console.log("image:", image);
    // console.log("foodName:", foodName);
    // console.log("price:", price);
    if (image && foodName.length > 0 && price.length > 0) {
      setIsPolya(true);
      navigate("/menu");
    } else {
      setIsPolya(false);
    }
  };

  const menu = {
    id: uuidv4(),
    image,
    foodName,
    price,

  }

  const handleFoodNameChange = (e) => {
    setFoodName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div id="Admin">
      <div className="container">
        <div className="Admin">
          <h1>CREATE PRODUCT</h1>
          <div className="admin-block">
            <div className="choose-block">
              <div className="choose-file">
                <label className="file-input-label">
                  Choose File
                  <input
                    type="file"
                    accept="image/png, image/jpg"
                    onChange={handleImageChange}
                  />
                </label>
              </div>
              <div className="food-name">
                <input
                  type="text"
                  placeholder="food name"
                  value={foodName}
                  onChange={handleFoodNameChange}
                />
                {isPolya && <p className="polya">заполните поля </p>}
              </div>
              <div className="price">
                <input
                  type="text"
                  placeholder="price"
                  value={price}
                  onChange={handlePriceChange}
                />
              </div>
              {isPolya && <p className="polya">заполните поля </p>}
              <button onClick={handleCreate}>create</button>
            </div>
            <div className="place">
              {image ? (
                <img src={URL.createObjectURL(image)} alt="Selected Image" />
              ) : (
                <p>place for a photo </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
