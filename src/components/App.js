import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS);
  const [selectedCategory, setSelectedCategory] = useState("All")


  // taking state and filtering state for task matches the text that is deleted, take it out of state
  const handleDelete = (text) => {
    setTasks(tasks.filter(task => task.text !== text))  
  }

  const handleSelectedCategory= (category) => {
    setSelectedCategory(category)
  }
   
  const filteredTasks = tasks.filter(task => task.category === selectedCategory || selectedCategory === "All")


  const addNewTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} handleSelectedCategory={handleSelectedCategory}/>
      <NewTaskForm categories={CATEGORIES.filter(category => category !== "All")} addNewTask={addNewTask}/>
      <TaskList tasks={filteredTasks} handleDelete={handleDelete}/>
    </div>

  );
}

export default App;
