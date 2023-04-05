import express from "express";
import user from "../user.js";
import tweet from "../tweet.js";

const port = 5000

const app = express()

app.use(express.json())


//routes

app.post("/sign-up",(req, res)=>{
    const {username , avatar} = req.body

    if (!username || !avatar)
    return res.send ("username ou avatar inválidos")
    

    user.push({username:username , avatar:avatar})
    res.send("OK")
})
app.post("/tweets",(req, res)=>{
    if(user.includes(req.body.name)){
        tweet.push(req.body.tweet)
        res.send ("OK")
    }else{
        res.send("UNAUTHORIZED")
    }
})

app.get("/tweets", (req, res)=>{
    if(tweet.length > 0){
        for(let i=9 ; i<tweet.length; i++){
            res.send(
                {
                  
                }
            )
        }
    }else{
        res.send([])
    }
})

app.listen(port, () => 
console.log('Servidor iniciado na porta 3000')
);