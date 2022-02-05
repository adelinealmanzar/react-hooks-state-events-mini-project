import React from "react";

function CategoryFilter({categories, setCurrentCategory, currentCategory, displayedFilteredtasks, setUpdatedTasks}) {
  const catBtnsDisplay = categories.map(category => {
    const className = currentCategory === category ? 'selected' : ''
    return (
      <button
        key={category}
        onClick={() => {
          setCurrentCategory(category)
          setUpdatedTasks(displayedFilteredtasks)}
        }
        className={className}
      >
        {category}
      </button>
    )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {catBtnsDisplay}
    </div>
  );
}

export default CategoryFilter;
