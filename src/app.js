import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import userRoutes from './routes/userRoutes.js';
import connectDB from './config/database.js';

const app = express();
connectDB();
app.get("/home",(req,res)=>{
    res.json("Home page")

})
app.use(cors())
app.use(bodyParser.json());
app.use('/api/users', userRoutes);

export default app;
