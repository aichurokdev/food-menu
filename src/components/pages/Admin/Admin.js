import React, { useState } from "react";
import "./Admin.scss";

const Admin = () => {
  const [file, setFile] = useState(null);
  const [foodName, setFoodName] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div id="Admin">
      <div className="container">
        <div className="Admin">
          <h1>CREATE PRODUCT</h1>
          <div className="admin-block">
            <div className="choose-block">
              <div className="choose-file">
                <input
                  type="file"
                  placeholder="choose file"
                  accept="image/png, image/jpg"
                />
              </div>
              <div className="food-name">
                <input type="text" placeholder="food name" value={foodName} />
              </div>
              <div className="price">
                <input type="text" placeholder="price" value={price} />
              </div>
              <button>create</button>
            </div>
            <div className="place">
              <img src="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
