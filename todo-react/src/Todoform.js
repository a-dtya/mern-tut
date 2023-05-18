import React,{useEffect,useState} from 'react'
import { databases } from './appwrite-config'
import {v4 as uuidv4} from 'uuid'

function Todoform() {
    const [todo,seTodo] = useState("")
    databases.createDocument("6465a1f120228e9beaf7",uuidv4(),{
        todo:todo
    })
  return (
    <div>Todoform</div>
  )
}

export default Todoform