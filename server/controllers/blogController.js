import {Blog} from '../models/Blog.js';

export const AddBlog = (req, res)=>{
   const post = req.body;
  
    const blog = new Blog({
        'creator':'joseph',
        'title':post.title,
        'image_link':'',
        'content':post.content,
        'category':post.categories
    })
    blog.save()
    res.json({'message': 'post submitted successfully'})
    res.end();
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
