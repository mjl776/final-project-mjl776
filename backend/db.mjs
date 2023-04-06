import mongoose from 'mongoose';

const User = new mongoose.Schema({
    username: String,
    password: String, 
    blogPosts: Array, 
    photos: Array
});

const Blog = new mongoose.Schema({
    username: String,
    text: String,
    photo: String, 
    createdDate: String
});

const Photo = new mongoose.Schema({
    username: String,
    createdDate: String, 
    photo: String
});

const Comment = new mongoose.Schema({
    postId: String,
    commentText: String, 
    username: String,
    createdDate: String
});



