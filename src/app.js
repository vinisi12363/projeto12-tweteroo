import express from "express";
import cors from "cors";

const users = []
const tweets = []
const port = 5000


const app = express()
app.use (cors())
app.use(express.json())


//routes

app.post("/sign-up",(req, res)=>{
    const {username , avatar} = req.body

    if (!username || !avatar)
    return res.status(400).json({error:"username ou avatar inválidos"})
    
    if( typeof username !== 'string' || typeof tweet !== 'string')
    return res.status(400).json({error:"username ou avatar inválidos"})
   
   
    users.push({username:username , avatar:avatar})
    console.log("users:", users)
   res.status(201).json({message:"OK"})
})

function addNewTweet(username, tweet){
    const photo=users.find(u=> u.username === username ).avatar;
    
    tweets.push ({username:username , tweet:tweet , avatar:photo})

}

app.post("/tweets",(req, res)=>{
  
    const {username , tweet} = req.body

    if (!username || !tweet)
    return res.status(400).json({error:"UNAUTHORIZED"})
    
    if (username === undefined || tweet ===undefined)
    return res.status(400).json({error:"UNAUTHORIZED"})


    if( typeof username !== 'string' || typeof tweet !== 'string')
    return res.status(400).json({error:"UNAUTHORIZED"})

    if (users.some(u=>u.username===username)){
        addNewTweet(username, tweet)
        res.status(201).json({message:"OK"})
    }else{
        return res.status(400).json({error:"UNAUTHORIZED"})
    }
   
      
})

app.get("/tweets", (req, res)=>{
    let user = req.params.username
    if(tweets.length === 0)
    return res.send([])

    if(user === undefined || user===[])
    return res.send([])

    res.send(tweets.slice(-10))
})

app.listen(port, () => 
console.log(`Servidor iniciado na porta ${port}`)
);