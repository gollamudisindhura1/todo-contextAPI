import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { FilterContext } from "../contexts/FilterContext";
import TodoItem from "./TodoItem";


// Displays todos based on active filter

export default function TodoList() {
  const { todos } = useContext(TodoContext);
  const { filter } = useContext(FilterContext);

  const filteredTodos = todos.filter(todo => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true;
  });

  if (filteredTodos.length === 0) {
    return <p className="text-muted">No todos yet.</p>;
  }

  return (
    <ul className="list-group">
      {filteredTodos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}