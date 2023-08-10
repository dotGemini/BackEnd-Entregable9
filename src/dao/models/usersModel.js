import mongoose from 'mongoose';

const collection = 'Users';

const schema = new mongoose.Schema({
    first_name:String,
    last_name:String,
    email:String,
    birth_date :Number,
    admin: {
        type: Boolean,
        default: false
    },
    password: String,
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Carts",
        required: false,
    },
    admin: {
        type: Boolean,
        default: false
    }
})

const userModel = mongoose.model(collection,schema);

export default userModel;