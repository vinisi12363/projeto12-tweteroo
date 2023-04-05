import express from "express";


const user = []
const tweet = []
const port = 5000


const app = express()

app.use(express.json())


//routes

app.post("/sign-up",(req, res)=>{
    const {username , avatar} = req.body

    if (!username || !avatar)
    return res.status(400).json({error:"username ou avatar inválidos"})
    
    user.push({username:username , avatar:avatar})
    console.log("users:", user)
   res.status(201).json({message:"OK"})
})
app.post("/tweets",(req, res)=>{
    const {username , tweet} = req.body
    let notEncountered = user.filter(user.username!==username)
    if( notEncountered || !username)
    return res.status(401).json({error:"UNAUTHORIZED"})
   
    tweet.push({username:username, tweet:tweet})
    console.log("tweets", tweet)
    return res.status(201).json({message:"OK"})
 
})

// app.get("/tweets", (req, res)=>{
//     if(tweet.length > 0){
//         for(let i=9 ; i<tweet.length; i++){
//             res.send(
//                 {
                  
//                 }
//             )
//         }
//     }else{
//         res.send([])
//     }
// })

app.listen(port, () => 
console.log(`Servidor iniciado na porta ${port}`)
);