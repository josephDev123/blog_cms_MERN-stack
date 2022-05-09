import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    'tile':String,
    'image_link':String,
    'content':String,
    'category':String
})

export const Blog = mongoose.model('Blog', blogSchema);