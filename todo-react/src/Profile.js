import React,{useState,useEffect} from 'react'
import { account } from './appwrite-config'

function Profile() {
    const [userdetails,setUserdetails] = useState()
    useEffect(()=>{
        account.get().then((res)=>{
            setUserdetails(res)
        }).catch((err)=>{
            console.log("Error")
        }) 
    },[])
  return (
    <></>
  )
}

export default Profile