import { useContext } from "react";
import { TodoContext, type Todo } from "../contexts/TodoContext";

export default function TodoItem({ todo }: { todo: Todo }) {
  const { toggleTodo, deleteTodo } = useContext(TodoContext);

  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        onClick={() => toggleTodo(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {todo.text}
      </span>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => deleteTodo(todo.id)}
      >
        X
      </button>
    </li>
  );
}