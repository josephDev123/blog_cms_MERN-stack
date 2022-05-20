

export const AddBlog = (req, res)=>{
    res.send('add post')
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
