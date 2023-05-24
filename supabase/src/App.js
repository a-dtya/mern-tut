import React,{useState} from "react";
import { Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { supabase } from "./supabaseConfig";
function App() {
  const [email,setEmail] = useState("")
  const [pass,setPass] = useState("")
  const [tudu,setTudu] = useState({
    todo:"",
    user:""
  })
  const [id,setId] = useState("")
  const handleClick = async(e)=>{
    e.preventDefault()
    const {data,error} = await supabase.auth.signUp({
      email:email,
      password:pass
    })
    if(data){
      console.log(data)
    }else{
      console.log(error)
    }
  }
  const handleSignIN = async(e)=>{
    e.preventDefault()
    console.log(email)
    console.log(pass)
    const {data,error} = await supabase.auth.signInWithPassword({
      email:email,
      password:pass
    })
    if(data){
      console.log(data)
    }else{
      console.log(error)
    }
  }
  const handleSignOUT = async(e)=>{

    const {data,error} = await supabase.from('tudus').select('todo')
    console.log(data)
      /*e.preventDefault()
      const {error} = await supabase.auth.signOut()
      if(!error){
        console.log("Success")
      }*/
      //console.log(data.user.id)
      //console.log(data.session.user.id)
  }
  const handleTudu = (e)=>{
    const val = e.target.value
    setTudu(prev=>({...prev,todo:val}))
  }
  const handleCreate = async()=>{
    const {data,error} = await supabase.auth.getUser()
    console.log(data)
    console.log(data.user)
    console.log(data.user.id)
    const userid = (data.user.id).toString()
    setTudu(prev=>({...prev,user:userid}))
    console.log(tudu)
    if(userid.length>0){
      await supabase.from("tudus").insert({
        todo:tudu.todo,
        userid:userid
      }).single()
    }
    
    
  }

  const handleSout = async()=>{
    const {error} = await supabase.auth.signOut()
  }
  return (
    <div style={{display:"flex", alignItems:"center", justifyContent:"center", marginTop:"4rem"}}>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={pass} onChange={(e)=>setPass(e.target.value)} />
      </Form.Group>
     
      <Button variant="primary" type="submit" onClick={handleClick}>
        Submit
      </Button>
      <Button variant="secondary" onClick={handleSignIN} style={{marginInline:"0.5rem"}}>SignIn</Button>
      <Button variant="danger" onClick={handleSignOUT}>SignOut</Button>
      <Form.Group className="mt-2">
        <Form.Label>Tudu</Form.Label>
        <Form.Control type="text" placeholder="Add Tudu" value={tudu.todo} onChange={handleTudu}></Form.Control>
      </Form.Group>
      <div style={{display:"flex", columnGap:"0.5rem"}}>
      <Button variant="warning" className="mt-1" onClick={handleCreate}>Create</Button>
      <Button variant="success" className=" mt-1" onClick={handleSout}>Out</Button>
      </div>
    </Form>
    </div>
  );
}

export default App;
