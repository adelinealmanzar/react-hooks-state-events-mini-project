import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [currentCategory, setCurrentCategory] = useState('All')
  const [updatedTasks, setUpdatedTasks] = useState(TASKS)

  const displayFilteredTasks = TASKS.filter(task => {
    if (currentCategory === 'All') {
      return true 
    } else if (task.category === currentCategory) {
      return true
    }
  })
  // TODO: come back to figure out why filter is showing previous category clicked


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        setUpdatedTasks={setUpdatedTasks}
        displayedFilteredtasks={displayFilteredTasks}
      />
      <NewTaskForm />
      <TaskList setUpdatedTasks={setUpdatedTasks} updatedTasks={updatedTasks}/>
    </div>
  );
}

export default App;
