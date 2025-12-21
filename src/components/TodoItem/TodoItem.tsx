import { useContext, useState } from "react";
import { TodoContext, type Todo } from "../../contexts/TodoContext";
import "./TodoItem.css";

export default function TodoItem({ todo }: { todo: Todo }) {
  const { toggleTodo, deleteTodo, editTodo } = useContext(TodoContext);

  // Tracks if this todo is being edited
  const [isEditing, setIsEditing] = useState(false);

  // Stores temporary edited text
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    if (!editText.trim()) return;
    editTodo(todo.id, editText);
    setIsEditing(false);
  };


  return (
   <div className="todo-item">
      {isEditing ? (
        <>
          <input
            value={editText}
            onChange={e => setEditText(e.target.value)}
          />
          <button className="btn btn-sm btn-success" onClick={handleSave}>
            Save
          </button>
          <button
            className="btn btn-sm btn-secondary"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <span
            className={`todo-text ${todo.completed ? "completed" : ""}`}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </span>

          <div>
            <button
              className="btn btn-sm btn-warning me-2"
              onClick={() => setIsEditing(true)}
            >
              ✍️
            </button>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => deleteTodo(todo.id)}
            >
             🗑️
            </button>
          </div>
        </>
      )}
    </div>
  );
}