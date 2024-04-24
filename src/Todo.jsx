import { useState } from "react";
import Button from "./Button.jsx";

export default function Todo({
  title,
  description,
  dueDate,
  onUpdate,
  onDelete,
  onComplete,
}) {
  const [newDescription, setNewDescription] = useState(description);
  const [newDueDate, setNewDueDate] = useState(dueDate);
  const [isUpdating, setIsUpdating] = useState(false);

  let content;

  if (isUpdating) {
    content = (
      <>
        <input
          type="text"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />
        <input
          type="date"
          value={newDueDate}
          onChange={(e) => setNewDueDate(e.target.value)}
        />
        <button
          onClick={() => {
            onUpdate(title, newDescription, newDueDate);
            setIsUpdating(false);
          }}
        >
          Save
        </button>
      </>
    );
  } else {
    content = (
      <>
        <Button className="update" onClick={() => setIsUpdating(true)}>
          Update
        </Button>
        <Button className="delete" onClick={() => onDelete(title)}>
          Delete
        </Button>
        <Button onClick={() => onComplete(title)}>Complete</Button>
      </>
    );
  }

  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>
      {content}
    </article>
  );
}
