import { useState, useEffect } from "react";
import AddForm from "./AddForm.jsx";
import TodoList from "./TodoList.jsx";
import FilterBar from './FilterBar';
import "./assets/css/style.css";

export default function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function addTodo(title, description, dueDate) {
    const newTodo = { title, description, dueDate, completed: false };
    const updatedTodos = todos.concat(newTodo);
    setTodos(updatedTodos);
  }

  function handleUpdateTodo(title, description, dueDate) {
    setTodos(
      todos.map(function(todo) {
        if (todo.title == title) {
          return { title, description, dueDate, completed: todo.completed };
        } else {
          return todo;
        }
      })
    );
  }

  function handleDeleteTodo(title) {
    setTodos(todos.filter(function (todo) {
      return todo.title !== title;
    }));
  }

  function handleCompleteTodo(title) {
    setTodos(
      todos.map(function(todo) {
        if (todo.title == title) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      })
    );
  }

  function filterTodos(todo) {
    if (filter == "active") return !todo.completed;
    if (filter == "completed") return todo.completed;
    return true;
  }

  const filteredTodos = todos.filter(filterTodos);

  return (
    <>
      <AddForm onAddTodo={addTodo} />
      <FilterBar onFilterChange={setFilter} />
      <TodoList
        todos={filteredTodos}
        onUpdate={handleUpdateTodo}
        onDelete={handleDeleteTodo}
        onComplete={handleCompleteTodo}
      />
    </>
  );
}
