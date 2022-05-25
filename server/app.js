import express from "express";
import cors from "cors";
import dotevn from 'dotenv';
import mongoose from 'mongoose';

mongoose.connect()

//blog module
import blogRouter from './routes/blogRouter.js';
//role module
import {roleRouter} from './routes/roleRouter.js';
//permission module
import {permissionRouter} from './routes/permissionRouter.js'

dotevn.config();

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json())

//blog routes
app.use('/blog', blogRouter);
//role routes
app.use('/role', roleRouter);
//permission routes
app.use('/permission', permissionRouter);
//any routes that does not exist
app.use('*', (req, res)=>{
    res.json({'message':'this url is not on our routes'})
    res.end();
});

app.listen(PORT, ()=>{
    console.log(   `server running on port ${PORT}`)
})

