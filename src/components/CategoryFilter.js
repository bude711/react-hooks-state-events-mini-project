import React from "react";

function CategoryFilter({categories, handleCategorySelect, selectedCategory}) {
  const buttonElements = categories.map(category=>{

    return(
       <button 
        className={category === selectedCategory ? "selected" : null}
        key={category} 
        onClick={()=> handleCategorySelect(category)} >
          {category}
        </button>)
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttonElements}
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
