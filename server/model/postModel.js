import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {type: String},
    writer: {type: String, trim: true},
    poem: {type: String}
})


const postModel = mongoose.model('posts', postSchema)


export default postModel;