import React from "react";

const ShowTodos = props => {
  console.log("YOYOY", props);
  return (
    <ul>
      {props.list.map(list => {
        return <li key={list.id}>{list.name}</li>;
      })}
    </ul>
  );
};
export default ShowTodos;
