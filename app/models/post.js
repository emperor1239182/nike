import {Schema, model, models} from "mongoose"

const postSchema = new Schema({

    creator : {
        type : Schema.Types.ObjectId,
        ref : "User"
    },

    post : {
        type : string,
        required : [true, "Write a review"],
    },

    image : {
        type : string
    }
});

const Post = models.Post || model("Post", postSchema);
export default Post;