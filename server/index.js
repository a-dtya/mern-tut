const express = require('express')
const app = express()
const mongoose = require('mongoose')
const UserModel = require('./models/Users')
app.use(express.json())
const cors = require('cors')
app.use(cors())
mongoose.connect("mongodb+srv://admin:admin123@cluster0.kjrrtsk.mongodb.net/merntut?retryWrites=true&w=majority")

app.get("/getusers",(req,res)=>{
    UserModel.find({}).then((result)=>{
        res.json(result)
    })
})    
app.post("/createuser",(req,res)=>{
    const user = req.body
    const newUserModel = new UserModel(user)
    newUserModel.save().then(()=>{
        res.json(user)
    })
    
})
app.put("/updateuser",(req,res)=>{
    const value = req.body
    UserModel.findOneAndUpdate({name:"Adithya V"},value,{
        returnOriginal: false
    }).then((result)=>{
        res.json(result)
    })
    
})
app.delete("/deleteuser",(req,res)=>{
    UserModel.findOneAndDelete({name:"Adithya V"}).then(()=>{
        res.send("Record deleted")
    }).catch((err)=>{
        res.send(err.message)
    })
})

app.listen(3001, ()=>{
    console.log("Server Started")
})