import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {type: String, required: true},
    writer: {type: String, required: true, trim: true},
    poem: {type: String , required: true},
    date: { type: Date, required: true, default: Date.now}
})


const postModel = mongoose.model('posts', postSchema)


export default postModel;