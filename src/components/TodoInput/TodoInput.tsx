import { useContext, useState } from "react"
import { TodoContext } from "../../contexts/TodoContext"
import "./TodoInput.css";


// To add a new todo
export default function TodoInput (){
    const {addTodo} = useContext(TodoContext)
    const [text, setText] = useState("")
    const handleAdd = () => {
        if(!text.trim()) return
        addTodo(text)
        setText("")
    }
    return(
        <div className="todo-input">
            <input value = {text} onChange = {e => setText(e.target.value)} placeholder="What needs to be done"/> 
            <button className="bt btn-primary" onClick={handleAdd}>Add Todo </button>
        </div>
    )
}