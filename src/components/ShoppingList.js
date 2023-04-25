import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onAddItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('');

  function handleCategoryChange(event) {
    console.log(event.target.value);
    setSelectedCategory(event.target.value);
  }

  function handleSearchValueChange(event){
    console.log(event.target.value);
    setSearch(event.target.value)
  }

  const searchItems = items.filter(item => {
    console.log(item.name.toLowerCase())
    return item.name.toLowerCase().includes(search.toLowerCase())
  });

  const itemsToDisplay = searchItems.filter((item) => {
    if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onAddItem} />
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchValueChange} search={search} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
