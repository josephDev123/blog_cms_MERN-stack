import express from 'express';
import {blog} from '../controllers/blog.js'

const blogRouter = express.Router();

blogRouter.get('/', blog);

export default blogRouter;