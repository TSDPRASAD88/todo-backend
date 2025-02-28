const express = require("express");

  const app  = express();

  app.use(express.json());

  const dotenv = require("dotenv");
    dotenv.config();

const cors = require("cors");

app.use(cors());

let todos = [
    {
        title: "Buying grocweries",
        status : false
    }
]

app.get("/", (request, response)=>{
    try {
        response.status(200).send({msg: "This is todo backend"})

    } catch(error) {
        response.status(500).send({msg: "error occured", error})
    }
})

app.get("/get-todos", ()=>{
    try {
        response.status(200).send({msg:"Connected successfully"})

    } catch(error) {
        response.status(500).send({msg: "error occured", error})
    }
})

app.post("/add-todo",(request,response)=>{  
    try{
        const {title,status} = request.body;
        todos.push({title,status});
        if(title == ""){
            response.status(400).send({msg:"title is required"});
        }

        const newTodo = {
            title : title,
            status : status
        }

        todos.push(newTodo);
        
        response.status(200).send({msg:"todo added successfully",todos:todos});
    }catch(error){
        response.status(500).send({msg:"error occured",error});
    }
})


app.listen(8000, ()=>{
    console.log("connected to server successfully");
})