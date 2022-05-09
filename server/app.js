import express from "express";
import cors from "cors";
import dotevn from 'dotenv';
import mongoose from 'mongoose';
import blogRouter from './routes/blogRouter.js';

dotevn.config();

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json())

app.use('/blog', blogRouter);
app.use('*', (req, res)=>{
    res.send('this url is not on our routes')
    res.end();
});

app.listen(PORT, ()=>{
    console.log(   `server running on port ${PORT}`)
})

