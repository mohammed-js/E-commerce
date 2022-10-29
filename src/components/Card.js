import React, { useState } from "react";
import heart1 from "../assets/heart1.png";
import heart2 from "../assets/heart2.png";
import cart from "../assets/cart.png";
import { useNavigate } from "react-router-dom";

function Card({ images, id, title, price, discount }) {
  const navigate = useNavigate();
  const [favorite, setFavorite] = useState(false);
  const [carted, setCarted] = useState(false);
  function truncate(str, n) {
    return str.length > n ? str.slice(0, n) + "..." : str;
  }
  const shorterString = truncate(title, 20);

  return (
    <button
      className="container-btn"
      onClick={() => {
        navigate(`/items/${id}`);
      }}
    >
      <div className="card">
        <div
          className="card-inner-div-1"
          style={{
            backgroundImage: `url(${images[0]})`,
          }}
        >
          <div className="card-inner-div-2">
            <div>new</div>
          </div>
          <div
            className="card-favorite"
            onClick={(e) => {
              e.stopPropagation();
              setFavorite((prevState) => !prevState);
            }}
          >
            <img
              src={favorite ? heart1 : heart2}
              alt=""
              className="card-favorite-icon"
            ></img>
          </div>
        </div>
        <div className="card-inner-div-3">
          <div className="card-inner-div-4">
            <div className="subtitle">{shorterString}</div>
            <div style={{ display: "flex" }}>
              <div
                className="subtitle"
                style={{ textDecoration: "line-through", color: "black" }}
              >{`$${parseFloat(price - price * (discount / 100)).toFixed(
                2
              )}`}</div>
              <div
                className="subtitle"
                style={{ textDecoration: "line-through", color: "#9A9CAA" }}
              >{`$${price}`}</div>
            </div>
          </div>
          <div
            className="card-cart-container"
            onClick={(e) => {
              e.stopPropagation();
              setCarted((prevState) => !prevState);
            }}
          >
            <div
              style={{
                backgroundColor: `${carted ? "#00ABB3" : "#E9EDEF"}`,
                borderRadius: "10px",
              }}
            >
              <img
                src={cart}
                alt="cart"
                style={{
                  width: "30px",
                  height: "30px",
                  padding: "3px",
                  filter: `${carted ? "invert(1)" : ""}`,
                  padding: "5px",
                }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
export default Card;
