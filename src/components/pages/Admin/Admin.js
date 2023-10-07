import React, { useEffect, useState } from "react";
import "./Admin.scss";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { GET_IMAGE } from "../../redux/actionTypes";

const Admin = ({ dark, setDark }) => {
  const [image, setImage] = useState(null);
  const [foodName, setFoodName] = useState("");
  const [price, setPrice] = useState("");
  const [isPolya, setIsPolya] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const savedData = localStorage.getItem("productData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setFoodName(parsedData.foodName);
      setPrice(parsedData.price);
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleCreate = () => {
    if (image && foodName !== "" && price !== "") {
      setIsPolya(true);

      const menu = {
        id: uuidv4(),
        image,
        foodName,
        price,
      };

      localStorage.setItem("productData", JSON.stringify(menu));

      dispatch({
        type: GET_IMAGE,
        payload: menu,
      });

      setFoodName("");
      setPrice("");

      navigate("/menu");
    } else {
      setIsPolya(false);
    }
  };

  return (
    <div id="Admin">
      <div className="container">
        <div className="Admin">
          <h1 className="admin--h1" style={{ color: dark ? "#fff" : "" }}>
            CREATE PRODUCT
          </h1>
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
                  onChange={(event) => setFoodName(event.target.value)}
                />
                {isPolya && <p className="polya">заполните поля </p>}
              </div>
              <div className="price">
                <input
                  type="text"
                  placeholder="price"
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
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
