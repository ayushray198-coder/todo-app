import React, { useEffect, useState } from 'react'
import {getTodos, createTodo,deleteTodo,updateStatus,updateTodo} from "../api/todoApi.js"
import AddTodo from '../components/AddTodos.jsx'
import TodoItem from '../components/todoItem.jsx'

const todoPages = () => {
    const [todos,setTodos] = useState([])
    const [search, setSearch] = useState("")


    //database se todo load kene liye fn
    const loadTodos = async () => {
        const res = await getTodos()
        setTodos(res.data)
    }
    useEffect(()=>{
        loadTodos()
    },[])

    //new todo add krne ke liye 
    const addTodo =async (title)=>{

        await createTodo({title})
        
        loadTodos()
    }

    //todo delete krne ke liye

    const todoDelete =async(id)=>{
        await deleteTodo(id)

        loadTodos()
    }

   const updateTodoTitle = async (id,title) =>{
    await updateTodo(id, {title})
    loadTodos()

   }

    // toggle status ke liye 

    const toggleStatus =async(todo) =>{
        const newStatus =
        todo.status === "completed"
        ? "pending"
        : "completed"

        await updateStatus(todo._id, newStatus)

        loadTodos()
    }

    // search filter ke liye 

    const filteredTodos = todos.filter((todo)=> todo.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className='min-h-screen bg-gray-700 flex justify-center p-10'>
        
        <div className='w-full max-w-xl bg-gray-800 p-6 rounded-2xl shadow-lg'>

            <h1 className='text-3xl font-bold text-center text-white mb-6'>
                Todo App
            </h1>

            <input type="text"
            placeholder='Search here...'
            onChange={(e)=> setSearch(e.target.value)}
            className='w-full p-3 border rounde-xl mb-4 '
             />

             <AddTodo onAdd={addTodo}/>

             <div className='space-y-3'>
                {filteredTodos.map((todo) => (
                    <TodoItem 
                     onToggle={toggleStatus}
                    key={todo._id}
                    todo={todo}
                    onDelete={todoDelete}
                    onUpdate={updateTodoTitle}/>
                ))}
             </div>
        </div>
    </div>
  )
}

export default todoPages