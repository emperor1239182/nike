import {Schema, models, model} from "mongoose"


const PurchaseSchema = new Schema({
    name: { type: String },
    image: { type: String },
    price: { type: String }, 
    creator: { 
        type: Schema.Types.ObjectId, 
        ref: 'User' // Reference to your User model
    }
});

const Purchases = models.Purchases || model("Purchases", PurchaseSchema);
export default Purchases;