import express from 'express';
import {AddBlog} from '../controllers/blogController.js'
import { editBlog } from '../controllers/blogController.js';
import { allPost } from '../controllers/blogController.js';
import { allPostByCategories } from '../controllers/blogController.js';

const blogRouter = express.Router();

blogRouter.get('/add', AddBlog);
blogRouter.get('/edit', editBlog);
blogRouter.get('/all-post', allPost);
blogRouter.get('/all-post/categories', allPostByCategories);


export default blogRouter;