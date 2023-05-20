import React,{useState,useEffect} from 'react'
import { account } from './appwrite-config'
import { databases } from './appwrite-config'
function Todo() {
    const [todos,setTodos] = useState()
    useEffect(()=>{
        databases.listDocuments("6465a1f120228e9beaf7").then((res)=>{
            setTodos(res.documents)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
  return (
    <></>
  )
}

export default Todo