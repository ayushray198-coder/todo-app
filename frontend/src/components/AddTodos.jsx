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
        className='className=" w-full p-3 rounded-xl bg-gray-700 text-white border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"' />

        <button className='bg-blue-600 text-white px-6 rounded-xl hover:bg-blue-400 '
        onClick={handlerAdd}>Add</button>
    </div>
  )
}

export default AddTodo