import {Schema, model, models} from "mongoose"

const postSchema = new Schema({

    creator : {
        type : Schema.Types.ObjectId,
        ref : "User",
        index : true
    },

    post : {
        type : String,
        required : [true, "Write a review"],
        index : true
    },

    image : {
        type : String,
        index : true
    }
});

const Post = models.Post || model("Post", postSchema);
export default Post;