import axios from 'axios'

const API = axios.create({
    baseURL:"https://todo-app-j7hw.onrender.com/api/todos"
})

// sare todos lane ke liye 

export const  getTodos = () => API.get("/")

// nya todo bnane ke liye
export const createTodo = (data) => API.post("/",data)

//todo delete krne ke liye 

export const deleteTodo = (id) => API.delete(`/${id}`) 

// todo update krne ke liye 

export const updateTodo = (id,data)=> API.put(`/${id}`,data)

// status update krne ke liye 

export const updateStatus = (id,status) => API.patch(`/status/${id}`, {status})