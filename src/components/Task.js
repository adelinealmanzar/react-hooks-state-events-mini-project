import React from "react";

function Task({task, handleDelClick}) {
  // function handleDelClick(e) {
  //   e.target.parentNode.remove()
  // }
  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button onClick={handleDelClick} className="delete">X</button>
    </div>
  );
}

export default Task;
