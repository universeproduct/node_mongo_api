import express from 'express' // express
import dotenv from 'dotenv' // environment variables
import mongoose from 'mongoose' // database
import cors from 'cors' // cors policy

// =========================================== Import Package Ends here =============================

dotenv.config()
const app= express() 
const portNo=process.env.PORT // port number

// =========================================== Configuration Ends here =============================

app.get("/",(req,res)=>{ 
    res.send("Hello from express!")
}).listen(portNo,()=>{console.info(`Server Started in http://localhost:${portNo}/`)})
// =========================================== Server Startup Ends Here =============================
