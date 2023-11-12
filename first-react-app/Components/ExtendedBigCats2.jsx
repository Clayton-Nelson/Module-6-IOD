import React, { useState } from "react";
import SingleCat2 from "./SingleCat2";
import AddCatForm from "./AddCatForm";

const ExtendedBigCats2 = ({ cats }) => {
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

  const handleAddCat = (newCat) => {
    setCurrentOrder((prevCats) => [...prevCats, newCat]);
  };

  const handleDeleteCat = (catId) => {
    setCurrentOrder((prevCats) => prevCats.filter((cat) => cat.id !== catId));
  };

  return (
    <div className="cat-list">
      <AddCatForm onAddCat={handleAddCat} />
      {order.map((cat) => (
        <SingleCat2 key={cat.id} cat={cat} onDeleteCat={handleDeleteCat} />
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

export default ExtendedBigCats2;
