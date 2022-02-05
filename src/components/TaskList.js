import React, { useState } from "react";
import Task from "./Task";

function TaskList({setUpdatedTasks, updatedTasks}) {


  function handleDelClick(e) {
    const tasksAfterDel = updatedTasks.filter(task => task.text !== e.target.previousSibling.textContent)
    setUpdatedTasks(tasksAfterDel)
  }

  const tasksToDisplay = updatedTasks.map(task => {
    return (<Task key={task.text} task={task} handleDelClick={handleDelClick}/>)
  })

  return (
    <div className="tasks">
      {tasksToDisplay}
    </div>
  );
}

export default TaskList;
