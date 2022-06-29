import {Post} from '../models/Blog.js';

export const AddBlog = (req, res)=>{
   const post = req.body;
  
    const createPost = new Post({
        creator:post.creator,
        title:post.title,
        image_link:post.image_link,
        content:post.content,
        category:post.categories
    })

    createPost.save(error=>{
        return error ? res.json({'message': 'Post fails'}):res.json({'message': 'post submitted successfully'})
       
    })   

}

export const GetPostCreatedByMe = (req, res)=>{
    const param = req.params.creator;
   Post.find({'creator':param}, (err, resp)=>{
    if(err) throw new Error('Could not fetch your post data')
    return res.json(resp);
   })
  
 
}

export const editBlog = (req, res)=>{
    res.json('edit post');
}
 
export const allPost = (req, res)=>{
    res.json('all post')
}

export const allPostByCategories = (req, res)=>{
    res.json('all post by categories')
}
