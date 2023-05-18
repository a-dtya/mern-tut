import React,{useEffect,useState} from 'react'
import { databases } from './appwrite-config'
import {v4 as uuidv4} from 'uuid'

function Todoform() {
    const [todo,setTodo] = useState("")
    const handleSubmit = ()=>{databases.createDocument("6465a1f120228e9beaf7",uuidv4(),{
        todo:todo
    }).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
    setTodo("")
    }
  return (
    <div className="flex items-center justify-center space-x-4">
      <label htmlFor="tuduInput" className="text-gray-800">
        Add Tudu
      </label>
      <input
        type="text"
        id="tuduInput"
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        className="border border-gray-400 px-3 py-2 rounded"
      />
      <button
        onClick={handleSubmit}
        className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </div>
  )
}

export default Todoform