const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const dotenv=require("dotenv")
const bodyParser = require("body-parser")
dotenv.config()
const app=express()
app.use(cors())
app.use(bodyParser.json())
const {Schema}=mongoose
const cardSchema=new Schema(
    {
        name:{
            type:String
        },
        title:{
            type:String
        }

}
)
const DB=process.env.DB_URL
mongoose.connect(DB)
const Finally=mongoose.model("final",cardSchema)
//GET
app.get("/users",async(req,res)=>{
    const users=await Finally.find({})
    res.send(users)
})
//Post
app.post("/users",async(req,res)=>{
    const reqBody=req.body
    const posted=await new Finally(reqBody)
    posted.save()
    res.send(posted)
})
//DELETE
app.delete("/users/:id",async(req,res)=>{
    const getId=req.params.id
    const deleted=await Finally.findByIdAndDelete(getId)
    res.send(deleted)
})
app.get("/users/:id",async(req,res)=>{
    const getId=req.params.id
    const users=await Finally.findById(getId)
    res.send(users)
})
const Port=process.env.PORT 
app.listen(Port,()=>{
    console.log(`Server is up ${Port}`);
})