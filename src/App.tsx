import { useContext } from "react";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import FilterButtons from "./components/FilterButtons/FilterButtons";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import { ThemeContext } from "./contexts/ThemeContext";
import "./app.css";


export default function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`app-container ${
        theme === "dark" ? "app-dark" : "app-light"
      }`}
    >
      <h2 >Todo App (Context + useState)</h2>
      <ThemeToggle />
      <TodoInput />
      <FilterButtons />
      <TodoList />
    </div>
  );
}
