import { useContext } from "react";
import { TodoContext, type Todo } from "../../contexts/TodoContext";
import "./TodoItem.css";

export default function TodoItem({ todo }: { todo: Todo }) {
  const { toggleTodo, deleteTodo } = useContext(TodoContext);

  return (
    <div className="todo-item">
      <span
        onClick={() => toggleTodo(todo.id)}>
        {todo.text}
      </span>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => deleteTodo(todo.id)}
      >
        X
      </button>
    </div>
  );
}