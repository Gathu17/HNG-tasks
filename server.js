const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors())

app.listen( process.env.PORT || 5000, () =>{
    console.log("Server is running")
 })

app.get('/', (req, res) =>{
    try{
        res.status(200).json({
            "slackUsername":"JerryG",
            "backend": true,
            "age": 24,
            "bio": "I'm a self-taught developer looking to break into tech. Javascript is my love language."
        })
    }catch(error){
        res.status(500).json(error)
    }
})

app.post('/', (req,res) => {
  
    try{
    let result = 0
    switch(req.body.operation_type){
        case "addition":
        result = req.body.x + req.body.y 
        break;
        case "subtraction":
        result = req.body.x - req.body.y 
        break;
        case "multiplication":
        result = req.body.x * req.body.y 
        break;
        default: 
        result = 0
    }
    res.status(200).json({
        "slackUsername":"JerryG",
        "result": result,
        "operation_type": req.body.operation_type
    })
}catch(error){
    res.status(500).json(error)
}
})