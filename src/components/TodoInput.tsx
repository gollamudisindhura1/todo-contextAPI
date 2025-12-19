import { useContext, useState } from "react"
import { TodoContext } from "../contexts/TodoContext"


// To add a new todo
export default function TodoInput (){
    const {addTodo} = useContext(TodoContext)
    const [text, setText] = useState("")
    const add = () => {
        if(!text.trim()) return
        addTodo(text)
        setText("")
    }
    return(
        <div className="input-group mb-3">
            <input className="form-control" value = {text} onChange = {e => setText(e.target.value)} placeholder="What needs to be done"/> 
            <button className="bt btn-primary" onClick={add}>Add Todo </button>
        </div>
    )
}