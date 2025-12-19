import { useContext } from "react";
import { ThemeContext} from "../contexts/ThemeContext"

// Switches between light and dark themes

export default function ThemeToggle(){
    const {theme, toggleTheme} = useContext(ThemeContext)

    return (
        <button className="btn btn-secondary mb-3" onClick={toggleTheme}>
      Switch to {theme === "light" ? "Dark" : "Light"}
    </button>
    )
}