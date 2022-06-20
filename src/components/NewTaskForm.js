import React, {useState} from "react";

function NewTaskForm({ categories, onTaskFormSubmit}) {

  const [text, setText] = useState("") // using state to track, set when ever we make new form 
  const [category, setCategory] = useState("") // if changes at all from empty string, thenw e are tracking it 
  //need onChange for these inputs 

  const addNewTask = (e) => {
    e.preventDefault()
    onTaskFormSubmit({text, category})  // we can send it an object with text and category saved in state 
  }

  return (
    <form className="new-task-form" onSubmit={(e) => addNewTask (e)}>
      <label>
        Details
        <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)}/> 
      </label>
      <label>
        Category
        <select name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
          <option></option>
          {categories.map(category => (
            <option key={{category}}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
