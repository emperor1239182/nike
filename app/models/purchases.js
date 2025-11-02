import {Schema, models, model} from "mongoose"

const PurchaseSchema = new Schema({
    name : {type : String},

    image : {type : String}
})

const Purchases = models.Purchases || model("Purchases", PurchaseSchema);
export default Purchases;