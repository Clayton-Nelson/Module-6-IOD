import React from 'react';

const SingleCat = ({ cat }) => {
  return (
    <div className="cat-item" key={cat.id}>
      <p>{cat.name}, {cat.latinName}</p>
      <img src={cat.image} alt={cat.name}/>
    </div>
  );
};

export default SingleCat;
