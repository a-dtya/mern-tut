import React,{useState,useEffect} from 'react'
import { account } from './appwrite-config'
import { databases } from './appwrite-config'
import "./index.css"
function Todo() {
    const [todos,setTodos] = useState()
    useEffect(()=>{
        databases.listDocuments("6465a1e5c4ed1e82b0f5","6465a1f120228e9beaf7").then((res)=>{
            setTodos(res.documents)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    const handleDelete = async(id)=>{
        await databases.deleteDocument("6465a1e5c4ed1e82b0f5","6465a1f120228e9beaf7",id)
        window.location.reload()
    }
  return (
    <> {
        todos && todos.map((item)=>{
            return(
                <div key={item.$id} className="bg-white rounded shadow-md p-4 mx-auto max-w-xs sm:max-w-sm md:max-w-lg mb-2">
      <div className="flex items-center justify-between">
        <p  className="text-gray-800">{item.todo}</p>
        
      </div>

      <div className="flex items-center justify-between mt-2">
      <div>
        <input type="checkbox" className="form-checkbox" />
        <label className="ml-2 text-gray-700">Complete</label>
        </div>
        <button className="text-red-500 focus:outline-none" onClick={()=>handleDelete(item.$id)}>
        Delete
        </button>
      </div>
    </div>
            )
        })
    }
        
    </>
  )
}

export default Todo