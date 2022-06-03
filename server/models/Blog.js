import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    'creator':String,
    'title':String,
    'image_link':String,
    'content':String,
    'category':String
})

export const Post = mongoose.model('Post', blogSchema);