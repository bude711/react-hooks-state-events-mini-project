import React from "react";

function Task({text, category, handleTaskDelete}) {
  // function handleClickDelete(){
  //   handleTaskDelete(text)
  // }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button 
      onClick={()=> handleTaskDelete(text)} 
      className="delete">X</button>
    </div>
  );
}

export default Task;
