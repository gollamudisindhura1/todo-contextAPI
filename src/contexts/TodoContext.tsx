import { createContext, useState, type ReactNode } from "react";

// Type alias so this defines what one todo looks like

export type Todo = {
    id : number
    text: string
    completed: boolean
}

type TodoContextType = {
    todos: Todo[]
    addTodo: (text: string) => void
    toggleTodo: (id: number) => void
    deleteTodo: (id: number) => void
    clearCompleted: () => void
    editTodo: (id: number, newText: string) => void
}

// eslint-disable-next-line react-refresh/only-export-components
export const TodoContext = createContext<TodoContextType>({
    todos: [],
    addTodo: () =>{},
    toggleTodo: () => {},
    deleteTodo: () => {},
    clearCompleted: () =>{},
    editTodo: ()=>{}
})

export function TodoProvider({children}:{children: ReactNode}){
    const [todos, setTodos] = useState<Todo[]>([])

    // Add a new todo to the list

    const addTodo = (text:string)=>{
        setTodos(prev =>[...prev,
            {
                id: Date.now(),
                text,
                completed: false,
            },
        ])
    }
    // Toggles Completed. state of a todo by id 
    const toggleTodo = (id: number) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
        )
    }
    // Delete the todo which removes a todo from the list

    const deleteTodo = (id: number) => {
        setTodos(prev => prev.filter(todo => todo.id !== id))
    }

    // Removes all completed todos

    const clearCompleted = () =>{
        setTodos(prev => prev.filter(todo => !todo.completed))
    }
    // Edit todo
   const editTodo = (id: number, newText: string) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id
          ? { ...todo, text: newText }
          : todo
      )
    );
  };

    return (
        <TodoContext.Provider
      value={{ todos, addTodo, toggleTodo, deleteTodo, clearCompleted, editTodo }}
    >
      {children}
    </TodoContext.Provider>
  );
        
}

