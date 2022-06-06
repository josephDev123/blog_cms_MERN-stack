import express from "express";
import cors from "cors";
import dotevn from 'dotenv';
import mongoose from 'mongoose';

dotevn.config();

//blog module
import blogPostRouter from './routes/blogPostRouter.js';
//role module
import {roleRouter} from './routes/roleRouter.js';
//permission module
import {permissionRouter} from './routes/permissionRouter.js'
//{ useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 }
// { useNewUrlParser: true, useCreateIndex: true}
const URL= process.env.MONGO_ATLAS_URL;
 
  
mongoose.connect(URL, {useNewUrlParser: true,  useUnifiedTopology: true})

mongoose.connection.on("error", function(error) {
  console.log(error)
})

mongoose.connection.on("open", function() {
  console.log("Connected to MongoDB database.")
})

const PORT = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

//blog routes
app.use('/blog', blogPostRouter);
//role routes
app.use('/role', roleRouter);
//permission routes
app.use('/permission', permissionRouter);
//any routes that does not exist
app.use('*', (req, res)=>{
    res.json({'message':'this url is not on our routes'})
    // res.end();
});

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
})