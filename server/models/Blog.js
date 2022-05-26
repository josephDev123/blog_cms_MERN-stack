import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    'creator':String,
    'title':String,
    'image_link':String,
    'content':String,
    'category':String
})

export const Blog = mongoose.model('Blog', blogSchema);