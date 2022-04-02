import mongoose from "mongoose";

const Schema =mongoose.Schema

const postSchema=new Schema({
    title:String,
    
    subtitle:String,
    content:String,
    tag:String,
    image:String,

},{
    collection:'posts',
    timestamps:true
})

const Post=mongoose.model('Post',postSchema);

export default Post;