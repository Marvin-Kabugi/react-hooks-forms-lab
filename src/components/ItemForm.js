import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [formInputs, setFormInputs] = useState({
    name: "",
    category: "Produce"
  });

  function handleFormChange(event){
    const key = event.target.name;
    
    setFormInputs({
      ...formInputs,
      [key]: event.target.value
    })
  }

  function handleSubmit(event){
    event.preventDefault();
    onItemFormSubmit({
      id: uuid(),
      name: formInputs.name,
      category: formInputs.category,
    })
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formInputs.name} onChange={handleFormChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleFormChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
