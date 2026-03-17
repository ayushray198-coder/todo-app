import { ReturnDocument } from "mongodb";
import {getTodos,getTodoById,createTodo,deleteTodo,updateStatus,searchTodos,updateTodo} from "../Service/todoService.js"

// for all todos ke liye 

export const getTodosController = async(req,res) =>{
    try {
        const todos = await getTodos()
        console.log("fetching all todo");

        res.json(todos)
        
        
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

// get todo by id 

export const getTodoByIdController = async(req,res)=>{
    try {
        const todo = await getTodoById(
            req.params.id
        )
        if(!todo){
            return res.status(404).json({message:"todo not found"})
        } 
        res.json(todo)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


//new todo create krne ke liye

export const createTodoController = async(req,res)=>{
    try {
        const {title} = req.body
        //agar title empty ho to
        if(!title){
            return res.status(400).json({message:"Title is required"})
        }
        const todo = await createTodo({title})

        res.status(201).json(todo)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

// todo ko update krne ke liye
export const updateTodoController =async(req,res) => {
    try {
        const  todo = await updateTodo(
            req.params.id,
            req.body,
            {ReturnDocument: "after"}
        )

        if(!todo){
            return res.status(404).json({message: "todo not found"})
        }
        res.json(todo)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

// todo ko delete krne ke liye 

export const deleteTodoController = async(req,res)=>{
    try {
        await deleteTodo(req.params.id)
    res.json({message:"Todo deleted Successfully"})
    } catch(error){
        res.status(500).json({message:error.message})
    }
}

// update todo status ke liye

export const updateStatusController = async(req,res) => {
    try {
        const {status} = req.body
        const todo = await updateStatus(req.params.id,status)
        res.json(todo)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

// todo search krne ke liye 

export const searchTodosController = async (req,res) => {
    try {
        const todo =await searchTodos(req.query.q)
        res.json(todo)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}