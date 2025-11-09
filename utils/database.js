import mongoose from "mongoose";

let isConnected = false;

export const ConnectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log('MongoDB is already connected');
        return;
    }  else {
        console.log("no mongoDB")
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 30000,
            socketTimeoutMS: 45000,
            dbName : "nikeapp",
        })

        isConnected = true;
        console.log("MongoDB connected");

    } catch(error){
        console.log("mongoDb not connected :", error);
    }
}