import express from 'express';
import {AddBlog, editBlog, allPost, allPostByCategories} from '../controllers/blogController.js';


const blogRouter = express.Router();

blogRouter.get('/create-post', AddBlog);
blogRouter.get('/edit', editBlog);
blogRouter.get('/all-post', allPost);
blogRouter.get('/all-post/categories', allPostByCategories);


export default blogRouter;