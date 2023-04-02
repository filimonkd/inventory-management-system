const express = require("express")
const mongoose = require("mongoose")
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT,SESSION_SECRET, REDIS_URL, REDIS_PORT }= require('./config/config')
const userRouter = require('./routes/userRoutes')
const redis = require('redis')
const session = require('express-session')
let RedisStore = require('connect-redis').default;
let redisClient= redis.createClient({
    host: REDIS_URL,
    port: REDIS_PORT
})

const app = express()
const mongoUrl = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

const connectWithRetry = () => {
    mongoose.connect(mongoUrl,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
        .then(
            () => console.log("connected")
        ).catch((err) => 
            {
                console.log(err)
                setTimeout(connectWithRetry,5000)
            }
        )
    
}


connectWithRetry();
const port = process.env.PORT || 3000;
app.use(session({
    store: new RedisStore({client: redisClient}),
       secret: 'secret',
       cookie:{
        secure: false,
        resave: false,
        saveuninitialized:false,
        httpOnly:true,
        maxAge: 30000
       }
}))

app.use(express.json())

//test api endpoint
app.get("/", (req, res) => {
    res.send("<h2>yeeeeeees Working!</h2>")
})

app.use("/api/v1/users",userRouter)


app.listen(port, () => console.log(`app is litsenning on port ${port}`))