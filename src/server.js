const express = require("express");
require("./config/configs")
const app = express();




app.use(express.json());



app.get("/", (req,res) =>{
    res.json({quale:"quale"})
})



app.post("/", (req,res) =>{
    
    res.json(req.body)
})






app.listen(process.env.PORT, ()=>{
    console.log("quale")
})