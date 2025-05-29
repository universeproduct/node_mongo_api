import express from 'express' // express
import dotenv from 'dotenv' // environment variables
import mongoose from 'mongoose' // database
import cors from 'cors' // cors policy
import authRoutes from '../routes/auth.js';
import protectedRoutes from '../routes/protected.js';

// =========================================== Import Package Ends here =============================

dotenv.config()
const app= express() 
app.use(express.json());
const portNo=process.env.PORT || 5000; // port number
// =========================================== Configuration Ends here =============================
app.use('/api/auth', authRoutes);
app.use('/api/protected', protectedRoutes);

//==============================================essential middleware=============================


app.get("/",(req,res)=>{ 
    res.send("Hello from express!")
}).listen(portNo,()=>{console.info(`Server Started in http://localhost:${portNo}/`)})
// =========================================== Server Startup Ends Here =============================


