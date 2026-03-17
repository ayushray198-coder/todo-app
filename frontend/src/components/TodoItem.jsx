import React, { useState } from 'react'

const todoItem = ({todo, onDelete, onToggle, onUpdate}) => {

    const [isEditing,setIsEditing] = useState(false)
    const [newTitle, setTitle] = useState(todo.title)

    const handleUpdate =() => {
        if (!newTitle.trim()) return
        onUpdate(todo._id,newTitle)
        setIsEditing(false)
    }

  return (
    <div className=' bg-gray-600 p-4 rounded-xl flex justify-between items-center  shadow'>
        <div className='flex items-center gap-3'>

            <input type="checkbox"
            checked={todo.status === "completed"}
            onChange={()=> onToggle(todo)}
            className='w-5 h-5 ' />

            {isEditing ? (
                <input type="text"
                 value={newTitle}
                 onChange={(e) => setTitle(e.target.value)}
                 className='border p-2 rounded' />
            ):(
                <h3 className={`font-semibold ${
                    todo.status === "completed"
                    ? "line-through text-gray-400": ""
                }`}> 
                {todo.title}
                </h3>
            )} 

          
            </div>
              <div className='flex gap-2'>
                
                {isEditing ? (
                    <button onClick={handleUpdate}
                    className='bg-blue-500 text-white px-3 py-1 rounded '>
                        save
                    </button>
                ):(
                    <button onClick={()=> setIsEditing(true)}
                    className='bg-yellow-500 text-white px-3 py-1 rounded '>Edit
                    </button>
                )}

                <button onClick={()=> onDelete(todo._id)}
                    className='bg-red-500 text-white px-3 py-1 rounded'>
                    delete
                </button>
        </div>
    </div>
  )
}

export default todoItem