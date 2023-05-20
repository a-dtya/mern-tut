import React,{useEffect,useState} from 'react'
import { databases } from './appwrite-config'

import {v4 as uuidv4} from 'uuid'

function Todoform() {
    const [todo,setTodo] = useState("")
    const handleSubmit = ()=>{databases.createDocument("6465a1e5c4ed1e82b0f5","6465a1f120228e9beaf7",uuidv4(),{
        todo:todo
    }).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
    setTodo("")
    window.location.reload()
    }
  return (
    <div className="flex flex-wrap space-x-0.5 mt-2 space-y-0.5 sm:flex items-center justify-center sm:space-x-4">
      <label htmlFor="tuduInput" className=" text-xs sm:text-gray-800 sm:text-lg">
        Add Tudu
      </label>
      <input
        type="text"
        id="tuduInput"
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        className=" h-2.5 border border-gray-400 px-3 py-2 rounded sm:h-8"
      />
      <button
        onClick={handleSubmit}
        className="h-6 sm:h-8 text-xs sm:text-lg bg-violet-500 hover:bg-violet-600 text-white  px-1 sm:px-4 py-1  rounded"
      >
        Add
      </button>
    </div>
  )
}

export default Todoform