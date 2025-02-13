import React from "react";
import Task from "./Task";


function TaskList({tasks, handleTaskDelete}) {
  const tasksArray = tasks.map((task) =>{
    return <Task 
      key={task.text} 
      text={task.text} 
      category={task.category}
      handleTaskDelete={handleTaskDelete}
      />
  });
  
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasksArray}
    </div>
  );
}

export default TaskList;
