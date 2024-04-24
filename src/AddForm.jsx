import { useState } from "react";

export default function AddForm({ onAddTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  function handleClick(event) {
    event.preventDefault();
    onAddTodo(title, description, dueDate);
    setTitle("");
    setDescription("");
    setDueDate("");
  }

  return (
    <form>
      <label htmlFor="todoInput">Todo:</label>
      <input
        type="text"
        id="todoInput"
        placeholder="Add new To-Do"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="descriptionInput">Description:</label>
      <input
        type="text"
        id="descriptionInput"
        placeholder="Add description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <label htmlFor="dueDateInput">Due Date:</label>
      <input
        type="date"
        id="dueDateInput"
        placeholder="When Is it due?"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button type="button" onClick={handleClick}>
        Add
      </button>
    </form>
  );
}
