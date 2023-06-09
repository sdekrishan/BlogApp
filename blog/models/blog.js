import {Schema, model,models} from "mongoose";

const blogSchema = new Schema({
    creator:{
        type : Schema.Types.ObjectId,
        ref:'User',
    },
    blog:{
        type:String,
        required:[true, 'Prompt is required.']
    },
    tag:{
        type:String,
        required:[true, "Tag is required."]
    }
})

const BlogModel = models.Blog || model("Blog",blogSchema)

export default BlogModel
