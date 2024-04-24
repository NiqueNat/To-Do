import React from "react";
import Todo from "./Todo.jsx";

export default function TodoList({ todos, onUpdate, onDelete, onComplete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Todo</th>
          <th>Due Date</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <tr key={`${todo.title}-${todo.dueDate}`}>
            <td>
              <Todo
                title={todo.title}
                description={todo.description}
                dueDate={todo.dueDate}
                onUpdate={onUpdate}
                onDelete={() => onDelete(todo.title)}
                onComplete={() => onComplete(todo.title)}
              />
            </td>
            <td>{todo.dueDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
