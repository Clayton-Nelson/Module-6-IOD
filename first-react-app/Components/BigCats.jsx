import React from 'react';
import SingleCat from './SingleCat';


const BigCats = ({ cats }) => {
  return (
    <div className="cat-list">
      {cats.map((cat) => (
        <SingleCat key={cat.id} cat={cat} />
      ))}
    </div>
  );
};

export default BigCats;
