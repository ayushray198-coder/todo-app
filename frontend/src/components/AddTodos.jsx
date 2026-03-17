import React, { useState } from 'react'

const AddTodo = ({onAdd}) => {

    const [title, setTitle] = useState("")

    const handlerAdd =() => {

       if(!title.trim()) return

        onAdd(title)

        setTitle("")
    }
  return (
    <div className='flex gap-3 mb-6 '>
        <input type="text" 
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        placeholder='Enter new Task'
        className='flex-1 p-3 border rounded-xl' />

        <button className='bg-blue-600 text-white px-6 rounded-xl hover:bg-blue-400 '
        onClick={handlerAdd}>Add</button>
    </div>
  )
}

export default AddTodo