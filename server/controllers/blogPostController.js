import {Post} from '../models/Blog.js';

export const AddBlog = (req, res)=>{
   const post = req.body;
  
    const createPost = new Post({
        creator:post.creator,
        title:post.title,
        image_link:'hjv dbdxvddvxvv xdb xcbcxkj',
        content:post.content,
        category:post.categories
    })

    createPost.save(error=>{
        return error ? res.json({'message': 'Post fails'}):res.json({'message': 'post submitted successfully'})
       
    })   

}

export const editBlog = (req, res)=>{
    res.json('edit post')
}
 
export const allPost = (req, res)=>{
    res.json('all post')
}

export const allPostByCategories = (req, res)=>{
    res.json('all post by categories')
}
