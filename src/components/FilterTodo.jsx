import React from "react";

const filterBtn = {
  border: "1px solid #000",
  padding: "1px 2px 2px",
  margin: "10px 3px",
  cursor: "pointer"
};
const FilterTodo = () => {
  return (
    <div>
      <span>Show:</span>
      <span style={filterBtn}>All</span>
      <span style={filterBtn}>Active</span>
      <span style={filterBtn}>Completed</span>
    </div>
  );
};
export default FilterTodo;
