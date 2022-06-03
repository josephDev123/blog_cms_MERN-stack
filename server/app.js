import express from "express";
import cors from "cors";
import dotevn from 'dotenv';
import mongoose from 'mongoose';


//blog module
import blogPostRouter from './routes/blogPostRouter.js';
//role module
import {roleRouter} from './routes/roleRouter.js';
//permission module
import {permissionRouter} from './routes/permissionRouter.js'
//{ useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 }
// { useNewUrlParser: true, useCreateIndex: true}
const uri="mongodb+srv://user123:user123@blogcms.xvb1lfv.mongodb.net/?retryWrites=true&w=majority";


// mongoose.connect(uri, function(error) {
//     console.log('db not connecting');
//   });
  try {
    await mongoose.connect(uri);
  } catch (error) {
    console.log(error.message);
  }

  mongoose.connection.on('error', err => {
    console.log(err.message);
  });

dotevn.config();

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
    console.log(   `server running on port ${PORT}`)
})

