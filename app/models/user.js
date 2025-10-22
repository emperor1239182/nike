import { Schema, models, model } from "mongoose";

const UserSchema = new Schema({
    email : {
        type : String,
        unique : [true, "Email address already exists!"],
        required : [true, "Emial is required"]
    },

    firstName : {
        type : String,
        required : [true, "Username is required"]
    },

    surName : {
        type : String,
        required : [true, "Username is required"]
    },

    password : {
        type : String,
        required : true
    },

    DOB : {
        type : String,
        required : true
    },
 
});

const User = models.User || model("User", UserSchema);
export default User;