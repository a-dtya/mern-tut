import React,{useState} from "react";
import { Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { supabase } from "./supabaseConfig";
function App() {
  const [email,setEmail] = useState("")
  const [pass,setPass] = useState("")
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
      e.preventDefault()
      const {error} = await supabase.auth.signOut()
      if(!error){
        console.log("Success")
      }
      //console.log(data.user.id)
      //console.log(data.session.user.id)
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
    </Form>
    </div>
  );
}

export default App;
