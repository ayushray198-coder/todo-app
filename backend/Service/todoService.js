import Todo from "../model/todo.js";

// ek baar me saare list laane ke liye 

export const getTodos = async () => {
    return await Todo.find()
}

//sigl koi bhi todo laane ke liye id ki help se 

export const getTodoById = async (id) =>{
    return await Todo.findById(id)
}

// new todo bnane ke liye 

export const createTodo = async (data) => {
    return await Todo.create(data)
}

// todo ko update krne ke liye

export const updateTodo = async (id,data) => {
    return await Todo.findByIdAndUpdate(id,data, {new:true})
}

//todo ko delete krne ke liye

export const deleteTodo = async (id) => {
    return await Todo.findByIdAndDelete(id)
}

// stutus updat krne ke liye 

export const updateStatus = async (id,status) => {
    return await Todo.findByIdAndUpdate(id,{status},{new:true})
}

// search fn ke liye

export const searchTodos = async (query) => {
    return await Todo.find({
        title:{
            $regex:query,
            $options: "i"
        }
    })
}