import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function Products() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="products-main-container">
      <p className="products-title">Our Products</p>
      <div className="products-inner-container">
        {data ? (
          data.products.map((product) => (
            <Card
              key={product.id}
              images={product.images}
              id={product.id}
              title={product.title}
              price={product.price}
              discount={product.discountPercentage}
            ></Card>
          ))
        ) : (
          <Box sx={{ display: "flex" }}>
            <CircularProgress size={200} />
          </Box>
        )}
      </div>
    </div>
  );
}

export default Products;
