import {Post} from '../models/Blog.js';

export const AddBlog = (req, res)=>{
   const post = req.body;
  
    const createPost = new Post({
        creator:'joseph',
        // 'title':post.title,
        // 'image_link':'',
        // 'content':post.content,
        // 'category':post.categories
    })

    createPost.save(error=>{
        return error ? res.json({'message': 'post submitted successfully'}):res.json({'message': 'post submitted not successfully'})
       
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
