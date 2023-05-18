import React,{useState,useEffect} from 'react'
import { account } from './appwrite-config'
import { useNavigate } from 'react-router-dom'
import "./index.css"
function Profile() {
    const [userdetails,setUserdetails] = useState()
    useEffect(()=>{
        account.get().then((res)=>{
            setUserdetails(res)
            
        }).catch((err)=>{
            console.log("Error")
        }) 
    },[])

    const navigate = useNavigate()
    const handleLogout = async()=>{
        try {
            await account.deleteSession("current")
            navigate("/")
        } catch (error) {
            
        }
    }
    const handleDetails = ()=>{
        console.log(userdetails)
    }
  return (
    <>
        <div>
            <div>
                {userdetails ? (<div className='ml-4 mt-32 sm:mt-6'>Hello {userdetails.email} </div>) : (<div> Bye</div>)
                 
                }
            </div>
            <div>
                <button onClick={handleLogout} className='text-sm bg-gray-400 border-2 border-black px-3 py-1 mt-4 rounded-sm ml-4 hover:bg-violet-500 hover:text-white'>
                Logout
                </button>
            </div>
        </div>
    </>
  )
}

export default Profile