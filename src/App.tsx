import { useContext } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import FilterButtons from "./components/FilterButtons";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeContext } from "./contexts/ThemeContext";

export default function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`container mt-5 ${
        theme === "dark" ? "bg-dark text-light" : ""
      }`}
    >
      <h2 className="mb-3">Todo App (Context + useState)</h2>
      <ThemeToggle />
      <TodoInput />
      <FilterButtons />
      <TodoList />
    </div>
  );
}
