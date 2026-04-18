import React, { useEffect, useState } from 'react'
import { getTodos, createTodo, deleteTodo, updateStatus, updateTodo } from "../api/todoApi.js"
import AddTodo from '../components/AddTodos.jsx'
import TodoItem from '../components/TodoItem.jsx'

const todoPages = () => {
    const [todos, setTodos] = useState([])
    const [search, setSearch] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")


    //database se todo load kene liye fn
    const loadTodos = async () => {

        //     

        try {
            setLoading(true)
            setError("")

            const res = await getTodos()
            setTodos(res.data)

        } catch (error) {
            setError("Failed to load Todos ")

        } finally {
            setLoading(false)
        }

    }

    
    useEffect(() => {
        loadTodos()
    }, [])

    //new todo add krne ke liye 
    const addTodo = async (title) => {
        try {

            setLoading(true)
            await createTodo({ title })
            loadTodos()

        } catch {

            setError("failed to add todo")

        } finally {

            setLoading(false)
        }
    }

    //todo delete krne ke liye

    const todoDelete = async (id) => {
        try {

            setLoading(true)
            await deleteTodo(id)
            loadTodos()
        } catch {
            setError("Delete failed")
        } finally {
            setLoading(false)
        }
    }

    const updateTodoTitle = async (id, title) => {
        try {

            setLoading(true)
            await updateTodo(id, { title })
            loadTodos()

        } catch {

            setError("Update failed")

        } finally {

            setLoading(false)

        }
    }

    // toggle status ke liye 

    const toggleStatus = async (todo) => {

        try {
            setLoading(true)
            const newStatus =
                todo.status === "completed"
                    ? "pending"
                    : "completed"

            await updateStatus(todo._id, newStatus)

            loadTodos()
        } catch {
            setError("Status update failed")

        } finally {

            setLoading(false)

        }
    }

    // search filter ke liye 

    const filteredTodos = todos.filter((todo) => todo.title.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className='min-h-screen bg-gray-700 flex justify-center p-10'>

            <div className='w-full max-w-xl bg-gray-800 p-6 rounded-2xl shadow-lg'>

                <h1 className='text-3xl font-bold text-center text-white mb-6'>
                    Todo App
                </h1>

                {loading && (
                    <p className="text-center text-blue-400 mb-3">
                        ⏳ Loading...
                    </p>
                )}


                {error && (
                    <p className="text-center text-red-400 mb-3">
                        {error}
                    </p>
                )}



                <input type="text"
                    placeholder='Search here...'
                    onChange={(e) => setSearch(e.target.value)}
                    className='w-full p-3 rounded-xl mb-4 bg-gray-700 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />

                <AddTodo onAdd={addTodo} />

                <div className='space-y-3'>
                    {filteredTodos.map((todo) => (
                        <TodoItem
                            onToggle={toggleStatus}
                            key={todo._id}
                            todo={todo}
                            onDelete={todoDelete}
                            onUpdate={updateTodoTitle} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default todoPages