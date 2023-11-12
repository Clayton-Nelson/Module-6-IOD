import React from "react";
import { useState } from "react";
import SingleCat from "./SingleCat";

const ExtendedBigCats = ({ cats }) => {

  const [order, setCurrentOrder] = useState(cats);
  
  const pantheraCats = [...cats].filter((cat) =>
    cat.latinName.includes("Panthera")
  );
  const alphabeticOrder = [...order].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const reverseOrder = [...order].sort((a, b) => b.name.localeCompare(a.name));

  const handleChangeOrder = (newOrder) => {
    setCurrentOrder(newOrder);
  };

  return (
    <div className="cat-list">
      {order.map((cat) => (
        <SingleCat key={cat.id} cat={cat} />
      ))}
      <div className="order-buttons">
        <p>Change Order: </p>
        <button onClick={() => handleChangeOrder(alphabeticOrder)}>
          Alphabetically Sort
        </button>
        <button onClick={() => handleChangeOrder(reverseOrder)}>
          Reverse Alphabetically Sort
        </button>
      </div>
      <div className="Panthera-buttons">
        <p>Change Array: </p>
        <button onClick={() => handleChangeOrder(pantheraCats)}>
          Panthera Family
        </button>
        <button onClick={() => handleChangeOrder(cats)}>
          Reset and show Full list
        </button>
      </div>
    </div>
  );
};

export default ExtendedBigCats;
