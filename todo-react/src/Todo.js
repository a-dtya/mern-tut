import React,{useState,useEffect} from 'react'
import { account } from './appwrite-config'
import { databases } from './appwrite-config'
import "./index.css"
function Todo() {
    const [todos,setTodos] = useState()
    useEffect(()=>{
        databases.listDocuments("6465a1f120228e9beaf7").then((res)=>{
            setTodos(res.documents)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    const handleDelete = async(id)=>{
        await databases.deleteDocument("6465a1f120228e9beaf7",id)
    }
  return (
    <>
        <div className="bg-white rounded shadow-md p-4 mx-auto max-w-xs sm:max-w-sm md:max-w-lg">
      <div className="flex items-center justify-between">
        <p className="text-gray-800">Sample Text</p>
        
      </div>

      <div className="flex items-center justify-between mt-2">
      <div>
        <input type="checkbox" className="form-checkbox" />
        <label className="ml-2 text-gray-700">Complete</label>
        </div>
        <button className="text-red-500 focus:outline-none">
        Delete
        </button>
      </div>
    </div>
    </>
  )
}

export default Todo