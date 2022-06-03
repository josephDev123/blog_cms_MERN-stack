import express from 'express';
import {AddBlog, editBlog, allPost, allPostByCategories} from '../controllers/blogPostController.js';


const blogPostRouter = express.Router();

blogPostRouter.post('/create-post', AddBlog);
blogPostRouter.get('/edit', editBlog);
blogPostRouter.get('/all-post', allPost);
blogPostRouter.get('/all-post/categories', allPostByCategories);


export default blogPostRouter;