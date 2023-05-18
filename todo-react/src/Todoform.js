import React,{useEffect,useState} from 'react'
import { databases } from './appwrite-config'
import {v4 as uuidv4} from 'uuid'

function Todoform() {
    const [todo,seTodo] = useState("")
    const handleSubmit = ()=>{databases.createDocument("6465a1f120228e9beaf7",uuidv4(),{
        todo:todo
    }).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
    seTodo("")
    }
  return (
    <div>Todoform</div>
  )
}

export default Todoform