import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import Navbar from "../sections/Navbar";
function Details() {
  const [item, setItem] = useState();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setItem(json));
  }, []);

  const params = useParams();
  const { id } = params;

  return (
    <>
      <div
        style={{
          width: "100",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Navbar></Navbar>
      </div>
      <div className="details-top-container">
        {item ? (
          <div className="details-mid-container">
            <div className="details-low-container">
              <img
                alt="product"
                src={item?.images[0]}
                className="main-img-section"
              ></img>
            </div>
            <div className="details-section">
              <div>
                <span style={{ fontWeight: "bold", fontSize: "40px" }}>
                  {item?.title}
                </span>
              </div>
              <div className="topic">
                Brand: <span className="description">{item?.brand}</span>
              </div>
              <div className="topic">
                Category: <span className="description">{item?.category}</span>
              </div>
              <div className="topic">
                Price: <span className="description">{`${item?.price}$`}</span>
              </div>
              <div className="topic">
                Rating: <span className="description">{item?.rating}</span>
              </div>
              <div className="topic">
                Description:{" "}
                <span className="description">{item?.description}</span>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  paddingTop: "20px",
                }}
              >
                {item?.images.map((image) => (
                  <img src={image} alt="img" className="small-img"></img>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <Box sx={{ display: "flex" }}>
            <CircularProgress size={200} />
          </Box>
        )}
      </div>
    </>
  );
}

export default Details;
