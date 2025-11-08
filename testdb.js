import mongoose from "mongoose";

const uri = "mongodb+srv://emmybanks:Emmybanks@cluster0.dqzycbx.mongodb.net/?appName=Cluster0/nikeapp";

mongoose.connect(uri)
  .then(() => {
    console.log("✅ Connected to MongoDB!");
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ Connection failed:", err);
    process.exit(1);
  });
