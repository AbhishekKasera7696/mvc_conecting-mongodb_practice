const express = require('express');
const app = express();
const Connection = require("./database/mongodatabase.js");
const router=require("./routers/userRouter.js");
app.use(express.json())
app.use(router)

app.listen(9004,()=>{
    new Connection()
    console.log("server is initiated");
})