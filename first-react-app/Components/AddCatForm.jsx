import React from "react";
import { useState } from "react";

const AddCatForm = ({ onAddCat }) => {
  const [newCat, setNewCat] = useState({
    name: "",
    latinName: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCat((prevCat) => ({
      ...prevCat,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddCat(newCat);

    setNewCat({
      name: "",
      latinName: "",
      image: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={newCat.name}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Latin Name:
        <input
          type="text"
          name="latinName"
          value={newCat.latinName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Image URL:
        <input
          type="text"
          name="image"
          value={newCat.image}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Add Cat</button>
    </form>
  );
};

export default AddCatForm;
