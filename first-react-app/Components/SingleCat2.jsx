import React from "react";

const SingleCat2 = ({ cat, onDeleteCat }) => {
  const handleDelete = () => {
    onDeleteCat(cat.id);
  };

  return (
    <div className="single-cat">
      <img src={cat.image} alt={cat.name} />
      <h3>{cat.name}</h3>
      <p>{cat.latinName}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default SingleCat2;
